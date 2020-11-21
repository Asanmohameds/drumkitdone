// refer video no: 181,

// In this addEventListener is Hiher order function. its takes respondToKey as a Inpunt.
// respondToKey is a call back function. because its allow us to wait something happening example "click event"
//then callback function callbackand executed.
//in this entire document detect the keypress, then document call this function respondToKey.
//when we creating anonymous function, we can call the paramenter anything we want eg: e, eve, event....


document.addEventListener("keypress", respondToKey(event));

function respondToKey(event) {
  console.log("key pressed.");
}


// ------------Detail explanation--------

function anotherEventListener(typeOfEvent, callback){


  //Detect event code...

  var eventThathappened = {

    eventType: "keypress",
    key: "p",
    duration: 2
  }

  if eventThathappened.eventType === typeOfEvent{
    callback(eventThathappened);
  }

}//now initiliazebelow

anotherEventListener("keypress", function(event){
  console.log(event)
});
