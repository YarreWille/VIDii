// JavaScript Document
console.log("Howdy!");


/****Voor de  Eevee switch*****/

const eeveeArray = ["eevee", "vaporeon", "jolteon", "flareon", "espeon", "umbreon", "glaceon", "leafeon", "sylveon"];
const lastEevee = document.querySelector(".pad-last");
const nextEevee = document.querySelector(".pad-next");
const img = document.querySelector("section.scherm-links section");
const body = document.querySelector("body");
let currentNumb = 0;

lastEevee.addEventListener("click", () => {
	console.log(currentNumb);
	if (currentNumb === 0) {
		img.classList.remove(`${eeveeArray[currentNumb]}`)
		body.classList.remove(`${eeveeArray[currentNumb]}`)
		currentNumb = eeveeArray.length - 1;
		img.classList.add(`${eeveeArray[currentNumb]}`)
		body.classList.add(`${eeveeArray[currentNumb]}`)
	} else {
		img.classList.remove(`${eeveeArray[currentNumb]}`)
		body.classList.remove(`${eeveeArray[currentNumb]}`)
		currentNumb--;
		img.classList.add(`${eeveeArray[currentNumb]}`)
		body.classList.add(`${eeveeArray[currentNumb]}`)
	}
});

nextEevee.addEventListener("click", () => {
	if (currentNumb === eeveeArray.length - 1) {
		img.classList.remove(`${eeveeArray[currentNumb]}`)
		body.classList.remove(`${eeveeArray[currentNumb]}`)
		currentNumb = 0;
		img.classList.add(`${eeveeArray[currentNumb]}`)
		body.classList.add(`${eeveeArray[currentNumb]}`)
	} else {
		img.classList.remove(`${eeveeArray[currentNumb]}`)
		body.classList.remove(`${eeveeArray[currentNumb]}`)
		currentNumb++;
		img.classList.add(`${eeveeArray[currentNumb]}`)
		body.classList.add(`${eeveeArray[currentNumb]}`)
	}
});





