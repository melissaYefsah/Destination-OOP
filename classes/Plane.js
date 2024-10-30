const Airport = require('../classes/Airport')


class Plane {
    static origin = Airport.airportCode

    constructor(company,destination){
        this.company=company
        this.origin=Plane.origin
        this.destination=destination
        this.passengers=[]
    }

    getPassengers(){
        return this.passengers
    }
    addPassenger(name){
        this.passengers.push(name)
    }


}


module.exports = Plane;