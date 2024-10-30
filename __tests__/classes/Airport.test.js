const Airport = require('../../classes/Airport');

describe('Airport', () => {
    const ap1 = new Airport('John F. Kennedy', 'JFK')
    
    it('name is assigned to correct value', () => {
        expect(ap1.name).toBe('John F. Kennedy')
    })
    it('should assign static airportCode correctly', () => {
        expect(Airport.airportCode).toBe('JFK')
    })
    it('planes should be an empty array', () => {
        expect(ap1.planes).toEqual([])
    })
})
