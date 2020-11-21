// --------------------Java Script Objects-----------

// ----------------example synatx -1;----hotel only one bellboy to maintanence.

var bellBoy1Name = "Timmy";
var bellBoy1Age = 19;
var bellBoyHasWorkPermit = true;
var bellBoy1Language = ["French", "English"]

//now alert is like below
alert("hello, my name is " + bellBoy1Name + "And My age is " + bellBoy1Age);

// -----------------------example syntax -2; now more customer so appointed more bell boys,
//then writing all above details to each bell boy is not good idea. So this is object.

var bellBoy1 = {
  name: "Timmy",
  age: 19,
  hasworkPermit: true,
  languages: ["French", "English"]
}

//now alert is like below
alert("hello, my name is " + bellBoy1.name + "And My age is " + bellBoy1.age);

//-------------example 3-----now we want to create house keeping object this object may be the proerties is different.

// so different object, we create the different properties that relevant to that object.

var housekeeper1 = {
  yearsOfExperience: 12,
  name: "Jane",
  cleaningReports: ["bathroom", "lobby", "bedroom"]
}

//console console.log((housekeeper1.yearsOfExperience)); to get specific property.

// this also painfull because if more employee then need to wirte like bellBoy1, bellBoy2 and bellBoy3...and so on..

//************* So we create function with name of first letter in capital letter as BellBoy, this function called
//************"Constructor function"***************

//*************************************************very important********************************
// this function has number of inputs, that is properties and that proerties stored into the "this" properties with dot.
// *****these are the inputs we are going to provide when we are creatine the new object.

function BellBoy (name, age, hasworkPermit, languages){

  this.name = name;
  this.age = age;
  this.hasworkPermit = hasworkPermit;
  this.languages = languages;


}// now we initiliaze this constructor funciton to new object like below:

var bellBoy1 = new BellBoy ("Timmy", 19, true, ["French", "English"]);
var bellBoy2 = new BellBoy ("Jane", 22, false, ["tamil", "English"]); //like this now repetation reduced and easy.


//********************************************************************************************************
