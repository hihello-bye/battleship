const Player = require('../player.js');
const Gameboard = require('../gameboard.js');

describe('Player', () => {

    test('should create a player with its own gameboard', () => {
        const player = Player('user');
        const gameboard = player.getGameboard();

        expect(typeof gameboard).toBe('object');
    })
})