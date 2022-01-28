import React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { StyledEngineProvider } from '@mui/material/styles';

type AboutTimelineDetailProps = {
    title: string,
    detail: {
        project: string,
        tasks: string[]
    }[]
}

export default function AboutTimelineDetail({title, detail}:AboutTimelineDetailProps) {
  
  return (
      <StyledEngineProvider injectFirst>
        <Accordion sx={{backgroundColor:"primary.100", boxShadow: "none"}} >
            <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
                sx={{
                    flex:0,  
                    justifyContent: "flex-start", 
                    padding: { mobile: 0, tablet: 1, laptop: 2}, 
                    "& .Mui-expanded": 
                    {marginBottom: "0 !important"}}}
            >
            <Typography variant='h6' sx={{wordBreak: "break-word"}}>{title}</Typography>
            </AccordionSummary>
            <AccordionDetails>
                {detail && detail.map(({project, tasks})=>(
                    <div key={project}>
                        <Typography variant='body1' sx={{paddingLeft:1}}>{project}</Typography>
                        {tasks.map((task,i)=>(
                            <Typography key={`${project}-${i}`} variant='body2' sx={{paddingLeft:2}}>{task}</Typography>
                        ))}
                    </div>
                ))}
            </AccordionDetails>
        </Accordion>
      </StyledEngineProvider>
  );
}