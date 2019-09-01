/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import PropTypes from 'prop-types';
import T from 'i18n-react';
import { Link } from 'gatsby';

const LocalizedLink = ({ to, ...props }) => <Link to={T.translate('path') + to} {...props} />;

LocalizedLink.propTypes = {
    to: PropTypes.string.isRequired,
};

export default LocalizedLink;