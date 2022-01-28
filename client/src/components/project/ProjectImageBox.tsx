import React, {FC} from 'react';

import { Link } from '@mui/material';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import Box from '@mui/material/Box';

type ProjectImageBoxProps = {
  src: string;
  alt: string;
}

const ProjectImageBox: FC<ProjectImageBoxProps> = ({src, alt}) => {
  return (
    <Box sx={{width: {mobile: 200, tablet: 300}}}>
      <Link href={process.env.REACT_APP_PROJECT_PORTFOLIO_LINK}>
        <ImageListItem>
          <img
            src={src} 
            alt={alt}
            loading="lazy"
            style={{width: "100%", height: "auto"}} 
          />
          <ImageListItemBar
            title={"click to the webpage"}     
          />
        </ImageListItem>
      </Link>
    </Box>
  )
}
export default ProjectImageBox;