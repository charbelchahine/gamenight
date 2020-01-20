import React from 'react';
import T from 'i18n-react';
import useDarkMode from 'use-dark-mode';
import { motion } from 'framer-motion';
import Link from '../Link/link';
import GamesAvailable from '../../utils/gamesAvailable';

const Games = () => {
    const isDarkMode = useDarkMode().value;
    return (
        <section className="games">
            {GamesAvailable.map(game => {
                return (
                    <Link to={game.path} openInModal className="gameLink" key={game.id}>
                        <motion.div
                            whileHover={{ scale: 1.1 }}
                            className={`gamePreview ${game.id}`}
                        >
                            <span className="gameName">{T.translate(`${game.id}.title`)}</span>
                            {isDarkMode ? game.darkIcon : game.lightIcon}
                        </motion.div>
                    </Link>
                );
            })}
        </section>
    );
};

export default Games;
