import React, { FC } from 'react';

import { Link } from '@mui/material';

type ProjectHeaderProps = {
    href: string;
    title: string;
};

const ProjectHeader: FC<ProjectHeaderProps> = ({ href, title }) => {
    return (
        <Link variant="h4" href={href} sx={{ margin: 3, display: 'block' }} color="secondary.700">
            {title}
        </Link>
    );
};
export default ProjectHeader;
