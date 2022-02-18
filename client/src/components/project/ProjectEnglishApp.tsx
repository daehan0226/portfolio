import React, { FC, useContext } from 'react';

import Box from '@mui/material/Box';
import { Link } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import { LangContext } from '../../context/lang';

import { ProjectFeatureBox, ProjectImageBox, ProjectHeader } from './common';

const ProjectEnglishApp: FC = () => {
    const {
        dispatch: { translate },
    } = useContext(LangContext);
    return (
        <Box>
            <ProjectHeader href={process.env.REACT_APP_PROJECT_ENGLISH_APP_LINK} title={translate('englihAppName')} />
            <Box
                sx={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    alignItems: 'start',
                    justifyContent: 'center',
                }}
            >
                <ProjectImageBox //{process.env.REACT_APP_PROJECT_ENGLISH_APP_LINK}
                    src={`${process.env.PUBLIC_URL}/images/${process.env.REACT_APP_PROJECT_ENGLISH_APP_IMAGE}`}
                    alt={translate('englihAppName')}
                />
                <Box sx={{ padding: { mobile: 1, tablet: 2 } }}>
                    <ProjectFeatureBox
                        name={'englishApp'}
                        title={'Front-end'}
                        features={[translate('englihAppFrontFeatureOne'), translate('englihAppFrontFeatureTwo'), translate('englihAppFrontFeatureThree')]}
                    />
                    <Link href={process.env.REACT_APP_PROJECT_ENGLISH_APP_GITHUB_FRONT}>
                        <GitHubIcon />
                    </Link>
                    <ProjectFeatureBox
                        name={'englishApp'}
                        title={'Back-end'}
                        features={[translate('englihAppBackFeatureOne'), translate('englihAppBackFeatureTwo'), translate('englihAppBackFeatureThree')]}
                    />
                    <Link href={process.env.REACT_APP_PROJECT_ENGLISH_APP_GITHUB_BACK}>
                        <GitHubIcon />
                    </Link>
                    <ProjectFeatureBox name={'englishApp'} title={'Crawler'} features={[translate('englihAppCrawlerFeatureOne')]} />
                    <Link href={process.env.REACT_APP_PROJECT_ENGLISH_APP_GITHUB_CRAWLER}>
                        <GitHubIcon />
                    </Link>
                </Box>
            </Box>
        </Box>
    );
};
export default ProjectEnglishApp;
