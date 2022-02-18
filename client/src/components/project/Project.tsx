import React, { FC, useContext } from 'react';
import { BoxWrapper, BoxHeader } from '../common';
import Divider from '@mui/material/Divider';
import ProjectPortfolio from './ProjectPortfolio';
import ProjectEnglishApp from './ProjectEnglishApp';
import ProjectFurfellasApp from './ProjectFurfellasApp';
import { LangContext } from '../../context/lang';
import ProjectPatent from './ProjectPatent';

const CustomeDivider = () => {
    return (
        <Divider
            sx={{
                backgroundColor: 'primary.50',
                borderBottomWidth: { mobile: 1, tablet: 1.5, laptop: 2 },
                width: '60%',
                margin: '20px auto',
            }}
        />
    );
};

const Project: FC = () => {
    const {
        dispatch: { translate },
    } = useContext(LangContext);

    return (
        <BoxWrapper backgroundColor="primary.800">
            <BoxHeader title={translate('project')} color={'primary.contrastText'} divierColor={'primary.contrastText'} />
            <ProjectPatent />
            <CustomeDivider />
            <ProjectPortfolio />
            <CustomeDivider />
            <ProjectFurfellasApp />
            <CustomeDivider />
            <ProjectEnglishApp />
        </BoxWrapper>
    );
};
export default Project;
