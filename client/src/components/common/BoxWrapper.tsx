import React, { FC } from 'react';
import Box from '@mui/material/Box';
import { BoxWrapperProps } from '../../models/box';

const BoxWrapper: FC<BoxWrapperProps> = ({ children, height = '100%', backgroundColor = 'primary.100' }) => {
    return (
        <Box
            sx={{
                width: '100%',
                height,
                boxSizing: 'border-box',
                padding: { mobile: 1, tablet: 2, laptop: 2.5 },
                backgroundColor,
            }}
        >
            {children}
        </Box>
    );
};

export default BoxWrapper;
