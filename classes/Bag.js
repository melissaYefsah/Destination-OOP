class Bag {
    #owner=null
    constructor(weight,id){
        this.weight = weight;
        this.id = id
    }
    getOwner(){
        return this.#owner;
    }
    assignOwner(person){
        this.#owner=person;
    }
}


module.exports = Bag;