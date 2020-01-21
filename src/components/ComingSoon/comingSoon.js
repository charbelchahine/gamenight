import React from 'react';
import T from 'i18n-react';

import ComingSoonIcon from '../../assets/svg/comingSoon.svg';

const ComingSoon = () => (
    <div className="comingSoonContainer">
        <ComingSoonIcon className="comingSoonIcon" />
        <span className="comingSoon">{T.translate('comingSoon.message')}</span>
    </div>
);

export default ComingSoon;
