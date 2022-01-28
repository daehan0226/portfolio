import React, {FC} from 'react';

import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

type ProjectFeatureBoxProps = {
  name: string;
  title: string;
  features?: string[]
}

const ProjectFeatureBox: FC<ProjectFeatureBoxProps> = ({name, title, features}) => {
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
export default ProjectFeatureBox;