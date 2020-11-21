// find out----play sound java script in google.

// from stack overflow---- var audio = new Audio("file path"); then
                          //audio.play();

// this capital letter Audio is called constructor function.

var buttonLength= document.querySelectorAll(".drum").length

for (i=0; i<buttonLength; i++){

  document.querySelectorAll(".drum")[i].addEventListener("click", function () {

    // to find out the which button is clicked by the tap into the "this" keyboard

      //console.log(this); // we get button object then we use the innerhtml method to get the key which we triggered.
      // we also use this identity to change the style.

      //---example*********** to change the text color***

      //this.style.color = "white";

  });
}


var audio = new Audio("file path");
audio.play();
