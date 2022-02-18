import React, { useContext } from 'react';

import { RefProps } from '../../models';
import { BoxWrapper, BoxHeader } from '../common';
// import AboutPersonality from './AboutPersonality';
import AboutMe from './AboutMe';
import { LangContext } from '../../context/lang';

const About = ({ refObject }: RefProps) => {
    const {
        dispatch: { translate },
    } = useContext(LangContext);

    return (
        <div ref={refObject}>
            <BoxWrapper>
                <BoxHeader title={translate('about')} />
                <AboutMe />
                {/* <AboutPersonality /> */}
            </BoxWrapper>
        </div>
    );
};

export default About;
