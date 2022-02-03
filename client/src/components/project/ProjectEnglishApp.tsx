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
                <ProjectImageBox
                    link={process.env.REACT_APP_PROJECT_ENGLISH_APP_LINK}
                    src={`${process.env.PUBLIC_URL}/images/${process.env.REACT_APP_PROJECT_ENGLISH_APP_IMAGE}`}
                    alt={translate('englihAppName')}
                />
                <Box sx={{ padding: { mobile: 1, tablet: 2 } }}>
                    <ProjectFeatureBox
                        name={'englishApp'}
                        title={'Front'}
                        features={[translate('englihAppFrontFeatureOne'), translate('englihAppFrontFeatureTwo'), translate('englihAppFrontFeatureThree'), translate('englihAppFrontFeatureFour')]}
                    />
                    <Link href={process.env.REACT_APP_PROJECT_ENGLISH_APP_GITHUB_FRONT}>
                        <GitHubIcon />
                    </Link>
                    <ProjectFeatureBox name={'englishApp'} title={'Back'} features={[translate('englihAppBackFeatureOne'), translate('englihAppBackFeatureTwo')]} />
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
