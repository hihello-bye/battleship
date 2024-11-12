const Gameboard = require('../src/gameboard.js');

const Player = (type) => {
    const gameboard = Gameboard();

    function getGameboard() {
        return gameboard;
    }
    return { type, getGameboard };
}

module.exports = Player;