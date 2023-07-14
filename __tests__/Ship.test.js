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

    it('has a previousPort property set to null', () => {
        const port = new Port('Dover');
        const ship = new Ship(port);
        expect(ship).toHaveProperty('previousPort');
        expect(ship.previousPort).toBeNull();
    });

    it('can set sail', () => {
        const port = new Port('Dover');
        const ship = new Ship(port);
        ship.setSail();
        expect(ship.currentPort).toBeFalsy;
        expect(ship.previousPort).toBe(port);
    });

    it('can dock', () => {
        const port = new Port('Dover');
        const port2 = new Port('Belfast');
        const ship = new Ship(port);
        ship.dock(port2);
        expect(ship.currentPort).toBe(port2);
    });
});