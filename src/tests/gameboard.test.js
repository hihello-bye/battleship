const Gameboard = require('../gameboard.js');
const Ship = require('../ship.js');

describe('Gameboard', () => {
    test('should place a ship at specified coordinates', () => {
        const gameboard = Gameboard();
        const ship = Ship(3);
        gameboard.placeShip(ship, [0, 0], "horizontal");
    
        expect(gameboard.getShips()).toEqual([
            { ship, coordinates: [[0,0], [0,1], [0,2]] }
        ])
    })
   
})