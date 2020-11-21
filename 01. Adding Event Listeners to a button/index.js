// fist step to creat a function that want to trigger when the button / mouse click.

var buttonLength= document.querySelectorAll(".drum").length

for (i=0; i<buttonLength; i++){

  /*this add event listener is for single button, to add all button want to put inside the loop
  also change into addEventListenerAll*/

  /*addEventListener takes two inputs, one is type (click/keyboard) and another is call back/anonymous or named function.
  function name without paranthesis, else remove that name and directly write the function inside the paranthesis.*/

  document.querySelectorAll("button")[i].addEventListener("click", handleClick);

  function handleClick() {
      alert (" I got clicked");
    }
}

//------------------------OR-------------------------
// document.querySelectorAll("button")[i].addEventListener("click", function () {
//     alert (" I got clicked");
//   });
