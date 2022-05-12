// JavaScript Document
console.log("Howdy!");


var eeveeArray = ["eevee", "vaporeon", "jolteon", "flareon", "espeon", "umbreon", "glaceon", "leafeon"];

var currentNumb = 0;

var lastEevee = document.querySelector("button.pad-links");

var nextEevee = document.querySelector("button.pad-rechts");
var img = document.querySelector("section.scherm-links section");

function naarLastEevee(){
	console.log("test");
	 if (currentNumb == 0) {
	 	currentNumb = eeveeArray.length -1;
	 	img.classList.add(`${eeveeArray[currentNumb]}`)
	 }
	 else{
	 	currentNumb -1;
	 	img.classList.add(`${eeveeArray[currentNumb]}`)
	 }
}

lastEevee.addEventListener("click", naarLastEevee())