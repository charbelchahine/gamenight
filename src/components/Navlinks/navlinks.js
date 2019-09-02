import React from 'react';
import T from 'i18n-react';
import Link from '../Link/link';

function NavLinks() {
    return (
        <div className="navLinks">
            <Link to="/">{T.translate('home.title')}</Link>
            <Link to="/contact">{T.translate('contact.title')}</Link>
        </div>
    );
}

export default NavLinks;
