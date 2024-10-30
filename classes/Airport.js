
class Airport {
    static airportCode = ''; 

    constructor(name, airportCode) {
        this.name = name; 
        Airport.airportCode = airportCode; 
        this.planes = []; 
    }

    
    getPlanes() {
        return this.planes;
    }

    
    addPlane(plane) {
        this.planes.push(plane);
    }
}

module.exports = Airport;