/* globals describe it expect */
const Ship = require('../src/Ship.js');
const Port = require('../src/Port.js');

describe('Ship', () => {
    it('can be instantiated', () => {
        expect(new Ship()).toBeInstanceOf(Object);
    });
    it('has a starting port', () => {
        const ship = new Ship(Port);
        expect(ship.startingPort).toBeInstanceOf(Object);
        const port = new Port('Dover');
        const ship2 = new Ship(port);
        expect(ship2.startingPort).toEqual(port);
    });
    it('can set sail', () => {
        const ship = new Ship('Dover');
        ship.setSail();
        expect(ship.startingPort).toBeFalsy;
    });
    it('can dock', () => {
        const port = new Port('Dover');
        const port2 = new Port('Belfast');
        const ship = new Ship(port);
        ship.dock(port2);
        expect(ship.dockedAt).toBe(port2);
    });
});