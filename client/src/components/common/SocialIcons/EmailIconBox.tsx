import React from 'react';

import { IconBoxProps } from '../../../models';
import EmailIcon from '@mui/icons-material/Email';
import SocialIconBox from './SocialIconBox';

const EmailIconBox = ({ color }: IconBoxProps) => {
    return (
        <SocialIconBox color={color}>
            <EmailIcon
                sx={{ fontSize: { mobile: 25, tablet: 30, laptop: 35 } }}
                onClick={e => {
                    window.location.href = `mailto:${process.env.REACT_APP_GMAIL}`;
                    e.preventDefault();
                }}
            />
        </SocialIconBox>
    );
};

export default EmailIconBox;
