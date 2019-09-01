import React from 'react';
import { shallow } from 'enzyme';

import Header from './header';

describe('Header', () => {
    it('renders correctly', () => {
        const wrapper = shallow(<Header />);
        expect(wrapper.exists()).toBe(true);
    });
});
