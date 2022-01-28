import React , {FC}from 'react';
import {RefProps} from "../../models"
import {BoxWrapper, BoxHeader} from "../common";
import Divider from '@mui/material/Divider';
import ProjectPortfolio from "./ProjectPortfolio";

const Project: FC<RefProps>= ({refObject}) => {

  return (
    <div ref={refObject}>
      <BoxWrapper backgroundColor='primary.800' >
          <BoxHeader title={"Projects"} color={'primary.contrastText'} divierColor={'primary.contrastText'} />
          <ProjectPortfolio />
          <Divider 
              sx={{
                backgroundColor: "primary.50", 
                borderBottomWidth: { mobile: 1, tablet: 1.5, laptop: 2}, 
                width: "60%", 
                margin: '20px auto'
              }}/>
      </BoxWrapper>
    </div>
  );
}
export default Project