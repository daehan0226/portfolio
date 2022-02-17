import React, { FC, useContext } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import MenuItem from '@mui/material/MenuItem';

import { LangMenu } from './common';
import { LangContext } from '../context';

const pages = ['home', 'about', 'company', 'skill', 'blog'];

interface HeaderProps {
    handleScroll: (target: string) => void;
}

const Header: FC<HeaderProps> = ({ handleScroll }) => {
    const {
        dispatch: { translate },
    } = useContext(LangContext);

    const handleMenuClick = (page: string) => {
        handleScroll(page);
    };

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar
                    sx={{
                        backgroundColor: 'primary.800',
                        height: { mobile: 60, laptop: 80 },
                        paddingLeft: { mobile: 0.5, tablet: 1.5 },
                        paddingRight: { mobile: 0.5, tablet: 1.5 },
                    }}
                >
                    <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
                        {pages.map(page => (
                            <MenuItem
                                key={page}
                                onClick={() => handleMenuClick(page)}
                                sx={{
                                    paddingLeft: { mobile: 0.5, tablet: 2 },
                                    paddingRight: { mobile: 0.5, tablet: 2 },
                                    minHeight: { mobile: 30, tablet: 48 },
                                }}
                            >
                                <Typography
                                    textAlign="center"
                                    variant="h6"
                                    sx={{
                                        color: 'primary.contrastText',
                                        '&:hover': {
                                            color: 'primary.500',
                                        },
                                    }}
                                >
                                    {translate(page)}
                                </Typography>
                            </MenuItem>
                        ))}
                    </Box>
                    <LangMenu />
                </Toolbar>
            </AppBar>
        </Box>
    );
};
export default Header;
