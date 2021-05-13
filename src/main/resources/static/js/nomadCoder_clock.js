'use strict';
/* 주기적인 반복. setInterval */

const clockContainer = document.querySelector(".js-clock");
const clockTitle = clockContainer.querySelector("h1");

function getCurrentTime() {
	const date = new Date();
	const seconds = date.getSeconds();
	const minutes = date.getMinutes();
	const hour = date.getHours();
	clockTitle.innerText = `${hour < 10 ? `0${hour}` : hour} : ${minutes} : ${seconds < 10 ? `0${seconds}` : seconds}`;


}


function init() {
	getCurrentTime();
	setInterval(getCurrentTime, 1000);
}

init();