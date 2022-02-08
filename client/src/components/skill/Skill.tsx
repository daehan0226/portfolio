import React, { useContext } from 'react';
import Box from '@mui/material/Box';
import { RefProps } from '../../models';
import { BoxWrapper, BoxHeader } from '../common';
import { LangContext } from '../../context/lang';
import { Typography } from '@mui/material';

const skills: [string, string[]][] = [
    ['Backend', ['Python', 'Flask', 'Pytest', 'NodeJS-TypeScript', 'Express', 'Jest', 'AWS - Lambda, ECR, EC2, S3', 'Cloud - Firestore']],
    ['Frontend', ['JavaScript', 'TypeScript', 'ReactJS', 'NextJS', 'HTML/CSS/SASS']],
    ['DevOps', ['Docker', 'Nginx', 'MySQL', 'MongoDB', 'Elasticsearch', 'Redis', 'Github Actions']],
    ['Languages', ['Korean - Native Speaker', 'English - Fluent']],
];

const Skill = ({ refObject }: RefProps) => {
    const {
        dispatch: { translate },
    } = useContext(LangContext);

    return (
        <div ref={refObject}>
            <BoxWrapper backgroundColor="primary.500">
                <BoxHeader title={translate('skill')} />
                <Box sx={{ width: '100%' }} mb={3}>
                    {skills.map(([category, tech]) => (
                        <Box
                            key={category}
                            sx={{
                                display: 'flex',
                                flexDirection: { mobile: 'column', tablet: 'row' },
                                width: { mobile: '100%', laptop: '70%', desktop: '60%' },
                                justifyContent: 'flex-start',
                                margin: '0px auto',
                            }}
                        >
                            <Typography variant="h6" sx={{ width: '15%', textAlign: 'left' }} m={1}>
                                {category}
                            </Typography>
                            <Box sx={{ textAlign: 'left', width: { mobile: '100%', laptop: '80%' } }} m={1}>
                                <Typography display="inline" m={1} variant="body1">
                                    {tech.join(', ')}
                                </Typography>
                            </Box>
                        </Box>
                    ))}
                </Box>
            </BoxWrapper>
        </div>
    );
};

export default Skill;
