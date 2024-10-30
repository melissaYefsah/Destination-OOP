const Bag = require('../../classes/Bag');

describe('Bag Class', () => {
    test('should create an instance of the Bag class', () => {
        const bag = new Bag(10, '123');
        expect(bag).toBeInstanceOf(Bag);
    });

    test('should assign weight and id correctly', () => {
        const bag = new Bag(10, '123');
        expect(bag.weight).toBe(10);
        expect(bag.id).toBe('123');
    });

    test('should initialize owner with null', () => {
        const bag = new Bag(10, '123');
        expect(bag.getOwner()).toBeNull();
    });

    test('should update the owner with a person', () => {
        const bag = new Bag(10, '123');
        const person = { name: 'John' }; // Example person object
        bag.assignOwner(person);
        expect(bag.getOwner()).toBe(person);
    });
});