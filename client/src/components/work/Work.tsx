import React, { useContext } from 'react';

import { RefProps } from '../../models';
import { BoxWrapper, BoxHeader } from '../common';
import WorkExperienceTimeline from './WorkExperienceTimeline';
import Companies from './Companies';
import { LangContext } from '../../context/lang';

const Work = ({ refObject }: RefProps) => {
    const {
        dispatch: { translate },
    } = useContext(LangContext);

    return (
        <div ref={refObject}>
            <BoxWrapper>
                <BoxHeader title={translate('company')} />
                <Companies />
                <BoxHeader title={translate('workExperience')} />
                <WorkExperienceTimeline />
            </BoxWrapper>
        </div>
    );
};

export default Work;
