import React from 'react';
import Fab from '@mui/material/Fab';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

type ArrowIconProps = {
    up: boolean;
    handleClick: () => void;
};
function ArrowIcon({ up = true, handleClick }: ArrowIconProps) {
    return (
        <Fab color="secondary" size="small" aria-label="scroll back to top" onClick={handleClick}>
            {up ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
        </Fab>
    );
}

export default ArrowIcon;
