import React from 'react';
import { shallow } from 'enzyme';

import Sidebar from './sidebar';

describe('Sidebar', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<Sidebar />);
    });

    it('should render correctly', () => {
        expect(wrapper.exists()).toBe(true);
    });

    it('should contain NavLinks inside Menu', () => {
        expect(
            wrapper
                .find('Menu')
                .find('NavLinks')
                .exists(),
        ).toBe(true);
    });
});
