import React from 'react';

import HomeIcon from '../assets/svg/navIcons/home.svg';
import AboutIcon from '../assets/svg/navIcons/about.svg';
import FeedbackIcon from '../assets/svg/navIcons/feedback.svg';

const NavLinks = [
    {
        id: 'home',
        path: '/',
        icon: <HomeIcon />,
    },
    {
        id: 'about',
        path: '/about',
        icon: <AboutIcon />,
    },
    {
        id: 'feedback',
        path: '/feedback',
        icon: <FeedbackIcon />,
    },
];

export default NavLinks;
