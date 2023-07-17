/* globals describe it expect */
const Ship = require('../src/Ship.js');
const Port = require('../src/Port.js');
const Itinerary = require('../src/Itinerary');

describe('Ship', () => {
    it('can be instantiated', () => {
        const port = new Port('Dover');
        const itinerary = new Itinerary([port]);
        expect(new Ship(itinerary)).toBeInstanceOf(Object);
    });

    it('has a starting port', () => {
        const port = new Port('Dover');
        const itinerary = new Itinerary([port]);
        const ship = new Ship(itinerary);
        expect(ship.currentPort).toBeInstanceOf(Object);
        const ship2 = new Ship(itinerary);
        expect(ship2.currentPort).toBe(port);
    });

    it('has a previousPort property set to null', () => {
        const port = new Port('Dover');
        const itinerary = new Itinerary([port]);
        const ship = new Ship(itinerary);
        expect(ship).toHaveProperty('previousPort');
        expect(ship.previousPort).toBeNull();
    });

    it('can set sail', () => {
        const dover = new Port('Dover');
        const belfast = new Port('Belfast');
        const itinerary = new Itinerary([dover, belfast]);
        const ship = new Ship(itinerary);
        ship.setSail();
        expect(ship.currentPort).toBeFalsy;
        expect(ship.previousPort).toBe(dover);
    });

    it('can\'t sail further than its itinerary', () => {
        const dover = new Port('Dover');
        const belfast = new Port('Belfast');
        const itinerary = new Itinerary([dover, belfast]);
        const ship = new Ship(itinerary);

        ship.setSail();
        ship.dock();

        expect(() => ship.setSail()).toThrowError('End of itinerary reached');
    });

    it('can dock', () => {
        const dover = new Port('Dover');
        const belfast = new Port('Belfast');
        const itinerary = new Itinerary([dover, belfast]);
        const ship = new Ship(itinerary);
        
        ship.setSail();
        ship.dock();
        expect(ship.currentPort).toBe(belfast);
    });

    it('gets added to port on instantiation', () => {
        const dover = new Port('Dover');
        // const belfast = new Port('Belfast');
        const itinerary = new Itinerary([dover]);
        const ship = new Ship(itinerary);

        expect(dover.ships).toContain(ship);
    });
});