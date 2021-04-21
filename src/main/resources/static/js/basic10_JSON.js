'use strict';

//브라우저에서 동작하고있는 웹사이트 웹어플리케이션 : 클라이언트가 어떻게
//서버와 통신하는지 정한, 규약 -> HTTP
//클라이언트가 요청 -> 서버가 응답

//AJAX , XHR오브젝트를 이용하면 간단하게 데이터 주고받을 수 있다.
//최근에는 fetch() API가 추가되어 쉽게 할 수 있음

// XMLHttpRequest 방법도 있지만, 사용 줄어가는 추세
// JSON 사용이 증가

// JSON
// 브라우저 뿐만 아니라 모바일-서버, 오브젝트-파일시스템 간 데이터 주고받을 때도 사용.
// 데이터를 주고 받을 때 쓸 수있는 가장 간단한 포멧
// 텍스트 기반
// 가독성 좋음
// 키:값 으로 이루어짐
// 직렬화 및 데이터 전송
// (대표적인)프로그래밍 언어 및 플렛폼에 상관없이 사용할 수 있다.

//생각해 볼 것
//1.오브젝트를 어떻게 텍스트화/직렬화로 바꾸는지(Obj -> JSON)
//직렬화 된 데이터를 어떻게 오브젝트로 다시 바꿀지 (JSON -> Obj)

// 1. Obj -> JSON
// stringify(obj, replacer?) : converts a JavaScript object or value to a JSON string

let json = JSON.stringify(true);
console.log(json);

json = JSON.stringify(['apple', 'banana']);
console.log(json);

const rabbit = {
	name: 'tori',
	color: 'white',
	size: null,
	birthDate: new Date(),
	// symbol: Symbol("id"),
	jump: ()=>{console.log(`${name} can jump!`);},
};

// 함수는 제외된다
// JS에만 있는 특별한 데이터 또한 제외된다 (Symbol 제외됨)
json = JSON.stringify(rabbit);
console.log(json);

// 콜백함수, replacer를 등록
json = JSON.stringify(rabbit, ["name"]); // 변환 원하는 프로퍼티만 등록할 수 있음
console.log(json);


json = JSON.stringify(rabbit, (key, value)=>{
	console.log(`key - ${key}, value - ${value}`); // 모든 키와 벨류가 콜백함수에 전달됨 을 볼 수 있다.
	return key === 'name' ? 'mk' : value; // key가 'name' 이면 그 값을 'mk'로 바꿈. 다른 key들은 그냥 그대로의 값
});
console.log(json);

console.log("-----------------------------------------");


// 2. JSON -> Obj
// parse(json, reviver?) : parses a JSON string, constructing the JavaScript value or object described by the string

json = JSON.stringify(rabbit); // obj -> json
const obj = JSON.parse(json); // json -> obj
console.log(obj);
rabbit.jump();
// obj.jump(); // 중요! obj->json 변환할 때 함수는 제외 되었으므로, 다시 obj로 바꿀 때 도 함수는 없다. 에러발생

console.log(rabbit.birthDate.getDate());
//console.log(obj.birthDate.getDate()); // 중요! obj->json 변환할 때, 데이터 타입은 string이 된다.
// 다시 obj로 변환할 때 string형. 즉, Date(오브젝트)의 함수를 쓸 수 없어서 에러발생.


//reviver 이용해서 원래의 오브젝트 데이터형을 복원해보자
const obj2 = JSON.parse(json,  ((key, value) => {
	console.log(`key : ${key} , value : ${value}`); // 모든 키와 벨류가 콜백함수에 전달됨 을 볼 수 있다.
	return key === 'birthDate' ? new Date(value) : value; // birthDate를 다시 Date로 복원해보기
}))
console.log(obj2.birthDate.getDate());



// JSON 유용한 사이트

//JSON Diff checker
// http://www.jsondiff.com/

//JSON Beautifier/editor
// https://jsonbeautifier.org/

//JSON Parser
// https://jsonparser.org/

//JSON Validator
// https://tools.learningcontainer.com/json-validator/






