import React from 'react';

import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { Link } from '@mui/material';
import Divider from '@mui/material/Divider';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';

import {IProject} from "../../models"

type FeatureBoxProps = {
  name: string;
  title: string;
  features?: string[]
}

const FeatureBox = ({name, title, features}:FeatureBoxProps) => {
  return (
    <Box key={`${name}-${title}`} sx={{margin: {mobile:1, tablet: 2}}}>
      <Typography variant="body1" color="primary.contrastText" mt={2} mb={2} >
        {title}
      </Typography>
      {features && features.map((feature,i)=>(
        <Typography key={`${name}-${title}-${i}`} variant="body2" color="primary.contrastText" sx={{ marginBottom: 1, textAlign: 'left'}}  >{feature}</Typography>
      ))
      }
    </Box>
  )
}

type ProjectDetailPropS = {
  project:IProject
}

const ProjectDetail = ({project}:ProjectDetailPropS) => {

  return (
    <Box >
        <Link variant="h4" href={project.link} sx={{ margin: 2}} color="secondary.700">
            {project.name}
        </Link>
      <Box sx={{ display: 'flex', flexWrap:'wrap', alignItems: 'start', justifyContent:'center'}} >
        {project.image && (
            <Box sx={{width: {mobile: 200, tablet: 300}}}>
              <Link href={project.link}>
                <ImageListItem>
                  <img
                    src={`${process.env.PUBLIC_URL}/images/${project.image}`} 
                    alt={project.name}
                    loading="lazy"
                    style={{width: "100%", height: "auto"}} 
                  />
                  <ImageListItemBar
                    title={"click to the webpage"}                    
                  />
                </ImageListItem>
              </Link>
            </Box>
        )}
        <Box sx={{ padding: {mobile:1, tablet: 2}}}>
          {project.front && (
            <FeatureBox name={project.name} title={"Front"} features={project.front.features} />
          )}
          {project.back && (
            <FeatureBox name={project.name} title={"Back"} features={project.back.features} />
          )}
          {project.crawler && (
            <FeatureBox name={project.name} title={"Crawler"} features={project.crawler.features} />
          )}
        </Box>
      </Box>
      <Divider 
          sx={{
            backgroundColor: "primary.50", 
            borderBottomWidth: { mobile: 1, tablet: 1.5, laptop: 2}, 
            width: "60%", 
            margin: '20px auto'
          }}/>
    </Box>
                
  );
}
export default ProjectDetail;