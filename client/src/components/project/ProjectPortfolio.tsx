import React, { FC, useContext } from 'react';

import Box from '@mui/material/Box';
import { Link } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import { LangContext } from '../../context/lang';

import { ProjectFeatureBox, ProjectImageBox, ProjectHeader } from './common';

const ProjectPortfolio: FC = () => {
    const {
        dispatch: { translate },
    } = useContext(LangContext);
    return (
        <Box>
            <ProjectHeader href={''} title={translate('portfolioName')} />
            <Box
                sx={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    alignItems: 'start',
                    justifyContent: 'center',
                }}
            >
                <ProjectImageBox src={`${process.env.PUBLIC_URL}/images/${process.env.REACT_APP_PROJECT_PORTFOLIO_IMAGE}`} alt={translate('portfolioName')} />
                <Box sx={{ padding: { mobile: 1, tablet: 2 } }}>
                    <ProjectFeatureBox
                        name={'portfolio'}
                        title={'Front-end'}
                        features={[translate('portfolioFrontFeatureOne'), translate('portfolioFrontFeatureTwo'), translate('portfolioFrontFeatureThree')]}
                    />
                    <ProjectFeatureBox
                        name={'portfolio'}
                        title={'Back-end'}
                        features={[translate('portfolioBackFeatureOne'), translate('portfolioBackFeatureTwo'), translate('portfolioBackFeatureThree'), translate('portfolioBackFeatureFour')]}
                    />
                    <Link href={process.env.REACT_APP_PROJECT_PORTFOLIO_GITHUB}>
                        <GitHubIcon />
                    </Link>
                </Box>
            </Box>
        </Box>
    );
};
export default ProjectPortfolio;
