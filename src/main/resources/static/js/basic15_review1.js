// 복습정리
// 15.변수 | primitive 타입과 object의 차이점
// 16.함수 | 함수 정의, 호출, 그리고 콜백함수
// 17.연산자 | boolean의 모든것 && 연산자

//변수

//변수의 정의
// primitive type: number, string, boolean, null, undefined
// 메모리 공간에 값이 복사됨
let number = 2;
let number2 = number;

console.log(number);
console.log(number2);
number = 3;
console.log(number);
console.log(number2); // number2를 선언할 당시의 number의 '값이 복사' 되어 할당됐으므로
// 도중에 number의 값을 바꿔도 그대로 유지

//object
// key: value 로 구성
// 메모리 공간에 주소(reference)가 할당됨
const obj = {
	name: 'mk',
	age: 5,

};
console.log(obj.name);

let obj2 = obj;
console.log(obj2.name);
obj.name = 'james';
console.log(obj.name);
console.log(obj2.name); // 똑같이 'james'가 출력된다
// Object 타입은 메모리에 값이 복사가 되는 것이 아닌, 주소가 할당되는 것이므로
// obj2의 메모리공간엔 obj의 주소값이 들어있다 = 가리키고 있는 오브젝트가 동일하다
// 따라서 obj를 수정하면, 같은곳을 가리키고 있는 obj2에도 영향이 미친다



// obj를 const로 만들었는데, 왜 나중에 name을 변경 가능했나?
// 레퍼런스를 변경 불가능 한 것이지(= 다른 오브젝트를 할당하는 것. key가 다르거나 많거나 적거나 하는등의...)
// (동일한)오브젝트(= 레퍼런스가 동일한 것)의 변경은 가능하다.
// obj변수에 오브젝트 자체가 담겨있는 것이 아니라 레퍼런스가 담겨있다는 개념을 이해 해야한다.

console.log('//////////////////////////////////////////////////\n');
//////////////////////////////////////////////////
// 함수

const num = 1;
const num2 = 2;
const result = num + num2;
console.log(result);

const num3 = 3;
const num4 = 4;
const result2 = num3 + num4;
console.log(result2);

// ....

// 반복되는 로직을 효율적으로 처리하기 위해 함수 사용
// 함수의 정의
// function키워드 함수명 (인자){내용}
function add(a, b) {
	return a+b;
}

// 함수의 호출
const sum = add(5, 6);
console.log(sum);


//함수를 다른 변수에 할당
const doSomething = add; // 변수 doSomething에 함수 add 의 레퍼런스가 할당된다.
// 즉, 똑같은 함수를 가리키고 있다.
// 호출하는 방법도 함수와 동일.

const funcResult = doSomething(7, 8);
console.log(funcResult);

//함수를 다른 함수에 인자로 전달
function surprise(callback) {
	const result = callback(9,10); // 인자 callback 를 실행하고 결과값을 받는다
	console.log(result);
}
function divide(a, b) {
	return a / b;
}
surprise(add);
surprise(divide);

console.log('//////////////////////////////////////////////////\n');
//////////////////////////////////////////////////
// 연산자 boolean
let test = 9;
if (test) {
	console.log('true!');
} else {
	console.log('false!');
}


// 자바스크립트에서의 true, false
// false : 0, -0, '', "",null, undefined, NaN
// true : -1, 1, 'hello','false', [](empty array), object
// []가 true 임에 주의... 내용은 비어있지만, 오브젝트 이므로!

test && console.log(test);
// test가 false 면 뒤의 콘솔로그 실행이 안 됨
// if(test){console...}과 같음
// 오브젝트가 undefined(또는 null 등)인지 아닌지 먼저 체크하고
// 함수를 실행하도록 해야 하는 경우가 많다
// 그러한 경우에 사용한다




