// Eventlistner
/**The method addEventListener() works by adding a function, or an object that implements EventListener, to the list of event listeners for the specified event type on the EventTarget on which it's called.  */
/** Syntax
addEventListener(input1, input2)            //input1 = what event it should listen to,  input2 = what it should do
addEventListener(type, listener)
addEventListener(type, listener, options)
addEventListener(type, listener, useCapture) */


//Detecting Button press
var numberOfDrumBtn = document.querySelectorAll(".drum").length;

for (var i = 0; i < numberOfDrumBtn; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", handleclick);                    //here the func handleclick is w/o paranthesis . If we include the paranthesis then the function will be directly called at the start only   //So while using addEventListner dont use paranthesis after func
    // Eventlistener
    function handleclick() {
        // to give sound to each button element will use switch statement
        var buttonInnerHTML = this.innerHTML;

        makeSound(buttonInnerHTML);
        buttonAnimation(buttonInnerHTML);

    }
}


document.addEventListener("keypress", function (event) {                  //event provide the information of the action happens for eg here "click"
    makeSound(event.key)
    buttonAnimation(event.key)
})

function makeSound(key) {

    switch (key) {
        case "w":
            var audio = new Audio("sounds/tom-1.mp3")
            audio.play();
            break;
        case "a":
            var audio = new Audio("sounds/tom-2.mp3")
            audio.play();
            break;
        case "s":
            var audio = new Audio("sounds/tom-3.mp3")
            audio.play();
            break;
        case "d":
            var audio = new Audio("sounds/tom-4.mp3")
            audio.play();
            break;
        case "j":
            var audio = new Audio("sounds/snare.mp3")
            audio.play();
            break;
        case "k":
            var audio = new Audio("sounds/crash.mp3")
            audio.play();
            break;
        case "l":
            var audio = new Audio("sounds/kick-bass.mp3")
            audio.play();
            break;

        default: console.log("Success");
            break;
    }
}
// animation
function buttonAnimation(currentkey) {
    var activeButton = document.querySelector("." + currentkey);                   //current key will only give the kay but not the class name so will concatanate "."
    activeButton.classList.add("pressed");
    setTimeout(function () {
        activeButton.classList.remove("pressed");
    }, 100);
}

// Settimeout



