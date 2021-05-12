/*
* 2-4 DOM Events
* 2-5 조건문
* 2-6 DOM + 조건문
* */
'use strict';

////// 2-4

const title = document.querySelector("#title");

function handleResize(event) {
	console.log(event);

	//event는 어디서 왔는가?? -> Javascript 로부터.
	// 이벤트를 다룰 함수를 만들 때마다 자바스크립트는 자동적으로 함수에 event 오브젝트를 붙임
}

// resize(윈도우 창 크기 변경) 이벤트가 발생했을 때, handleResize 이라는 함수를 호출해서 처리하도록.
window.addEventListener("resize", handleResize); // 함수명() 형태가 아님에 주의하기.


// function handleClick() {
// 	title.style.color = "red";
// }
// window.addEventListener("click", handleClick);

////// 2-5
/*
const age = prompt("how old are you?");
if (age >= 18 && age <= 21) {
	console.log(`you can drink but should not`);
} else if (age > 21) {
	console.log(`go ahead`);
} else {
	console.log(`too young`);
}
*/
////// 2-6
/*
const BASE_COLOR = "rgb(40, 94, 141)"
const OTHER_COLOR = "#00b400";


function handleClick() {
	const current_color = title.style.color;
	if (current_color === BASE_COLOR) {
		title.style.color = OTHER_COLOR;
	} else {
		title.style.color = BASE_COLOR;
	}
}

function colorInit(event) {
	title.style.color = BASE_COLOR;
	window.addEventListener("click", handleClick);
}
colorInit();


function handleOffline() {
	console.log(`network offline`);
}
function handleOnline() {
	console.log(`network online`);
}

window.addEventListener("offline", handleOffline);
window.addEventListener("online", handleOnline);
*/

////// 2-7
const CLICKED_CLASS = "clicked";

function handleClick() {
	// const hasClass = title.classList.contains(CLICKED_CLASS);
	// if (!hasClass) {
	// 	title.classList.add(CLICKED_CLASS);
	// } else {
	// 	title.classList.remove(CLICKED_CLASS);
	// }
	title.classList.toggle(CLICKED_CLASS); // 위의 if문을 한 번에 해결
}
function init() {
	window.addEventListener("click", handleClick);
}

init();