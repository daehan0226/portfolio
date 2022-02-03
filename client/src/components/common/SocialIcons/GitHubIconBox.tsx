import React from 'react';

import { IconBoxProps } from '../../../models';
import GitHubIcon from '@mui/icons-material/GitHub';
import SocialIconBox from './SocialIconBox';

const GitHubIconBox = ({ color }: IconBoxProps) => {
    return (
        <SocialIconBox color={color}>
            <GitHubIcon
                sx={{ fontSize: { mobile: 25, tablet: 30, laptop: 35 } }}
                onClick={e => {
                    window.location.href = process.env.REACT_APP_GITHUB;
                    e.preventDefault();
                }}
            />
        </SocialIconBox>
    );
};

export default GitHubIconBox;
