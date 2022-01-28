import React, {FC} from 'react';
import Box from '@mui/material/Box';

import { Typography } from '@mui/material';
import { EmailIconBox, GitHubIconBox, TistoryIconBox } from './common/SocialIcons';


const Footer: FC = () => {
  return (
    <Box sx={{
      backgroundColor: "primary.800",
      padding: 1,
    }}>
      <Box sx={{
        width: { mobile: 150, tablet: 200, laptop: 250},
        height: 200,
        margin: '0 auto',
        display: 'flex',
        alignItems: "center",
        justifyContent: "space-between"
    }}>
      <GitHubIconBox color="secondary" />
      <EmailIconBox color="secondary" />
      <TistoryIconBox color="secondary" />
      </Box>  
      <Typography variant='body1' sx={{color: 'primary.100'}} >{process.env.REACT_APP_COPYRIGHT} {'\u00A9'}{new Date().getFullYear()}</Typography>
    </Box>
  );
};

export default Footer;