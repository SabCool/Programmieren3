// console.log("Hello NodeJS...");

// const os = require("os");
// let message = "Die Plattform ist ";

const square = require("./module.js");
let mySquareObj = new square.Square(5);

function main(){
    // console.log(message + os.platform);
    console.log(`Der Flächeninhalt ist ${mySquareObj.getArea()}`);

    console.log("Das Objekt: " + square.myObj);
    console.log("Das Objekt: " + square.myObj.name);
    // console.log("Testfunktion aufrufen: " + square.testFunction("te"));
}

main();


