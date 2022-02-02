import React, { FC, useEffect } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import Chip from '@mui/material/Chip';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import { convertDateToStr } from '../../utils';
import { IBlog } from '../../models';

export interface BlogCardProps {
    post: IBlog;
}

const BlogCard: FC<BlogCardProps> = ({ post }) => {
    return (
        <Card sx={{ width: { mobile: '100%', tablet: 360 }, height: 250, display: 'flex', flexDirection: 'column' }}>
            <CardContent>
                <Chip label={post.category} variant="outlined" size="small" sx={{ color: 'secondary.900', borderColor: 'secondary.900', marginRight: 'auto' }} />
                <Typography
                    gutterBottom
                    variant="h5"
                    component="div"
                    color="primary.900"
                    sx={{
                        marginTop: 1,
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                        display: '-webkit-box',
                        '-webkit-line-clamp': '1',
                        '-webkit-box-orient': 'vertical',
                    }}
                >
                    {post.title}
                </Typography>
                <Typography variant="body2" color="secondary.100" sx={{ textAlign: 'right' }}>
                    {convertDateToStr(post.date.seconds)}
                </Typography>
                <Typography
                    variant="body1"
                    color="primary.900"
                    sx={{
                        textAlign: 'left',
                        marginTop: 2,
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                        display: '-webkit-box',
                        '-webkit-line-clamp': '3',
                        '-webkit-box-orient': 'vertical',
                    }}
                >
                    {post.desc}
                </Typography>
            </CardContent>
            <CardActions sx={{ marginTop: 'auto' }}>
                <Link href={post.link} sx={{ marginLeft: 'auto' }}>
                    <Button size="small" sx={{ color: 'secondary.900', '&:hover': { color: 'secondary.400' } }}>
                        Learn More
                    </Button>
                </Link>
            </CardActions>
        </Card>
    );
};

export default BlogCard;
