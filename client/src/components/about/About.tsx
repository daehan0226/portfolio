import React, {useContext} from 'react';

import {RefProps} from "../../models"
import {BoxWrapper, BoxHeader} from "../common"
import AboutTimeline from "./AboutTimeline"
import AboutPersonality from "./AboutPersonality"
import { LangContext } from '../../context/lang';


const About = ({refObject}:RefProps ) => {
  const { dispatch: { translate }} = useContext(LangContext);

  return (
    <div ref={refObject}>
      <BoxWrapper>
          <BoxHeader title={translate("about")} />
          <AboutPersonality />
          <AboutTimeline />
      </BoxWrapper>
    </div>
  );
}

export default About;
