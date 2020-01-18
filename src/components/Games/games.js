import React from 'react';
import useDarkMode from 'use-dark-mode';
import Link from '../Link/link';

import RollDiceLight from '../../assets/svg/gameIcons/rollDice_light.svg';
import RollDiceDark from '../../assets/svg/gameIcons/rollDice_dark.svg';
import CoinFlipLight from '../../assets/svg/gameIcons/coinFlip_light.svg';
import CoinFlipDark from '../../assets/svg/gameIcons/coinFlip_dark.svg';
import DrawCardLight from '../../assets/svg/gameIcons/drawCard_light.svg';
import DrawCardDark from '../../assets/svg/gameIcons/drawCard_dark.svg';
import BracketsLight from '../../assets/svg/gameIcons/brackets_light.svg';
import BracketsDark from '../../assets/svg/gameIcons/brackets_dark.svg';
import TeamMakerLight from '../../assets/svg/gameIcons/teamMaker_light.svg';
import TeamMakerDark from '../../assets/svg/gameIcons/teamMaker_dark.svg';
import RouletteLight from '../../assets/svg/gameIcons/roulette_light.svg';
import RouletteDark from '../../assets/svg/gameIcons/roulette_dark.svg';
import RussianRouletteLight from '../../assets/svg/gameIcons/russianRoulette_light.svg';
import RussianRouletteDark from '../../assets/svg/gameIcons/russianRoulette_dark.svg';

const Games = () => {
    const isDarkMode = useDarkMode().value;
    return (
        <section className="games">
            <Link to="/contact" state={{ modal: true }}>
                <div className="gamePreview rollDice">
                    <span className="gameName">Roll Dice</span>
                    {isDarkMode ? (
                        <RollDiceDark className="gameIcon" />
                    ) : (
                        <RollDiceLight className="gameIcon" />
                    )}
                </div>
            </Link>
            <Link to="/contact" state={{ modal: true }}>
                <div className="gamePreview coinFlip">
                    <span className="gameName">Coin Flip </span>
                    {isDarkMode ? (
                        <CoinFlipDark className="gameIcon" />
                    ) : (
                        <CoinFlipLight className="gameIcon" />
                    )}
                </div>
            </Link>

            <Link to="/contact" state={{ modal: true }}>
                <div className="gamePreview drawCard">
                    <span className="gameName">Draw Card</span>
                    {isDarkMode ? (
                        <DrawCardDark className="gameIcon" />
                    ) : (
                        <DrawCardLight className="gameIcon" />
                    )}
                </div>
            </Link>

            <Link to="/contact" state={{ modal: true }}>
                <div className="gamePreview brackets">
                    <span className="gameName">Brackets</span>
                    {isDarkMode ? (
                        <BracketsDark className="gameIcon" />
                    ) : (
                        <BracketsLight className="gameIcon" />
                    )}
                </div>
            </Link>

            <Link to="/contact" state={{ modal: true }}>
                <div className="gamePreview teamMaker">
                    <span className="gameName">Team Maker</span>
                    {isDarkMode ? (
                        <TeamMakerDark className="gameIcon" />
                    ) : (
                        <TeamMakerLight className="gameIcon" />
                    )}
                </div>
            </Link>

            <Link to="/contact" state={{ modal: true }}>
                <div className="gamePreview roulette">
                    <span className="gameName">Roulette</span>
                    {isDarkMode ? (
                        <RouletteDark className="gameIcon" />
                    ) : (
                        <RouletteLight className="gameIcon" />
                    )}
                </div>
            </Link>

            <Link to="/contact" state={{ modal: true }}>
                <div className="gamePreview russianRoulette">
                    <span className="gameName">Russian Roulette</span>
                    {isDarkMode ? (
                        <RussianRouletteDark className="gameIcon" />
                    ) : (
                        <RussianRouletteLight className="gameIcon" />
                    )}
                </div>
            </Link>
        </section>
    );
};

export default Games;
