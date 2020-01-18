import React from 'react';

import RollDiceLight from '../assets/svg/gameIcons/rollDice_light.svg';
import RollDiceDark from '../assets/svg/gameIcons/rollDice_dark.svg';
import CoinFlipLight from '../assets/svg/gameIcons/coinFlip_light.svg';
import CoinFlipDark from '../assets/svg/gameIcons/coinFlip_dark.svg';
import DrawCardLight from '../assets/svg/gameIcons/drawCard_light.svg';
import DrawCardDark from '../assets/svg/gameIcons/drawCard_dark.svg';
import BracketsLight from '../assets/svg/gameIcons/brackets_light.svg';
import BracketsDark from '../assets/svg/gameIcons/brackets_dark.svg';
import TeamMakerLight from '../assets/svg/gameIcons/teamMaker_light.svg';
import TeamMakerDark from '../assets/svg/gameIcons/teamMaker_dark.svg';
import RouletteLight from '../assets/svg/gameIcons/roulette_light.svg';
import RouletteDark from '../assets/svg/gameIcons/roulette_dark.svg';
import RussianRouletteLight from '../assets/svg/gameIcons/russianRoulette_light.svg';
import RussianRouletteDark from '../assets/svg/gameIcons/russianRoulette_dark.svg';

const GamesAvailable = [
    {
        id: 'rollDice',
        path: '/roll-dice',
        lightIcon: <RollDiceLight className="gameIcon" />,
        darkIcon: <RollDiceDark className="gameIcon" />,
    },
    {
        id: 'coinFlip',
        path: '/coin-flip',
        lightIcon: <CoinFlipLight className="gameIcon" />,
        darkIcon: <CoinFlipDark className="gameIcon" />,
    },
    {
        id: 'drawCard',
        path: '/draw-card',
        lightIcon: <DrawCardLight className="gameIcon" />,
        darkIcon: <DrawCardDark className="gameIcon" />,
    },
    {
        id: 'brackets',
        path: '/brackets',
        lightIcon: <BracketsLight className="gameIcon" />,
        darkIcon: <BracketsDark className="gameIcon" />,
    },
    {
        id: 'teamMaker',
        path: '/team-maker',
        lightIcon: <TeamMakerLight className="gameIcon" />,
        darkIcon: <TeamMakerDark className="gameIcon" />,
    },
    {
        id: 'roulette',
        path: '/roulette',
        lightIcon: <RouletteLight className="gameIcon" />,
        darkIcon: <RouletteDark className="gameIcon" />,
    },
    {
        id: 'russianRoulette',
        path: '/russian-roulette',
        lightIcon: <RussianRouletteLight className="gameIcon" />,
        darkIcon: <RussianRouletteDark className="gameIcon" />,
    },
];

export default GamesAvailable;
