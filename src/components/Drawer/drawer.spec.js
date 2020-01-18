import React from 'react';
import { shallow } from 'enzyme';

import Drawer from './drawer';

describe('Drawer', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<Drawer />);
    });

    it('should render correctly', () => {
        expect(wrapper.exists()).toBe(true);
    });
});
