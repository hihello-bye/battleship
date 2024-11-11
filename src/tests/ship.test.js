const Ship = require('../ship.js');

describe('Ship', () => {

    test('should initialize with the correct length', () => {
        const ship = Ship(3);
        expect(ship.length).toBe(3);
    })

    test('should not initially be sunk', () => {
        const ship = Ship(3);
        expect(ship.sunk()).toBe(false);
    })

    test('should register a hit', () => {
        const ship = Ship(3); 
        ship.hit();
        expect(ship.sunk()).toBe(false);
    })

    test('should sink when hit enough times', () => {
        const ship = Ship(2);
        ship.hit();
        ship.hit();
        expect(ship.sunk()).toBe(true);
    })

    test('should not register more hits than its length', () => {
        const ship = Ship(2);
        ship.hit();
        ship.hit();
        ship.hit();
        expect(ship.sunk()).toBe(true);

    })
})