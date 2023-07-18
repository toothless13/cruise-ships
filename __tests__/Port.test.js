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
                port1.addShip(ship1);
                expect(port1.ships).toContain(ship1);
            });
        });
        
        describe('removeShip', () => {
            it('removes a ship from the docked ships array', () => {
                port1.removeShip(ship1);
                expect(port1.ships).toEqual([]);
            });
        
            it('removes a ship from docked ships array when multiple ships are in array', () => {
                const ship2 = new Ship(itinerary);
                const ship3 = new Ship(itinerary);
        
                port1.removeShip(ship2);
                expect(port1.ships).not.toContain(ship2);
            });
        });
    });
    it('can be instantiated', () => {
        expect(new Port()).toBeInstanceOf(Object);
    });
    
});