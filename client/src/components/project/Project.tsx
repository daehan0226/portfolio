import React from 'react';

import {RefProps, IProject} from "../../models"
import {BoxWrapper, BoxHeader, ErrorAlert, LoadingBox} from "../common";

import useGetDocs from '../../hooks/useGetDocs';
import ProjectDetail from './ProjectDeatil';


const Project = ({refObject}:RefProps ) => {
  const {data, loading, error} = useGetDocs<IProject>({collectionName:"projects"});

  return (
    <div ref={refObject}>
      <BoxWrapper backgroundColor='primary.800' >
          <BoxHeader title={"Projects"} color={'primary.contrastText'} divierColor={'primary.contrastText'} />
          <>
            {loading && (<LoadingBox />)}
            {error && (<ErrorAlert msg={error} />)}
            {data && data.map(project => (
                <ProjectDetail key={project.name} project={project}/>
            ))}
          </>
      </BoxWrapper>
    </div>
  );
}
export default Project