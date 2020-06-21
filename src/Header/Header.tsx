import React from 'react';
import classNames from 'classnames';
import { useTranslation } from 'react-i18next';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import logo from './logo.svg';
import './Header.css';

function Header() {
  const { i18n, t } = useTranslation();
  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };
  const language = i18n.language;
  const [anchorEl, setAnchorEl] = React.useState(null);
  const handleClick = (event: any) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (lang: string) => {
    changeLanguage(lang);
    setAnchorEl(null);
  };
  return (
    <header className="Header">
      <img
        className="Header__image"
        src={logo}
        alt="Akranes logo"
        height="47"
        width="62"
      />
      <h1 className="Header__title">{t('title')}</h1>
      <div className="Header__languages">
        <Menu
          id="simple-menu"
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          <MenuItem onClick={() => handleClose('is')}>
            <div
              className={classNames('Header__langage', 'Header__langage--is')}
            />
          </MenuItem>
          <MenuItem onClick={() => handleClose('en')}>
            <div
              className={classNames('Header__langage', 'Header__langage--en')}
            />
          </MenuItem>
        </Menu>
        <div
          className={classNames('Header__langage', {
            'Header__langage--is': language === 'is',
            'Header__langage--en': language === 'en',
          })}
          onClick={handleClick}
        />
      </div>
    </header>
  );
}

export default Header;
