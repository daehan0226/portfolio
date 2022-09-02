import React from 'react';

import Box from '@mui/material/Box';
import { Link } from '@mui/material';
import Typography from '@mui/material/Typography';

interface ICompany {
    name: string;
    homepage: string;
    date: string;
    tasks: string[];
}

const companies: ICompany[] = [
    {
        name: 'Neuralworks',
        homepage: 'https://neuralworks.io/',
        date: '2022-03-16 ~ ',
        tasks: ['Web Backend developer', 'NestJS', 'TDD(E2E, Intergation, Unit)', 'MongoDB(Mongoose), Lambda'],
    },
    {
        name: 'Acryl',
        homepage: 'https://www.acryl.ai/',
        date: '2019-08-12 ~ 2021-02-26',
        tasks: ['Web developer', 'ReactJS, HTML, CSS, SASS', 'Python, Flask, Crawler', 'MariaDB, Elasticsearch, Docker'],
    },
];

export default function Companies() {
    return (
        <Box sx={{ width: { mobile: '100%', tablet: 500, laptop: 1000 }, margin: '30px auto' }}>
            {companies.map(company => (
                <Box key={company.name} sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center', mb: 10 }}>
                    <Box sx={{ width: 200 }}>
                        <Link href={company.homepage} color="primary.800">
                            <Typography variant="h4">{company.name}</Typography>
                        </Link>
                        <Typography variant="body2" sx={{ wordBreak: 'break-word' }}>
                            ({company.date})
                        </Typography>
                    </Box>
                    <Box sx={{ textAlign: 'left', marginLeft: { mobile: 0, tablet: 7, laptop: 15 }, marginTop: { mobile: 1 } }}>
                        {company.tasks.map(task => (
                            <Typography key={task} variant="body1" sx={{ wordBreak: 'break-word' }}>
                                {'- '}
                                {task}
                            </Typography>
                        ))}
                    </Box>
                </Box>
            ))}
        </Box>
    );
}
