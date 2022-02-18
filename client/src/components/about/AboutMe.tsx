import React, { useContext } from 'react';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { LangContext } from '../../context';

export default function AboutMe() {
    const {
        dispatch: { translate },
    } = useContext(LangContext);
    return (
        <Box sx={{ width: { mobile: '90%', tablet: '70%', laptop: '50%' }, textAlign: 'left', margin: '10px auto' }}>
            <Typography variant="body1" mb={2}>
                {translate('AboutOne')}
            </Typography>
            <Typography variant="body1" mb={2}>
                {translate('AboutTwo')}
            </Typography>
            <Typography variant="body1" mb={2}>
                {translate('AboutThree')}
            </Typography>
        </Box>
    );
}
