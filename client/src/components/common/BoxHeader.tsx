import React from 'react';
import { Typography } from '@mui/material';
import Divider from '@mui/material/Divider';
import { BoxHeaderProps } from '../../models/box';

const BoxHeader = ({ title, color = 'primary.700', divierColor = 'primary.700' }: BoxHeaderProps) => {
    return (
        <>
            <Typography
                variant="h4"
                mt={1}
                sx={{
                    color,
                    marginBottom: { mobile: 1, tablet: 1.5, laptop: 2 },
                }}
            >
                {title}
            </Typography>
            <Divider
                sx={{
                    backgroundColor: divierColor,
                    borderBottomWidth: { mobile: 2, tablet: 3, laptop: 4 },
                    width: title.length * 20,
                    maxWidth: '60%',
                    margin: '10px auto',
                    marginBottom: { mobile: 2, tablet: 3, laptop: 4 },
                }}
            />
        </>
    );
};

export default BoxHeader;
