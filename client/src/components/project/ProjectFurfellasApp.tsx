import React, { FC, useContext } from 'react';

import Box from '@mui/material/Box';
import { Link } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import { LangContext } from '../../context/lang';

import { ProjectFeatureBox, ProjectImageBox, ProjectHeader } from './common';

const ProjectFurfellasApp: FC = () => {
    const {
        dispatch: { translate },
    } = useContext(LangContext);
    return (
        <Box>
            <ProjectHeader href="" title={translate('furfellasAppName')} />
            <Box
                sx={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    alignItems: 'start',
                    justifyContent: 'center',
                }}
            >
                <ProjectImageBox link={''} src={`${process.env.PUBLIC_URL}/images/${process.env.REACT_APP_PROJECT_FURFELLAS_APP_IMAGE}`} alt={translate('furfellasAppName')} />
                <Box sx={{ padding: { mobile: 1, tablet: 2 } }}>
                    <ProjectFeatureBox name={'furfellasApp'} title={'Front-end'} features={[translate('furfellasAppFrontFeatureOne'), translate('furfellasAppFrontFeatureTwo')]} />
                    <Link href={process.env.REACT_APP_PROJECT_FURFELLAS_APP_GITHUB_FRONT}>
                        <GitHubIcon />
                    </Link>
                    <ProjectFeatureBox
                        name={'furfellasApp'}
                        title={'Back-end'}
                        features={[
                            translate('furfellasAppBackFeatureOne'),
                            translate('furfellasAppBackFeatureTwo'),
                            translate('furfellasAppBackFeatureThree'),
                            translate('furfellasAppBackFeatureFour'),
                            translate('furfellasAppBackFeatureFive'),
                            translate('furfellasAppBackFeatureSix'),
                        ]}
                    />
                    <Link href={process.env.REACT_APP_PROJECT_FURFELLAS_APP_GITHUB_BACK}>
                        <GitHubIcon />
                    </Link>
                </Box>
            </Box>
        </Box>
    );
};
export default ProjectFurfellasApp;
