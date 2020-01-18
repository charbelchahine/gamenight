import React from 'react';
import useDarkMode from 'use-dark-mode';
import { IconButton } from '@material-ui/core/';
import ThemeIcon from '../../assets/svg/theme.svg';

const ThemeToggle = () => {
    const darkMode = useDarkMode(false);

    return (
        <IconButton
            aria-label="Theme Toggle"
            classes={{ root: 'navIconButton' }}
            color="inherit"
            onClick={darkMode.toggle}
        >
            <ThemeIcon />
        </IconButton>
    );
};

export default ThemeToggle;
