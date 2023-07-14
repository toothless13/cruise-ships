/* globals describe it expect */
const Ship = require('../src/Ship.js');
const Port = require('../src/Port.js');

describe('Ship', () => {
    it('can be instantiated', () => {
        expect(new Ship()).toBeInstanceOf(Object);
    });
    it('has a starting port', () => {
        const ship = new Ship(Port);
        expect(ship.currentPort).toBeInstanceOf(Object);
        const port = new Port('Dover');
        const ship2 = new Ship(port);
        expect(ship2.currentPort).toBe(port);
    });
    it('can set sail', () => {
        const ship = new Ship('Dover');
        ship.setSail();
        expect(ship.currentPort).toBeFalsy;
    });
    it('can dock', () => {
        const port = new Port('Dover');
        const port2 = new Port('Belfast');
        const ship = new Ship(port);
        ship.dock(port2);
        expect(ship.currentPort).toBe(port2);
    });
});