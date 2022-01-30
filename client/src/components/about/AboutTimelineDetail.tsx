import React, { useContext } from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { StyledEngineProvider } from '@mui/material/styles';
import { LangContext } from '../../context/lang';
import { ITimeLineItemDeatail } from '../../models/about';

export default function AboutTimelineDetail({ title, detail }: ITimeLineItemDeatail) {
    const {
        state: { language },
    } = useContext(LangContext);
    return (
        <StyledEngineProvider injectFirst>
            <Accordion sx={{ backgroundColor: 'primary.100', boxShadow: 'none' }}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                    sx={{
                        flex: 0,
                        justifyContent: 'flex-start',
                        padding: { mobile: 0, tablet: 1, laptop: 2 },
                        '& .Mui-expanded': { marginBottom: '0 !important' },
                    }}
                >
                    <Typography variant="h6" sx={{ wordBreak: 'break-word' }}>
                        {title[language]}
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    {detail &&
                        detail.map(({ project, tasks }) => (
                            <div key={project[language]}>
                                <Typography variant="body1" sx={{ paddingLeft: 1 }}>
                                    {project[language]}
                                </Typography>
                                {tasks.map((task, i) => (
                                    <Typography key={`${project}-${i}`} variant="body2" sx={{ paddingLeft: 2 }}>
                                        {task[language]}
                                    </Typography>
                                ))}
                            </div>
                        ))}
                </AccordionDetails>
            </Accordion>
        </StyledEngineProvider>
    );
}
