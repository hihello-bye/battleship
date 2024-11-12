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
   
    test('should register a hit on a ship at specified coordinates and track missed shots', () => {
        const gameboard = Gameboard();
        const ship = Ship(3);
        gameboard.placeShip(ship, [0, 0], 'horizontal');

        gameboard.receiveAttack([0,1]);
        expect(ship.sunk()).toBe(false);
        expect(gameboard.getMissedShots()).toEqual([]);
    })

    test('should record a missed shot when no ship is at the coordinates', () => {
        const gameboard = Gameboard();
        gameboard.receiveAttack([5,5]);
        expect(gameboard.getMissedShots()).toEqual([[5,5]]);
    })
})