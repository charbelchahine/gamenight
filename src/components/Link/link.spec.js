import React from 'react';
import { shallow } from 'enzyme';

import T from 'i18n-react';
import Link from './link';

describe('Link', () => {
    let wrapper;
    const path = '/home/404/index';

    const spy = jest.spyOn(T, 'translate');
    spy.mockReturnValue('en');

    beforeEach(() => {
        wrapper = shallow(<Link to={path} />);
    });

    it('should render correctly', () => {
        expect(wrapper.exists()).toBe(true);
    });

    it('should pass the right path to `to`', () => {
        expect(wrapper.prop('to')).toBe(`${spy()}${path}`);
    });
});
