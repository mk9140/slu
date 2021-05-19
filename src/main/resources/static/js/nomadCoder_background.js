'use strict';

const body = document.querySelector("body");

const IMG_NUMBER = 3;


function paintImg(imgNumber) {
	const image = new Image();
	image.src = `/image/nomad_${imgNumber}.jpg`;

	image.classList.add("bgImage");

	body.prepend(image);

}


//random number generate
function genRandom() {
	const number = Math.ceil(Math.random() * 3);
	return number
}


function init() {
	const randomNumber = genRandom();
	paintImg(randomNumber);
}
init();