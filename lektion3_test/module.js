class Square {
    constructor(side){
        this.side = side;
    }

    getArea(){
        testFunction(this.side);
        return this.side * this.side;
    }

}

function testFunction(text){
    console.log(text);
}

const myObj = { name: "Sabine", age: 102, isHungry: true }

module.exports = {Square, myObj}