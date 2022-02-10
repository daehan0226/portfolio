import React, { useContext } from 'react';
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { StyledEngineProvider } from '@mui/material/styles';
import { LangContext } from '../../context/lang';
import { ITimeLineItemDeatail } from '../../models/about';
import { Box } from '@mui/material';
import { AuthContext } from '../../context';

export default function AboutTimelineDetail({ title, detail, date }: ITimeLineItemDeatail) {
    const {
        state: { language },
    } = useContext(LangContext);
    const { state } = useContext(AuthContext);
    return (
        <StyledEngineProvider injectFirst>
            <Accordion sx={{ backgroundColor: 'primary.100', boxShadow: 'none' }} defaultExpanded={detail && detail.length > 0}>
                <AccordionSummary
                    expandIcon={detail && <ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                    sx={{
                        flex: 0,
                        justifyContent: 'flex-start',
                        alignItems: { mobile: 'center' },
                        padding: 0,
                        '& .Mui-expanded': { margin: '0 !important' },
                    }}
                >
                    <Box>
                        <Typography sx={{ display: { tablet: 'none' } }} variant="body1">
                            {date}
                        </Typography>
                        <Typography variant="h6" sx={{ wordBreak: 'break-word' }}>
                            {title[language]}
                            {state.auth.isAdmin && <ModeEditIcon />}
                        </Typography>
                    </Box>
                </AccordionSummary>
                <AccordionDetails sx={{ padding: 0, paddingBottom: 1 }}>
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
