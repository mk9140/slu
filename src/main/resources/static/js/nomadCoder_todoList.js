'use strict';

const toDoForm = document.querySelector(".js-toDoForm");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.querySelector(".js-toDoList");


const TODOS_LS = "toDos";
let toDos = [];



function deleteToDo(event) {
	const targetBtn = event.target;
	const targetLi = targetBtn.parentNode;
	toDoList.removeChild(targetLi);

	// 필터 : 콜백함수 전달해서, true 인 여러 결과들을 배열화
	// 배열toDos 로부터 아이템을 하나씩 toDo 라는 이름으로 가져와서
	// 저장된 아이템의 id와 클릭된 btn에 해당되는 li의 id가 같지 않으면 true
	// = delete버튼 클릭된 li 이외의 li들을 모아서 다시 배열화 시킴
	const cleanToDos = toDos.filter((toDo) => toDo.id !== Number(targetLi.id));
	toDos = cleanToDos;
	saveToDos();


}

function saveToDos() {

	// 자바스크립트는 데이터를 저장할 때 "string"으로 저장하려고 함
	// 따라서, 배열(오브젝트)를 그대로 저장할 수는 없으므로
	// JSON형태의 문자열로 변경하여 저장
	localStorage.setItem(TODOS_LS,JSON.stringify(toDos));
}


function paintToDo(text) {
	const li = document.createElement("li");
	const deleteBtn = document.createElement("button");
	const span = document.createElement("span");
	const liId = toDos.length + 1;
	deleteBtn.innerText = "❌";
	deleteBtn.addEventListener("click", deleteToDo);
	span.innerText = text;
	li.appendChild(deleteBtn);
	li.appendChild(span);
	li.id = String(liId);
	toDoList.appendChild(li);
	const toDoObj = {
		text: text,
		id: liId,
	};
	toDos.push(toDoObj);
	saveToDos();
}

function handleSubmit(event) {
	event.preventDefault();
	const currentValue = toDoInput.value;
	paintToDo(currentValue);
	toDoInput.value = "";

}

function loadToDos() {
	const loadedToDos = localStorage.getItem(TODOS_LS);
	if (loadedToDos !== null) {
		// 로컬 스토리지에는 JSON형태(string)으로 데이터가 저장되어 있음
		// 이를 다시 배열(오브젝트)로 변경
		const parsedToDos = JSON.parse(loadedToDos);
		parsedToDos.forEach((toDo) => paintToDo(toDo.text));
	}
}


function init() {
	loadToDos();
	toDoForm.addEventListener("submit", handleSubmit)

}
init();