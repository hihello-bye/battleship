const Player = require('../player.js');
const Gameboard = require('../gameboard.js');

describe('Player', () => {

    test('should create a player with its own gameboard', () => {
        const player = Player('user');
        const gameboard = player.getGameboard();

        expect(typeof gameboard).toBe('object');
    })

    test('should make an attack on an enemy gameboard', () => {
        const player = Player('user');
        const enemyGameboard = Gameboard();

        player.attack(enemyGameboard, [2, 3]);
        expect(enemyGameboard.getMissedShots()).toEqual([[2,3]]);
    })
})