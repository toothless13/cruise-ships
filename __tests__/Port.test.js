const Port = require('../src/Port');

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