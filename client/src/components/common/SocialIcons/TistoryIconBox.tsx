import React from 'react';

import { IconBoxProps } from '../../../models';
import ArticleIcon from '@mui/icons-material/Article';
import SocialIconBox from './SocialIconBox';

const TistoryIconBox = ({ color }: IconBoxProps) => {
    return (
        <SocialIconBox color={color}>
            <ArticleIcon
                sx={{ fontSize: { mobile: 25, tablet: 30, laptop: 35 } }}
                onClick={e => {
                    window.location.href = process.env.REACT_APP_TISTORY;
                    e.preventDefault();
                }}
            />
        </SocialIconBox>
    );
};

export default TistoryIconBox;
