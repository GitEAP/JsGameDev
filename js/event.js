//UserName button
var userName;

var enterName = function myFunctionHandler() {
    userName = prompt("Enter your name:");
}
//startGame Button
var startGameHandler = function startMyGame() {
    if (userName == undefined) {
        alert("Please enter a valid name");
    }
    else {
        alert("Ready to play.");

    }
}


var button = document.getElementById("name");
button.addEventListener("click", enterName);

var startButton = document.getElementById("startGame");
startButton.addEventListener("click", startGameHandler);



var gameButton = function GameButtonConstruct(name) {
    var button;
    var fire = function () {
        alert("Fire");
    }
};

var fireWeaponButton = new gameButton();
fireWeaponButton.button = document.getElementById("fireWeapon");
console.log(fireWeaponButton.button);
fireWeaponButton.button.addEventListener("click", fireWeaponButton.fire);
