const Gameboard = require('../src/gameboard.js');

const Player = (type) => {
    const gameboard = Gameboard();

    function getGameboard() {
        return gameboard;
    }

    function attack(enemyGameboard, coordinates) {
        enemyGameboard.receiveAttack(coordinates);
    }

    return { type, getGameboard, attack };
}

module.exports = Player;