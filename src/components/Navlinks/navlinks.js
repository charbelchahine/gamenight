import React from 'react';
import T from 'i18n-react';
import Link from '../Link/link';

const NavLinks = () => {
    return (
        <div className="navLinks">
            <Link to="/">{T.translate('home.title')}</Link>
            <Link
                to="/contact"
                state={{
                    modal: true,
                }}
            >
                {T.translate('contact.title')}
            </Link>
        </div>
    );
};

export default NavLinks;
