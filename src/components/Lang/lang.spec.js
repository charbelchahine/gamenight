import React from 'react';
import { shallow } from 'enzyme';

import Lang from './lang';

describe('Layout', () => {
    let wrapper;
    const path = '/home/404/index';

    beforeEach(() => {
        wrapper = shallow(<Lang path={path} />);
    });

    it('should render correctly', () => {
        expect(wrapper.exists()).toBe(true);
    });

    it('should have EN & FR options', () => {
        expect(wrapper.find('[children="En"]').exists()).toBe(true);
        expect(wrapper.find('[children="Fr"]').exists()).toBe(true);
    });

    it('should pass EN & FR  paths to their options', () => {
        expect(wrapper.find('[children="En"]').prop('value')).toBe('');
        expect(wrapper.find('[children="Fr"]').prop('value')).toBe('/fr');
    });
});
