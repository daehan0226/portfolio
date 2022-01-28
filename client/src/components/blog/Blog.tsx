import React, {useState, useEffect} from 'react';
import Box from '@mui/material/Box';

import {RefProps, IBlog} from "../../models"
import {BoxWrapper, BoxHeader} from "../common"
import BlogCard from './BlogCard';

import {ErrorAlert, LoadingBox} from "../common"
import useGetDocs from '../../hooks/useGetDocs';

const Blog = ({refObject}:RefProps) => {
  const {data, loading, error} = useGetDocs<IBlog>({collectionName:"tistory_posts", sort:true});

  return (
    <div ref={refObject}>
      <BoxWrapper>
          <BoxHeader title={"Blog"} />
          <>
            {loading && (<LoadingBox />)}
            {error && (<ErrorAlert msg={error} />)}
          </>
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
            {data && data.map((post, i)=> (
              <BlogCard key={i} post={post} />
            ))}
          </Box>
      </BoxWrapper>
    </div>
  );
}

export default Blog;
