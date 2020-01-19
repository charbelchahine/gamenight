const home = require('../FR/home');
const about = require('../FR/about');
const e404 = require('../FR/e404');
const feedback = require('../FR/feedback');
const rollDice = require('../FR/rollDice');
const coinFlip = require('../FR/coinFlip');
const drawCard = require('../FR/drawCard');
const brackets = require('../FR/brackets');
const teamMaker = require('../FR/teamMaker');
const roulette = require('../FR/roulette');
const russianRoulette = require('../FR/russianRoulette');

module.exports = {
    key: 'fr',
    path: '/fr',
    name: 'FR',
    home,
    about,
    e404,
    feedback,
    rollDice,
    coinFlip,
    drawCard,
    brackets,
    teamMaker,
    roulette,
    russianRoulette,
};
