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

    test('should report when all ships are sunk', () => {
        const gameboard = Gameboard();
        const ship1 = Ship(1);
        const ship2 = Ship(2);
        gameboard.placeShip(ship1, [0, 0], 'horizontal');
        gameboard.placeShip(ship2, [1,0], 'horizontal');

        gameboard.receiveAttack([0, 0]);
        gameboard.receiveAttack([1, 0]);
        gameboard.receiveAttack([1, 1]);

        expect(gameboard.allShipsSunk()).toBe(true);
    })
})