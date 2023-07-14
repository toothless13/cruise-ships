/* globals describe it expect */
const Ship = require('../src/Ship.js');

describe('Ship', () => {
    it('can be instantiated', () => {
        expect(new Ship()).toBeInstanceOf(Object);
    });
    it('has a starting port', () => {
        const ship = new Ship('Dover');
        expect(ship.startingPort).toBe('Dover');
    });
});

describe('setSail', () => {
    // it('exists on Ship class', () => {
    //     const ship = new Ship('Dover');
    //     expect(ship.setSail).not.toBeFalsy();
    // });
    it('', () => {
        const ship = new Ship('Dover');
        ship.setSail = 'Belfast';
        expect(ship.startingPort).toBe('Belfast');
    });
});