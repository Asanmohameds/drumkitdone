var buttonLength = document.querySelectorAll(".drum").length

for (i = 0; i < buttonLength; i++) {
// mouse click---------
  document.querySelectorAll(".drum")[i].addEventListener("click", function() {

      var buttonInnerHtml = this.innerHTML;

      playSound(buttonInnerHtml);
      buttonAnimation(buttonInnerHtml)

        });

  }

  //**********Keyboard pressed

  document.addEventListener("keypress", function(event) {

// pass the event happened to that as parameter and select the particular key by key property.
//console.log(event);
      playSound(event.key);
      buttonAnimation(event.key)

  });

  function playSound (key){

    switch(key){
      case "w":
      var tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
      break;

      case "a":
      var tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
      break;

      case "s":
      var tom3 = new Audio("sounds/tom-3.mp3");
      tom3.play();
      break;

      case "d":
      var tom4 = new Audio("sounds/tom-4.mp3");
      tom4.play();
      break;

      case "j":
      var snare = new Audio("sounds/snare.mp3");
      snare.play();
      break;

      case "k":
      var crash = new Audio("sounds/crash.mp3");
      crash.play();
      break;

      case "l":
      var kick = new Audio("sounds/kick.mp3");
      kick.play();
      break;

      default:console.log(key);
    }


  }


function buttonAnimation (currentKey) {

  // querySelector we need the class with dot like ".w", .a ans so on..

  var activeButton = document.querySelector("." + currentKey);
  // apply the css style alsready css have .pressed ,method. now see how to apply it here.

  activeButton.classList.add("pressed");

  //once applied the class css then its not come back, so need to give time interval
  // check in google timeout function.

  setTimeout(function() {

    // in this case wee need to remove the CSS style
    activeButton.classList.remove("pressed");

  }, 100);
}
