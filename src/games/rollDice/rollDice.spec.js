import React from 'react';
import { shallow } from 'enzyme';

import RollDice from './rollDice';

describe('RollDice Game', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<RollDice />);
    });

    it('should render correctly', () => {
        expect(wrapper.exists()).toBe(true);
    });

    it('should render 1 dice by default', () => {
        expect(wrapper.find('[data-test="diceContainer"]').children().length).toBe(1);
    });

    it('should render 2 dices after clicking on Add Dice', () => {
        expect(wrapper.find('[data-test="addDiceButton"]').exists()).toBe(true);
        expect(wrapper.find('[data-test="removeDiceButton"]').exists()).toBe(false);
        wrapper.find('[data-test="addDiceButton"]').simulate('click');
        expect(wrapper.find('[data-test="diceContainer"]').children().length).toBe(2);
    });

    it('should render 1 dices after clicking on Remove Dice', () => {
        wrapper.find('[data-test="addDiceButton"]').simulate('click');
        expect(wrapper.find('[data-test="addDiceButton"]').exists()).toBe(false);
        expect(wrapper.find('[data-test="removeDiceButton"]').exists()).toBe(true);
        wrapper.find('[data-test="removeDiceButton"]').simulate('click');
        expect(wrapper.find('[data-test="diceContainer"]').children().length).toBe(1);
    });
});
