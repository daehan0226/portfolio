import React from 'react';

import {RefProps} from "../../models"
import {BoxWrapper, BoxHeader} from "../common"
import AboutTimeline from "./AboutTimeline"
import AboutPersonality from "./AboutPersonality"

const About = ({refObject}:RefProps ) => {
  return (
    <div ref={refObject}>
      <BoxWrapper>
          <BoxHeader title={"About"} />
          <AboutPersonality />
          <AboutTimeline />
      </BoxWrapper>
    </div>
  );
}

export default About;
