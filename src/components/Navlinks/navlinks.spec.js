import React from 'react';
import { shallow } from 'enzyme';

import NavLinks from './navlinks';

describe('NavLinks', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<NavLinks />);
    });

    it('should render correctly', () => {
        expect(wrapper.exists()).toBe(true);
    });
});
