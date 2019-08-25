import React from 'react';
import PropTypes from 'prop-types';
import T from 'i18n-react';
import { push } from 'gatsby';
import { Button } from 'react-md';
import i18n from '../i18n/config/i18n';

class Lang extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            // value: T.translate('path'),
            path:
                T.translate('path') && props.path.search(T.translate('path')) === 0
                    ? props.path.replace(T.translate('path'), '')
                    : props.path,
        };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(event) {
        const { path } = this.state;
        // this.setState({ value: e.target.value });
        push(event.target.value + path);
    }

    render() {
        return (
            <div className="langSelector">
                {Object.keys(i18n).map((lang, index) => (
                    <Button flat key={index} value={i18n[lang].path} onClick={this.handleClick}>
                        {i18n[lang].name}
                    </Button>
                ))}
            </div>
        );
    }
}

Lang.propTypes = {
    path: PropTypes.string.isRequired,
};

export default Lang;
