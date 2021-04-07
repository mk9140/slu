
//1. String concatenation
console.log('my' + 'cat');
console.log('1 + 2');
console.log(`string literals: 1 + 2 = ${1+2}`); // 백틱사용


// 2. Numberic Op
console.log('Func: add , #9, 1+ 2 ->', 1 + 2);
console.log('Func: substract, #10, 1 -1 ->', 1 - 1);
console.log('Func: divide, #11, 1/2 ->', 1 / 2);
console.log('Func: multiply, #12, 1*2 ->', 2 * 2);
console.log('Func: remainder, #13, 5%2 ->', 5 % 2);
console.log('Func: exponentiation, #14, 2**3 ->', 2 ** 3);

//3. Increment / decrement op
let counter = 2;
const preIncrement = ++counter; // counter에 +1 연산을 한 뒤 preIncrement 에 할당
// counter = counter + 1;
// preIncrement = counter

const postIncrement = counter--; // postIncrement에 counter를 할당한 뒤 counter에 -1 연산

// 4. Assignment op
let x = 3;
let y = 6;
console.log('Func: , #27, x+=y ->', x+=y); //x = x+y
console.log('Func: , #28, x -= y ->', x -= y);
console.log('Func: x *= y, #29, x *= y ->', x *= y);
console.log('Func: , #30, x /= y ->', x /= y);

// comparison op
console.log('Func: , #33, 10<6 ->', 10 < 6);
console.log('Func: , #34, 10<=6 ->', 10 <= 6);
console.log('Func: , #35, 10>6 ->', 10 > 6);
console.log('Func: , #36, 10>=6 ->', 10 >= 6);


// 6. Logical op : || or , && and , ! not
// OR ||
let value1 = false;
let value2 = 4 < 2;
console.log(`OR연산: ${value1 || value2 || check()}`);
console.log(`중요 : OR연산 -> 조건중 하나라도 TRUE 나오면 비교중지(다른 조건들 봐봐야 무의미하므로) 
						= 연산이 간단한 것 부터 조건의 앞에다가 서술해두기!`);
function check() {
	for (let i = 0; i < 10; i++) {
		console.log(`💯 🍕🍔`);
	}
	return true;
}

//AND &&
console.log(`AND연산 : ${value1 && value2 && check()}`);
console.log(`중요 : AND연산 -> 조건중 하나라도 FALSE 나오면 비교중지(다른 조건들 봐봐야 무의미하므로) 
						= 연산이 간단한 것 부터 조건의 앞에다가 서술해두기!`);
console.log(`AND는 널체크 할 때도 쓰임`);
console.log(` nullableObj && nullableObj.something  -> nullableObj가 null 이라면 FALSE 
		->	nullableObj가 null이 아닐때만 nullableObj.something  을 동자시킴`);
console.log(`즉, if(nullableObj !=null){ nullableObj.something } 와 같음`);

//NOT !
console.log(`T-F 반전`);

//7. Equality
const stringFive = '5';
const numberFive = 5;

// == lose equality with TYPE CONVERSION
console.log(`문자형과 숫자형을 비교(==)하는데 결과는? ${stringFive == numberFive}`);
console.log(`문자형과 숫자형을 비교(!=)하는데 결과는? ${stringFive != numberFive}`);
console.log(`==, != :형은 다르지만, JS엔진이 형변환해서 내용물을 비교..`);

// === strict equality NO CONVERSION
console.log(`문자형과 숫자형을 비교(==)하는데 결과는? ${stringFive === numberFive}`);
console.log(`문자형과 숫자형을 비교(!=)하는데 결과는? ${stringFive !== numberFive}`);
console.log(`===, !== : 형변환 없이! 타입도 비교`);

// obect equality by reference
const mk1 = {name: 'ki'};
const mk2 = {name: 'ki'};
const mk3 = mk1;
console.log(`mk1 == mk2 ${mk1 == mk2}`);
console.log(`mk1 === mk2 ${mk1 === mk2}`);
console.log(`mk1 === mk3 ${mk1 === mk3}`);
console.log(`오브젝트는 reference형태로 메모리에 저장..`);
console.log(`mk1과 mk2는 똑같은 데이터를 가졌지만
메모리에는 mk1, mk2의 레퍼런스는 다르며, 서로 다른 오브젝트를 보고 있다`);
console.log(`mk3에는 mk1의 레퍼런스를 할당했으므로 true`);

// 8. Condition op
console.log(`if문, 삼항연산자, switch, while, do-while, for`);
console.log(`break, continue`);