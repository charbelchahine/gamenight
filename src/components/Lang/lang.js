import React from 'react';
import PropTypes from 'prop-types';
import T from 'i18n-react';
import { navigate } from 'gatsby';
import { Menu, MenuItem, IconButton } from '@material-ui/core/';
import LanguageIcon from '@material-ui/icons/Language';
import i18n from '../../i18n/config/i18n';

class Lang extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            anchorEl: null,
            path:
                T.translate('path') && props.path.search(T.translate('path')) === 0
                    ? props.path.replace(T.translate('path'), '')
                    : props.path,
        };
        this.handleOpenMenu = this.handleOpenMenu.bind(this);
        this.handleCloseMenu = this.handleCloseMenu.bind(this);
        this.handleLangChange = this.handleLangChange.bind(this);
    }

    handleOpenMenu(event) {
        this.setState({ anchorEl: event.currentTarget });
    }

    handleCloseMenu() {
        this.setState({ anchorEl: null });
    }

    handleLangChange(event) {
        const { path } = this.state;
        this.handleCloseMenu();
        navigate(event.target.dataset.value + path);
    }

    render() {
        const { anchorEl } = this.state;
        return (
            <div className="langSelector">
                <IconButton
                    aria-haspopup="true"
                    aria-label="Language Selector"
                    aria-controls="lang-selector"
                    onClick={this.handleOpenMenu}
                >
                    <LanguageIcon />
                </IconButton>
                <Menu
                    keepMounted
                    id="lang-selector"
                    anchorEl={anchorEl}
                    open={Boolean(anchorEl)}
                    onClose={this.handleCloseMenu}
                >
                    {Object.keys(i18n).map(lang => (
                        <MenuItem
                            key={lang}
                            data-value={i18n[lang].path}
                            onClick={this.handleLangChange}
                        >
                            {i18n[lang].name}
                        </MenuItem>
                    ))}
                </Menu>
            </div>
        );
    }
}

Lang.propTypes = {
    path: PropTypes.string.isRequired,
};

export default Lang;
