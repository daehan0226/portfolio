import React , {FC, useContext}from 'react';
import {RefProps} from "../../models"
import {BoxWrapper, BoxHeader} from "../common";
import Divider from '@mui/material/Divider';
import ProjectPortfolio from "./ProjectPortfolio";
import ProjectEnglishApp from './ProjectEnglishApp';
import ProjectFurfellasApp from "./ProjectFurfellasApp"
import { LangContext } from '../../context/lang';

const Project: FC<RefProps>= ({refObject}) => {
  const { dispatch: { translate }} = useContext(LangContext);

  return (
    <div ref={refObject}>
      <BoxWrapper backgroundColor='primary.800' >
          <BoxHeader title={translate("project")} color={'primary.contrastText'} divierColor={'primary.contrastText'} />
          <ProjectPortfolio />
          <Divider 
              sx={{
                backgroundColor: "primary.50", 
                borderBottomWidth: { mobile: 1, tablet: 1.5, laptop: 2}, 
                width: "60%", 
                margin: '20px auto'
              }}/>
          <ProjectEnglishApp />
          <Divider 
              sx={{
                backgroundColor: "primary.50", 
                borderBottomWidth: { mobile: 1, tablet: 1.5, laptop: 2}, 
                width: "60%", 
                margin: '20px auto'
              }}/>
          <ProjectFurfellasApp />
      </BoxWrapper>
    </div>
  );
}
export default Project