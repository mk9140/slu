

// 함수를 선언하는 것
function doSomething(add) {
	console.log(add);
	const result = add(4, 5);
	console.log(`${result}`);
}

function add(a, b) {
	const sum = a + b;
	return sum;
}
// 함수를 호출하는 것
doSomething(add); // 함수의 전달. 함수를 호출 add(); 하는 것과 다름.
// 호출 add(); 할 경우, 함수의 결과를 전달하게 된다.

const result = add(2, 3);
console.log(`${result}`);

//함수를 변수에 할당
const addFun = add;
console.log(addFun);
console.log(addFun(1,2));

