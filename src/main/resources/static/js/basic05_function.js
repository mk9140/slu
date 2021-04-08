// 1. JS에서 함수의 정의
// function NAME(PARAM1, PARAM2) ... { body ... return...;}
// 중요포인트 : 하나의 함수 = 하나의 일
// 이름짓기 = 동사 형태로 지정해준다.
// -> createCardAndPoin -> createCard, createPoint
// JS에서 함수는 오브젝트로 간주 -> 함수를 변수에 할당, 파라미터로 전달, 함수를 리턴 가능

function printHello() {
	console.log(`hello`);
}
printHello();

function log(message) {
	console.log(`${message}`);
}
log('param hello');
log(1234);
console.log(
	`바닐라 JS에서는 타입변환이 유연하기 때문에
	함수의 파라미터나 리턴값의 타입을 지정 해주지 않아도 동작
	-> but 규모가 커지거나 API로 제공해야 할 때... 등
		타입이 필요 -> Type Script
	`);

// 2. 파라미터
//파라미터를 사용할 때
//primitive  타입은 value가 전달되며
//object 타입은 reference가 전달됨
function changeName(obj) {
	obj.name = 'coder';
}
const mk ={name: 'minki'};
changeName(mk);
console.log(mk);

// 3. Default parameters (ES6+)
function showMessage(message, from) {
	console.log(`${message} by ${from}`);
}
function showMessage2(message, from = 'unknown') {
	// 파라미터 옆에 원하는 Default 값을 지정해 두었다.
	// 사용자가 파라미터를 전달하지 않았을 때, 대체되어 사용됨
	// 아래 코드와 같은 기능
	/*
	if (from === undefined) {
		from = 'unknown';
	}
	*/

	console.log(`${message} by ${from}`);
}
showMessage('hi'); //인자 하나만
showMessage2('hi'); //인자 하나만


// 4. Rest parameters (ES6+)
function printAll(...args) {
	// 파라미터 앞에 " ... "
	// 배열 형태로 받아와진다.
	// -> args는 인자들이 담긴 '배열'이 됨

	for (let i = 0; i < args.length; i++) {
		console.log(args[i]);
	}

	//배열에서 값 꺼내오는 방법....
	for (const arg of args) {
		// args에서 arg로 하나하나 꺼내옴
		console.log(arg)
	}

	//배열에서 값 꺼내오는 방법 조금더 간단히
	args.forEach((arg) => console.log(arg));


}
printAll('hi', 'hello', '안녕'); // 인자를 여러개 사용했다?


// 5. Local scope
//밖에서는 안이 보이지 않고, 안에서만 밖을 볼 수 있다
let globalMessage = 'global'; // 전역변수
function printMessage() {
	let message = 'hello'; // 지역변수
	console.log(message);
	console.log(globalMessage);

	function printAnother() {
		console.log(message);
		let child = 'hello';
	}
}
printMessage();

// 6. Return a Value
function sum(a, b) {
	return a + b;
}

// 7. Early return, Early exit

// bad
function upgradeUser(user) {
	if (user.point > 10) {
		// logic....
	}
}

// good
function upgradeUser2(user) {
	//조건이 맞지 않을 때는 빨리 return (이나 exit) 해서 종료시킨다
	if (user.point <= 10) {
		return;
	}
	// logic...
}


//
//
// 1. Function expression
// a function declaration can be called earlier than it is defined. (hoisted)
// a function expression is created when the execution reaches it.

// 함수에 아무런 이름 없이 변수에 할당( = anonymous function)
// 물론, 이름 지정해주고 할당해 줄 수 있다 (= named function)
const print = function () {
	console.log(`print func`);
};
print();
// function expression -> 할당된 다음부터 호출이 가능
// print()를 할당보다 위에 작성하면 당연히 에러

const printAgain = print;
printAgain();
const sumAgain = sum;
console.log(`${sumAgain(5, 3)}`);





// function declaration.. 정의 하기도 전에 호출이 가능하다 (hoisted)
printMyMessage();
function printMyMessage() {
	console.log(`JS엔진이, 선언된 것을을 제일 위로 올려서 처리 -> hoisted`);
}



// 2. Callback func using func expression
// 함수를 (다른함수에) 전달했다 : printYes, printNo
// 받은 함수는 필요에 따라 파라미터의 함수들을 호출할 수 도 있다
// printYes, printNo -> callback func
function randomQuiz(ans, printYes, printNo) {
	if (ans === 'love you') {
		printYes();
	} else {
		printNo();
	}
}

// function expression
//  anonymous function
const printYes = function () {
	console.log(`yes!`);
};
// function expression
// named function
const printNo = function print() { // 디버깅 할 때 함수이름이 나온다
	console.log(`No!`);

	//print();
	//위의 함수호출을 코멘트 해제하면,
	// 함수가 자기 자신을 또 호출하고 호출하고 호출하고...
	// -> recursions
};

randomQuiz('wrong', printYes, printNo);
randomQuiz('love you', printYes, printNo);



// Arrow Function
// 함수를 간결하게 만들 수 있다.
// 항상 이름 없는  anonymous function

// function expression
const simplePrint = function () {
	console.log(`simplePrint!`);
};

// function 키워드를 지우고
// 블럭 { } 도 지운다
// 그리고 => 를 붙이고 한 줄로 이어준다
const simplePrint2 =  () => console.log(`simplePrint!`);
const simpleAdd = (a,b) => a+b;
const simpleMultiply = (a, b) => {
	//do something more...

	//function 키워드는 안썼지만
	//블럭을 쓰게되면
	//return 키워드가 필요
	return a * b;
};



// IIFE : Immediately Invoke Function Expression
//선언함과 동시에 바로 호출

//보통의 방법
function normalHello() {
	console.log(`normal`);
};
normalHello();

//IIFE
//함수를 괄호 ( )로 묶고
// 호출하듯이 (); 를 마지막에 붙여주면
// 선언과 동시에 호출
(
	function iifeHello() {
		console.log(`IIFE`);
	}
)();













