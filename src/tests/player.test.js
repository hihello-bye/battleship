const Player = require('../player.js');
const Gameboard = require('../gameboard.js');

describe('Player', () => {

    test('should create a player with its own gameboard', () => {
        const player = Player('user');
        expect(player.getGameboard()).toBeInstanceOf(Gameboard);
    })
})