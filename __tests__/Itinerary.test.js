const Itinerary = require('../src/Itinerary');
const Port = require('../src/Port');

describe('itinerary', () => {
    it('can be instantiated', () => {
        expect(new Itinerary()).toBeInstanceOf(Object);
    });
    it('has a ports property', () => {
        const dover = new Port('Dover');
        const calais = new Port('Calais');
        const itinerary = new Itinerary([dover, calais]);
        expect(itinerary).toHaveProperty('ports');
        expect(itinerary.ports).toEqual([dover, calais]);
    });
});