import React from 'react';
import { shallow } from 'enzyme';

import Header from './header';

describe('Header', () => {
    let wrapper;
    const children = <div id="headerChildrenTest">Hello world</div>;

    beforeEach(() => {
        wrapper = shallow(<Header>{children}</Header>);
    });

    it('should render correctly', () => {
        expect(wrapper.exists()).toBe(true);
    });

    it('should contain children', () => {
        expect(wrapper.find('#headerChildrenTest').exists()).toBe(true);
    });

    it('should not contain children if none passed', () => {
        wrapper = shallow(<Header />);
        expect(wrapper.find('#headerChildrenTest').exists()).toBe(false);
    });
});
