import React, { useState, useMemo, useContext, useEffect } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Chip from '@mui/material/Chip';

import { RefProps, IBlog } from '../../models';
import { BoxWrapper, BoxHeader, AlertMsg, LoadingBox } from '../common';
import BlogCard from './BlogCard';
import useGetDocs from '../../hooks/useGetDocs';
import { LangContext } from '../../context/lang';

const Blog = ({ refObject }: RefProps) => {
    const { data, loading, error } = useGetDocs<IBlog>({ collectionName: 'tistory_posts', sortKey: 'date' });
    const [categories, setCategories] = useState<string[]>([]);
    const [categoryPosts, setCategoryPosts] = useState<IBlog[]>([]);
    const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
    const [numberOfitemsShown, setNumberOfItemsToShown] = useState<number>(5);
    const {
        dispatch: { translate },
    } = useContext(LangContext);

    const showMore = () => {
        if (numberOfitemsShown + 3 <= data.length) {
            setNumberOfItemsToShown(numberOfitemsShown + 5);
        } else {
            setNumberOfItemsToShown(data.length);
        }
    };

    const handleSelectedCategories = (item: string) => {
        if (selectedCategories.includes(item)) {
            setSelectedCategories(selectedCategories.filter(category => category !== item));
        } else {
            setSelectedCategories([...selectedCategories, item]);
        }
    };

    useEffect(() => {
        setCategoryPosts(data.filter(item => selectedCategories.includes(item.category)));
    }, [selectedCategories]);

    const selectAllCategories = () => {
        if (categories.length === selectedCategories.length) {
            setSelectedCategories([]);
        } else {
            setSelectedCategories(categories);
        }
    };

    useEffect(() => {
        setSelectedCategories(Array.from(new Set(data.map(item => item.category))));
        setCategories(Array.from(new Set(data.map(item => item.category))));
    }, [data]);

    const itemsToShow = useMemo(() => {
        return categoryPosts.slice(0, numberOfitemsShown).map(post => <BlogCard key={post.id} post={post} />);
    }, [categoryPosts, numberOfitemsShown]);

    return (
        <div ref={refObject}>
            <BoxWrapper>
                <BoxHeader title={translate('blog')} />
                <Box>
                    <AlertMsg msg={translate('blogInfo')} title="" type="info" />
                    {loading && <LoadingBox />}
                    {error && <AlertMsg msg={error} title="Error" type="error" />}
                </Box>
                <Box>
                    <Chip
                        size="small"
                        label="All"
                        color={categories.length === selectedCategories.length ? 'success' : 'default'}
                        sx={{ m: 1 }}
                        onClick={() => {
                            selectAllCategories();
                        }}
                    />
                    {categories.map(category => (
                        <Chip
                            key={category}
                            size="small"
                            sx={{ m: 1 }}
                            label={category}
                            color={selectedCategories.includes(category) ? 'success' : 'default'}
                            onClick={() => {
                                handleSelectedCategories(category);
                            }}
                        />
                    ))}
                </Box>
                <Box
                    sx={{
                        display: 'grid',
                        gridTemplateColumns: { mobile: '100%', tablet: 'repeat(auto-fill, minmax(360px, 1fr))' },
                        gridGap: 10,
                        margin: '30px auto',
                        '> *': {
                            margin: 'auto',
                        },
                    }}
                >
                    {itemsToShow}
                    <Box>
                        {itemsToShow.length < categoryPosts.length && (
                            <Button sx={{ color: 'secondary.300', height: 100 }} onClick={showMore}>
                                Show more{' '}
                            </Button>
                        )}
                    </Box>
                </Box>
            </BoxWrapper>
        </div>
    );
};

export default Blog;
