let clickCounter = 0;

function clickHandler(evt){
    clickCounter++;

    let str = "Vielen Dank für das Klicken..."+clickCounter;
    this.innerText = str;
}

let p = document.getElementById("pElement");
p.addEventListener("click", clickHandler);

// DOM Event
function bodyClick(evt){
    // console.log(evt);
    console.log("Es wurde geklickt bei: " + evt.pageX + ", " + evt.pageY)
}

window.onclick = bodyClick;

// p5
function setup(){
    background("red");
}


function mouseClicked(){
    console.log("P5: ", mouseX, mouseY)
}
