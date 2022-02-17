import React, { FC, useContext } from 'react';
import { Typography } from '@mui/material';
import { Box } from '@mui/system';

import { RefProps } from '../../models';
import ArrowIcon from '../common/ArrowIcon';
import { EmailIconBox, GitHubIconBox, TistoryIconBox } from '../common/SocialIcons';

import { LangContext } from '../../context/lang';

const Home: FC<RefProps> = ({ refObject, handleScroll }) => {
    const {
        dispatch: { translate },
    } = useContext(LangContext);

    const handleArrowClick = () => {
        if (handleScroll) {
            handleScroll('about');
        }
    };

    return (
        <div ref={refObject} style={{ position: 'relative', height: '90vh' }}>
            <Box
                sx={{
                    backgroundColor: 'primary.50',
                    margin: 'auto 0',
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}
            >
                <Typography variant="h2" sx={{ marginBottom: { mobile: 1, tablet: 2, laptop: 3 } }}>
                    {translate('homeTitle')}
                </Typography>
                <Typography variant="h6" sx={{ marginBottom: { mobile: 2, tablet: 4, laptop: 6 } }}>
                    {translate('homeSubTitle')}
                </Typography>
                <Box
                    sx={{
                        width: { mobile: 150, tablet: 200, laptop: 250 },
                        mt: 3,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                    }}
                >
                    <GitHubIconBox color="primary" />
                    <EmailIconBox color="primary" />
                    <TistoryIconBox color="primary" />
                </Box>
            </Box>
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    marginTop: '-60px',
                }}
            >
                <ArrowIcon up={false} handleClick={handleArrowClick} />
            </Box>
        </div>
    );
};

export default Home;
