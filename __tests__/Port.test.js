const Itinerary = require('../src/Itinerary');
const Port = require('../src/Port');
const Ship = require('../src/Ship');

describe('Port', () => {

    describe('tests with ports, itinerary and ship', () => {

        let port1, port2, itinerary, ship1;

        beforeEach(() => {
            port1 = new Port('Dover');
            port2 = new Port('Belfast');
            itinerary = new Itinerary([port1, port2]);
            ship1 = new Ship(itinerary);
        });

        it('has a name property', () => {
            expect(port1).toHaveProperty('name');
            expect(port1.name).toBe('Dover');
            expect(port2.name).toBe('Belfast');
        });
    
        describe('addShip', () => {
            it('adds a ship to a docked ships array property', () => {
                const ship = jest.fn();
                port1.addShip(ship);
                expect(port1.ships).toContain(ship);
            });
        });
        
        describe('removeShip', () => {
            it('removes a ship from the docked ships array', () => {
                const ship = jest.fn();
                port1.removeShip(ship);
                expect(port1.ships).not.toContain(ship);
            });
        
            it('removes a ship from docked ships array when multiple ships are in array', () => {
                const ship2 = jest.fn();
                const ship3 = jest.fn();
        
                port1.removeShip(ship2);
                expect(port1.ships).not.toContain(ship2);
            });
        });
    });
    it('can be instantiated', () => {
        expect(new Port()).toBeInstanceOf(Object);
    });
    
});