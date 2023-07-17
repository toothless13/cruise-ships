const Itinerary = require('../src/Itinerary');
const Port = require('../src/Port');
const Ship = require('../src/Ship');

describe('Port', () => {
    it('can be instantiated', () => {
        expect(new Port()).toBeInstanceOf(Object);
    });
    it('has a name property', () => {
        const port = new Port();
        expect(port).toHaveProperty('name');
        const port2 = new Port('Dover');
        expect(port2.name).toBe('Dover');
    });
});

describe('addShip', () => {
    it('adds a ship to a docked ships array property', () => {
        const port1 = new Port('Dover');
        const port2 = new Port('Belfast');
        const itinerary = new Itinerary([port1, port2]);
        const ship1 = new Ship(itinerary);

        port1.addShip(ship1);
        expect(port1.ships).toContain(ship1);
    });
});

describe('removeShip', () => {
    it('removes a ship from the docked ships array', () => {
        const port1 = new Port('Dover');
        const port2 = new Port('Belfast');
        const itinerary = new Itinerary([port1, port2]);
        const ship1 = new Ship(itinerary);

        // port1.addShip(ship1);
        port1.removeShip(ship1);
        expect(port1.ships).toEqual([]);
    });

    it('removes a ship from docked ships array when multiple ships are in array', () => {
        const port1 = new Port('Dover');
        const port2 = new Port('Belfast');
        const itinerary = new Itinerary([port1, port2]);
        const ship1 = new Ship(itinerary);
        const ship2 = new Ship(itinerary);
        const ship3 = new Ship(itinerary);

        // port1.addShip(ship1);
        // port1.addShip(ship2);
        // port1.addShip(ship3);
        port1.removeShip(ship2);
        expect(port1.ships).not.toContain(ship2);
    });
});