/* globals describe it expect */
const Ship = require('../src/Ship.js');
const Port = require('../src/Port.js');
const Itinerary = require('../src/Itinerary');

describe('Ship', () => {

    it('can be instantiated', () => {
        const port = {
            name: 'Dover',
            ships: [],
            addShip: jest.fn(),
            removeShip: jest.fn()
        };
        const itinerary = {ports: [port]};
        expect(new Ship(itinerary)).toBeInstanceOf(Object);
    });

    describe('tests with one port', () => {
        
        let dover, belfast, itinerary, ship;

        beforeEach(() => {
            dover = {
                name: 'Dover',
                ships: [],
                addShip: jest.fn(),
                removeShip: jest.fn()
            };
            belfast = {
                name: 'Belfast',
                ships: [],
                addShip: jest.fn(),
                removeShip: jest.fn()
            };
            itinerary = {ports: [dover, belfast]};
            ship = new Ship(itinerary);
        });
        it('has a starting port', () => {
            expect(ship.currentPort).toBeInstanceOf(Object);
            const ship2 = new Ship(itinerary);
            expect(ship2.currentPort).toBe(dover);
        });
    
        it('has a previousPort property set to null', () => {
            expect(ship).toHaveProperty('previousPort');
            expect(ship.previousPort).toBeNull();
        });

        it('gets added to port on instantiation', () => {    
            expect(dover.addShip).toHaveBeenCalledWith(ship);
        });

        it('can set sail', () => {
            ship.setSail();

            expect(ship.currentPort).toBeFalsy();
            expect(dover.removeShip).toHaveBeenCalledWith(ship);
        });
    
        it('can\'t sail further than its itinerary', () => {  
            ship.setSail();
            ship.dock();
    
            expect(() => ship.setSail()).toThrowError('End of itinerary reached');
        });
    
        it('can dock', () => {
            ship.setSail();
            ship.dock();
            expect(ship.currentPort).toBe(belfast);
            expect(belfast.addShip).toHaveBeenCalledWith(ship);
        });
    });
});