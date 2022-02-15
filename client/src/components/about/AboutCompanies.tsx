import React from 'react';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

interface ICompany {
    name: string;
    homepage: string;
    date: string;
    tasks: string[];
}

const companies: ICompany[] = [
    {
        name: 'Acryl',
        homepage: 'https://www.acryl.ai/',
        date: '2019-08-12 ~ 2021-02-26',
        tasks: ['Web developer', 'ReactJS, HTML, CSS, SASS', 'Python, Flask, Crawler', 'MariaDB, Elasticsearch, Docker'],
    },
];

export default function AboutCompanies() {
    return (
        <Box sx={{ width: { mobile: '100%', tablet: 500, laptop: 1000 }, margin: '30px auto' }}>
            {companies.map(company => (
                <Box key={company.name} sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
                    <Typography variant="h4" sx={{ width: 200 }} mb={2}>
                        {company.name}
                    </Typography>
                    <Box sx={{ textAlign: 'left', marginLeft: { mobile: 0, tablet: 7, laptop: 15 } }}>
                        {company.tasks.map(task => (
                            <Typography key={task} variant="body1" sx={{ wordBreak: 'break-word' }}>
                                {'- '}
                                {task}
                            </Typography>
                        ))}
                        <Typography variant="body2" sx={{ wordBreak: 'break-word' }}>
                            ({company.date})
                        </Typography>
                    </Box>
                </Box>
            ))}
        </Box>
    );
}
