import React, { useContext } from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { StyledEngineProvider } from '@mui/material/styles';
import { LangContext } from '../../context/lang';
import { ITimeLineItemDeatail } from '../../models/about';
import { Box } from '@mui/material';

interface IAboutTimelineDetail extends ITimeLineItemDeatail {
    date: string;
}

export default function WorkExperienceDetail({ id, title, tasks, date }: IAboutTimelineDetail) {
    const {
        state: { language },
    } = useContext(LangContext);
    return (
        <StyledEngineProvider injectFirst>
            <Accordion sx={{ backgroundColor: 'primary.100', boxShadow: 'none' }} defaultExpanded>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
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
                        <Typography variant="body1">{date}</Typography>
                        <Typography variant="h6" sx={{ wordBreak: 'break-word' }}>
                            {title[language]}
                        </Typography>
                    </Box>
                </AccordionSummary>
                <AccordionDetails sx={{ padding: 0, paddingBottom: 1 }}>
                    {tasks &&
                        tasks.map((task, i) => (
                            <Typography key={`${task}-${i}`} variant="body2" sx={{ paddingLeft: 2 }}>
                                {language === 'KR' ? task['KR'] : task['EN']}
                            </Typography>
                        ))}
                </AccordionDetails>
            </Accordion>
        </StyledEngineProvider>
    );
}
