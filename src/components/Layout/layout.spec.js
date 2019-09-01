import React from 'react';
import { shallow } from 'enzyme';

import Layout from './layout';

describe('Header', () => {
    let wrapper;
    const path = '/home/404/index';
    const children = <div id="headerChildrenTest">Hello world</div>;

    beforeEach(() => {
        wrapper = shallow(<Layout path={path}>{children}</Layout>);
    });

    it('should render correctly', () => {
        expect(wrapper.exists()).toBe(true);
    });

    it('should have a Head and NavLinks & Lang selector inside the Header', () => {
        expect(wrapper.find('Head').exists()).toBe(true);
        expect(
            wrapper
                .find('Header')
                .find('NavLinks')
                .exists(),
        ).toBe(true);
        expect(
            wrapper
                .find('Header')
                .find('Lang')
                .exists(),
        ).toBe(true);
    });

    it('should pass `path` to Head & Lang selector', () => {
        expect(wrapper.find('Head').prop('path')).toBe(path);
        expect(wrapper.find('Lang').prop('path')).toBe(path);
    });

    it('should pass `children`', () => {
        expect(wrapper.find('#headerChildrenTest').exists()).toBe(true);
    });
});
