import React, {FC, useContext} from 'react';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import LanguageIcon from '@mui/icons-material/Language';
import Button from '@mui/material/Button';

import { LangContext } from '../../context/lang';

const langs = [
  {
  value: 'KR',
  name: '한국어'
  },
  {
  value: 'EN',
  name: 'English'
  }
]

const LangMenu: FC = () => {
  const { dispatch: { setLanguage } } = useContext(LangContext);
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  }

  const handleLangClick = (lang: string) => {
    setAnchorEl(null);
    setLanguage(lang);
  }
  return (
      <>
        <Button
            id="basic-button"
            aria-controls={open ? 'basic-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
            onClick={handleClick}
            sx={{marginLeft: 'auto'}}
        >            
            <LanguageIcon />
        </Button>
        <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
        >
            {langs.map(({value, name})=>(
            <MenuItem
                key={value}
                value={value}
                onClick={()=>handleLangClick(value)} >
                {name}
            </MenuItem>
            ))}
        </Menu>
      </>
  );
};
export default LangMenu;