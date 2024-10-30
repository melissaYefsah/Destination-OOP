const Plane = require('../../classes/Plane')
const Airport = require('../../classes/Airport')

// Plane
// In Plane.test.js, import the Plane class from Plane.js that has been created for you.
// In Plane.test.js, construct the tests that will verify that you have included all of the required components outlined in the class diagram above. A few to consider using:
// Test that company, origin, and destination are assigned to the correct value.
// Check that the passengers array initializes as an empty array.
// Verify that you can add a Person to the passengers array using addPassenger.
// In Plane.js, create code that meets the following specifications:
// Properties
// company: The company that operates the Plane.
// origin: The origin set to the static property of Airport.airportCode (created in the next section).
// destination: The destination the plane is traveling to.
// passengers: An array of Passenger instances assigned to this plane. This should initialize as an empty array.
// Methods
// getPassengers(): Returns the array of passengers.
// addPassenger(passenger): Adds the passenger to the passengers array.
// Verify your tests work by running npm test ./__tests__/classes/Plane.test.js.

describe('Plane', () => {
    const hawk = new Plane('Fiserv', 'Sunnyvale')

    it('Company is assigned to the correct variable', () => {
        expect(hawk.company).toBe('Fiserv')
    })
    it('Origin is assigned to the correct variable', () => {
        expect(hawk.origin).toBe(Airport.airportCode)
    })
    it('Destination is assigned to the correct variable', () => {
        expect(hawk.destination).toBe('Sunnyvale')
    })
    it('Passengers is initialized as an empty array', () => {
        expect(hawk.passengers).toEqual([])
    })
    it('getPassengers() returns list of passengers', () => {
        expect(hawk.getPassengers()).toEqual([])
    })
    it('addPassenger() adds a passenger to passenger array', () => {
        hawk.addPassenger('richard')
        expect(hawk.getPassengers()).toEqual(['richard'])
    })
})
