import React, { useContext } from 'react';

import { RefProps } from '../../models';
import { BoxWrapper, BoxHeader } from '../common';
import AboutTimeline from './AboutTimeline';
import AboutCompanies from './AboutCompanies';
import { LangContext } from '../../context/lang';

const About = ({ refObject }: RefProps) => {
    const {
        dispatch: { translate },
    } = useContext(LangContext);

    return (
        <div ref={refObject}>
            <BoxWrapper>
                <BoxHeader title={translate('company')} />
                <AboutCompanies />
                <BoxHeader title={translate('workExperience')} />
                <AboutTimeline />
            </BoxWrapper>
        </div>
    );
};

export default About;
