import React, { FC, useContext } from 'react';

import { Link } from '@mui/material';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import Box from '@mui/material/Box';

import { LangContext } from '../../../context/lang';

type ProjectImageBoxProps = {
    link?: string;
    src: string;
    alt: string;
};

const ProjectImageBox: FC<ProjectImageBoxProps> = ({ link, src, alt }) => {
    const {
        dispatch: { translate },
    } = useContext(LangContext);
    return (
        <Box sx={{ width: { mobile: 200, tablet: 300 } }}>
            {link ? (
                <Link href={link && link}>
                    <ImageListItem>
                        <img src={src} alt={alt} loading="lazy" style={{ width: '100%', height: 'auto' }} />
                        {link && <ImageListItemBar title={translate('goToWebPage')} />}
                    </ImageListItem>
                </Link>
            ) : (
                <img src={src} alt={alt} loading="lazy" style={{ width: '100%', height: 'auto' }} />
            )}
        </Box>
    );
};
export default ProjectImageBox;
