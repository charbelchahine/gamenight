import React from 'react';
import useDarkMode from 'use-dark-mode';
import { IconButton } from '@material-ui/core/';
import themeIcon from '../../assets/images/theme.svg';

const ThemeToggle = () => {
    const darkMode = useDarkMode(false);

    return (
        <IconButton aria-label="themetoggle" onClick={darkMode.toggle}>
            <img src={themeIcon} alt="themetoggle" />
        </IconButton>
    );
};

export default ThemeToggle;
