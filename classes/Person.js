class Person {
    #bags=[];
    constructor(name,destination){
        this.name=name ;
        this.destination = destination;
    }
    addBag(bag){
        return this.#bags.push(bag);
    }
    getBags(){
        return  this.#bags
    }


}


module.exports = Person;