const Ship = require('../ship.js');

describe('Ship', () => {
    test('should initialize with the correct length', () => {
        const ship = Ship(3);
        expect(ship.length).toBe(3);
    })
})