const Gameboard = require('../src/gameboard.js');

const Player = (type) => {
    const gameboard = Gameboard();

    function getGameboard() {
        return gameboard;
    }

    function attack(enemyGameboard, coordinates) {
        enemyGameboard.receiveAttack(coordinates);
    }

    function randomAttack(enemyGameboard) {
        const x = Math.floor(Math.random() * 10);
        const y = Math.floor(Math.random() * 10);
        enemyGameboard.receiveAttack([x, y]);
    }

    return {
         type,
         getGameboard,
         attack,
         randomAttack: type === 'computer' ? randomAttack : undefined,
        }
}

module.exports = Player;