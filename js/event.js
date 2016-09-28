var myFunction = function myFunctionHandler() {
    alert("Hello World");
}
var startGameHandler = function startMyGame () {
   prompt("Enter your name:");
}


var button = document.getElementById("button1");

button.addEventListener("click", myFunction);

var startButton = document.getElementById("startGame");

startButton.addEventListener("click", startGameHandler);
