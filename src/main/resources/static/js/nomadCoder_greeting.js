'use strict';
/* (작은)자료의 저장. Local storage */


const form = document.querySelector(".js-form");
const input = form.querySelector("input");
const greeting = document.querySelector(".js-greetings");

const USER_LS = "currentUser";
const SHOWING_CN = "showing";

function saveName(userName) {
	localStorage.setItem(USER_LS, userName);
}


/* submit의 이벤트 핸들 */
function handleSubmit(event) {
	// submit의 기본동작은, form의 데이터들을 어딘가로 보내는 것 - 화면이 새로고침 되는 것 처럼 보인다.
	// 이 기본동작을 하지 않도록 설정할 것
	event.preventDefault();
	const currentValue = input.value
	paintGreeting(currentValue);
	saveName(currentValue);
}

/* localStorage에 저장된 이름이 없는 경우 */
function askForName() {
	// input 이 있는 form을 보이도록 class 이름 설정
	form.classList.add(SHOWING_CN);
	form.addEventListener("submit", handleSubmit);
}

/* localStorage에 저장된 이름이 있는 경우 */
function paintGreeting(text) {
	// input 이 있는 form을 안 보이도록 class 이름 설정
	console.log(`sdfsdf`);
	form.classList.remove(SHOWING_CN);

	// 환영 메세지가 보이도록 class 이름 설정
	greeting.classList.add(SHOWING_CN);

	// 환영 메세지 내용을 설정
	greeting.textContent = `Hello ${text}`;
}
function loadName() {
	const currentUser = localStorage.getItem(USER_LS);
	if (currentUser === null) {
		askForName();
	} else {
		paintGreeting(currentUser);

	}
}



function init() {
	loadName();
}

init();