import React, { FC, useContext } from 'react';

import Box from '@mui/material/Box';
import { Link } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import { LangContext } from '../../context/lang';

import { ProjectFeatureBox, ProjectHeader } from './common';

const ProjectPatent: FC = () => {
    const {
        dispatch: { translate },
    } = useContext(LangContext);
    return (
        <Box>
            <ProjectHeader href={process.env.REACT_APP_PROJECT_PATENT_LINK} title={translate('patentName')} />
            <Box
                sx={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    alignItems: 'start',
                    justifyContent: 'center',
                }}
            >
                <Box sx={{ padding: { mobile: 1, tablet: 2 } }}>
                    <ProjectFeatureBox
                        name={'patent'}
                        title={'Back-end'}
                        features={[
                            translate('patentBackFeatureOne'),
                            translate('patentBackFeatureTwo'),
                            translate('patentBackFeatureThree'),
                            translate('patentBackFeatureFour'),
                            translate('patentBackFeatureFive'),
                            translate('patentBackFeatureSix'),
                        ]}
                    />
                    <Link href={process.env.REACT_APP_PROJECT_PATENT_GITHUB_BACK}>
                        <GitHubIcon />
                    </Link>
                </Box>
            </Box>
        </Box>
    );
};
export default ProjectPatent;
