let clickCount = 0;

function clickHandler(evt){
   clickCount++;
   console.log(evt);
   
   let str = "Thanks for clicking " + clickCount;
   this.innerText = str;
}

let p = document.getElementById("pElement");
p.addEventListener("click", clickHandler);

// function bodyClick(evt){
//    console.log("Clicked at X: " + evt.pageX + ", Y: " + evt.pageY);
// }
// window.onclick = bodyClick;

// function windowLoad() {
//    console.log("Window is loaded");
// }
// window.onload = windowLoad;

function click(evt) {
   console.log("Window: ", evt.pageX, evt.pageY);
}
window.onclick = click;

// function keydown(evt) {
//    console.log("You printed " + evt.key);
// }
// window.onkeydown = keydown;

//////////////////////////////


function setup(){
   createCanvas(500,500);
   background("red");
}

// function mouseClicked() {
//    console.log(mouseX, mouseY);
// }


function preload() {
   console.log("Window is loaded");
}


function mousePressed() {
   console.log("p5", mouseX, mouseY);
}

function keyPressed() {
   console.log(key);
}


