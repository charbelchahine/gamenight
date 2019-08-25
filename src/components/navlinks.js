import React from 'react';
import T from 'i18n-react';
import { Button } from 'react-md';
import Link from './link';

function NavLinks() {
    return (
        <div className="navLinks">
            <Link to="/">
                <Button flat>{T.translate('home.title')}</Button>
            </Link>
            <Link to="/projects">
                <Button flat>Projects</Button>
            </Link>
            <Link to="/contact">
                <Button flat>{T.translate('contact.title')}</Button>
            </Link>
        </div>
    );
}

export default NavLinks;
