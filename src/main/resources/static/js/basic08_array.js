'use strict';
// 일상생활에서 비슷한 물건들을 바구니에 담아두듯,
// 프로그래밍에서도 비슷한 종류의 데이터들을 묶어 모아둔 것이 자료구조
// 어떤 방식, 어떤 형식으로 담느냐에 따라 여러 형식이 있다.

// 오브젝트와 자료구조의 차이점?
// 오브젝트는 연관된 특징과 행동을 묶어두지만
// 자료구조는 특징이 비슷한 것들을 묶어두는 것

// 보통, 다른 언어에서는"동일한 타입" 끼리만 묶어둔다
// 하지만, 바닐라JS에서는 타입이 동적으로 정의되기 때문에
// 여러 형의 데이터 타입을 묶을 수 있다
// --> 그러나 추천하지 않는 방법



// Array declaration
const arr1 = new Array(); //방법1
const arr2 = [];	// 방법2

// index position
const fruits = ['🍎', '🍌']
console.log(fruits);
console.log(fruits.length);
console.log(`${fruits[0]}`);
console.log(fruits[1]);
console.log(fruits[2]); // undefined

console.log(fruits[fruits.length - 1]); // 배열의 마지막에 있는 데이터에 접근할 때 많이 쓰이는 방법


// 3 Looping over an array
// print all array

// 방법1 : 기본적인 for문
for (let i = 0; i < fruits.length; i++) {
	console.log(fruits[i]);
}

// 방법2 : for of 문
for (let fruit of fruits) {
	console.log(fruit);
 }

console.log('/////////////////////////////');
// 방법3 : foreach
//      * Performs the specified action for each element in an array.
// 배열에 들어있는 값 마다, 전달한 콜백함수를 실행시킴
// 콜백함수가 받는 3개의 인자 : value, index, array
//param : callbackfn : A function that accepts up to three arguments. forEach calls the callbackfn function one time for each element in the array.
//param? thisArg :   An object to which the this keyword can refer in the callbackfn function. If thisArg is omitted, undefined is used as the this value.
// 물음표-> 전달해도 되고, 안해도 되는
fruits.forEach( (fruit, index, array)  => {
	console.log('값 출력 ' + fruit);
	console.log(`인덱스 출력 ${index}`);
	console.log('배열 출력' + array); // 보통은 쓰이지 않으므로 인자에서 지워도 무관
});


// 4. 배열에 값 삽입 삭제 복사

// 배열의 가장 마지막 순번에 값을 삽입
// push
fruits.push('🍓', '🍑');
console.log(fruits);

// 배열의 가장 마지막 순번에 값을 삭제
// pop
fruits.pop();
console.log(fruits);
fruits.pop();
console.log(fruits);


// 배열의 가장 앞에서부터 값을 삽입
// unshift
fruits.unshift('🍋', '🍉');
console.log(fruits);


// 배열의 가장 앞에서부터 값을 삭제
// shift
fruits.shift();
console.log(fruits);

// 중요 !
// shift, unshift 는 정말로 처리속도가 느리다 (pop, push보다)
// 왜?
// 배열의 뒤에 값을 삽입삭제하는 경우는 기존 데이터들의 위치는 움직이지 않는다.
// 그러나 shift, unshift는 기존 데이터들의 위치를  옮겨주는 처리가 필요하기 때문에, 느릴 수 밖에.


// 지정된 위치의 값 삭제
// splice(지우기 시작할 인덱스 , [지울 갯수])
fruits.push('🥑', '🍅', '🍒');
console.log(fruits);
fruits.splice(3, 2);
console.log(fruits);
fruits.splice(2); // deleteCount 지정하지 않으면, start인덱스부터 뒤로 다 지운다
console.log(fruits);
//splice한 뒤, 원하는 데이터를 추가도 가능
fruits.splice(1, 1, '🍏', '🍈' );
// 여기서, deleteCount 를 0으로 하면, 지우지 않고도 삽입 가능

console.log(fruits);

// 두 배열을 합치기
// concat
const fruits2 = ['🥝', '🍇'];
const newFruits = fruits.concat(fruits2);
console.log(newFruits);


console.log('/////////////////////////////////');
// 5. Searching
// find the index

console.log(fruits);
console.log(fruits.indexOf('🍈')); // 원하는 값의 인덱스를 리턴
console.log(fruits.indexOf('🥥')); // 배열 안에 존재하지 않는 값의 인덱스?  -1 을 리턴
console.log(fruits.includes('🍇')); // 배열 내 값의 존재 유무(T/F) 리턴
console.log(fruits.includes('🍏')); // 배열 내 값의 존재 유무(T/F) 리턴

// 배열 내에 똑같은 값이 존재할 때
// indexOf 는 어떻게 동작되는가
fruits.push('🍏');
console.log(fruits.indexOf('🍏')); // 배열 내 동일한 값들이 존재하면, 그 중에 가장 먼저 위치한 인덱스 리턴
// 그럼, 그 중 가장 마지막에 있는 값의 인덱스는 ?
// lastIndexOf
console.log(fruits.lastIndexOf('🍏'));












