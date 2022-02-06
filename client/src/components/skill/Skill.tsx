import React, { useContext } from 'react';
import Box from '@mui/material/Box';
import { RefProps } from '../../models';
import { BoxWrapper, BoxHeader } from '../common';
import { LangContext } from '../../context/lang';

const Skill = ({ refObject }: RefProps) => {
    const {
        dispatch: { translate },
    } = useContext(LangContext);

    return (
        <div ref={refObject}>
            <BoxWrapper>
                <BoxHeader title={translate('skill')} />
                <Box>
                    <></>
                </Box>
            </BoxWrapper>
        </div>
    );
};

export default Skill;
