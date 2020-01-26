import React, { useState } from 'react';
import T from 'i18n-react';
import { Button } from '@material-ui/core';

import One from '../../assets/svg/gameIcons/rollDice/diceFaces/one.svg';
import Two from '../../assets/svg/gameIcons/rollDice/diceFaces/two.svg';
import Three from '../../assets/svg/gameIcons/rollDice/diceFaces/three.svg';
import Four from '../../assets/svg/gameIcons/rollDice/diceFaces/four.svg';
import Five from '../../assets/svg/gameIcons/rollDice/diceFaces/five.svg';
import Six from '../../assets/svg/gameIcons/rollDice/diceFaces/six.svg';

const randomDiceValue = () => {
    return Math.floor(Math.random() * 6) + 1;
};

const returnDiceFace = result => {
    switch (result) {
        case 1:
            return <One />;
        case 2:
            return <Two />;
        case 3:
            return <Three />;
        case 4:
            return <Four />;
        case 5:
            return <Five />;
        case 6:
            return <Six />;
        default:
            return <></>;
    }
};

const RollDice = () => {
    const [isThere2Dices, set2Dices] = useState(false);
    const [dice1, setDice1] = useState(randomDiceValue());
    const [dice2, setDice2] = useState(randomDiceValue());

    const rollDice = () => {
        setDice1(randomDiceValue());
        setDice2(randomDiceValue());
    };

    return (
        <>
            <div
                className={`diceContainer ${isThere2Dices ? 'twoDices' : ''}`}
                data-test="diceContainer"
            >
                {returnDiceFace(dice1)}
                {isThere2Dices && returnDiceFace(dice2)}
            </div>
            <div className="rollDiceButtonContainer">
                <Button
                    variant="contained"
                    onClick={() => rollDice()}
                    classes={{ root: 'rollDiceButton' }}
                >
                    {T.translate('rollDice.rollDiceButton')}
                </Button>
                <Button
                    variant="contained"
                    onClick={() => set2Dices(!isThere2Dices)}
                    classes={{ root: 'rollDiceButton' }}
                    data-test={isThere2Dices ? 'removeDiceButton' : 'addDiceButton'}
                >
                    {T.translate(
                        isThere2Dices ? 'rollDice.removeDiceButton' : 'rollDice.addDiceButton',
                    )}
                </Button>
            </div>
        </>
    );
};
export default RollDice;
