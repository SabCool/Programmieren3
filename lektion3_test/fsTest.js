const fs = require("fs");

// function main(){
//     let file  = "hello.txt";
//     fs.appendFileSync(file, "Hello world\nSabine...");
//  }
//  main();

// function main(){
//     fs.writeFile("hello.txt", "Hello world\n", function(err){
//         console.log("fs.writeFile ended");
//     });
//     console.log("fs.writeFile");
//  }
//  main();


// const dummyText = "Apple yep";

// function main() {
//     fs.writeFileSync("dummytext.txt", dummyText);
//     let text = fs.readFileSync("dummytext.txt").toString();
//     console.log(dummyText == text);
//     console.log(text);
//     fs.writeFileSync("undummytext.txt",
//         text.replace("Apple", "Microsoft")
//     );
//  }
//  main();

const obj = {
    name: "Cl",
    vorname: "SAbine",
    age: 120,
    tumo_student: false
}

function main() {

    console.log(JSON.stringify(obj))
    fs.writeFileSync("obj.json", JSON.stringify(obj));
    let text = fs.readFileSync("obj.json").toString();
    console.log(text);
    // make JS object
    let jsObj = JSON.parse(text);
    console.log(jsObj);
    console.log(jsObj.name);
   
 }
 main();