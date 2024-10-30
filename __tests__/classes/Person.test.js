const Person = require('../../classes/Person');

describe('Person class test',()=>{
    test('should create an instance of the Person class', () => {
        const person = new Person('melly', 'Algeria');
        expect(person).toBeInstanceOf(Person);
    });
    test('have a name and a destination', () => {
        const person = new Person('melly', 'Algeria');
        expect(person.name).toBe('melly');
        expect(person.destination).toBe('Algeria');
    });
    test('should initialize bags with empty array', () => {
        const person = new Person('melly', 'Algeria');
        expect(person.getBags()).toEqual([]);
    });
    test('addBag() adds a bag to the bags array', () => {
        const person = new Person('melly', 'Algeria'); 
        const bag = 2; 
        person.addBag(bag);
        expect(person.getBags()).toEqual([2]); 
    });

})