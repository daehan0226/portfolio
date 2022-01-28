import React, {useState, useMemo, useContext} from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

import {RefProps, IBlog} from "../../models"
import {BoxWrapper, BoxHeader, ErrorAlert, LoadingBox} from "../common"
import BlogCard from './BlogCard';
import useGetDocs from '../../hooks/useGetDocs';
import { LangContext } from '../../context/lang';

const Blog = ({refObject}:RefProps) => {
  const {data, loading, error} = useGetDocs<IBlog>({collectionName:"tistory_posts", sort:true});
  const [numberOfitemsShown, setNumberOfItemsToShown] = useState<number>(5);
  const { dispatch: { translate }} = useContext(LangContext);

  const showMore = () => {
    if (numberOfitemsShown + 3 <= data.length) {
      setNumberOfItemsToShown(numberOfitemsShown + 5);
    } else {
      setNumberOfItemsToShown(data.length);
    }
  };
  
  const itemsToShow = useMemo(() => {
    return data
      .slice(0, numberOfitemsShown)
      .map((post, i) => <BlogCard key={i} post={post} />);
  }, [data, numberOfitemsShown]);
  return (
    <div ref={refObject}>
      <BoxWrapper>
          <BoxHeader title={translate("blog")} />
          <Box>
            {loading && (<LoadingBox />)}
            {error && (<ErrorAlert msg={error} />)}
          </Box>
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: { mobile: "100%", tablet: "repeat(auto-fill, minmax(360px, 1fr))"} ,
              gridGap: 10,
              margin: '50px auto',
              "> *" : {
                margin: "auto"
              }
            }}
            >
            {itemsToShow.length && itemsToShow}
          <Box>
          {itemsToShow.length < data.length && (
            <Button sx={{color:"secondary.300", height: 100}} onClick={showMore}>Show more </Button>
          )}
          </Box>
          </Box>
      </BoxWrapper>
    </div>
  );
}

export default Blog;
