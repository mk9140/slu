'use strict';


// async , await
// : Promise를 더 간편하고 간결하게 만들어줌
// (기존 비동기식으로 코드 작성하는 스타일처럼)
// 주의. 절대 Promise의 대체가 아니라, 상황에 맞는걸 써야함.

// 1. async

// 네트워크 통신으로 사용자의 이름을 받아오는 함수를 가정

// Promise의 then 사용한 방법
function fetchUser1() {
	return new Promise(((resolve, reject) => {
		// do network request in 10sec...
		resolve('minki1');
	}));
}
const user1 = fetchUser1();
user1.then(userName => console.log(userName));

// async 사용한 방법
// 함수 선언 앞에 async키워드 추가 하면 해당 코드블록이 자동으로 Promise로 변환됨
async function fetchUser2() {
	// do network request in 10sec...
	return 'minki2';
}
const user2 = fetchUser2();
user2.then(userName => console.log(userName));


// 2. await
// async키워드가 붙은 함수 안에서만 사용가능
function delay(ms) {
	return new Promise(resolve => setTimeout(resolve, ms));
}

async function getApple() {
	await delay(1000);
	return '🍎';
}

async function getBanana() {
	await delay(2000);
	return '🍌';
}

function getBananaWithPromise() {
	return delay(3000)
		.then(() => '🍌');
}


function pickFruitsWithChaining() {
	return getApple()
		.then(apple => {
			return getBanana()
				.then(banana => `${apple} + ${banana}`)
		});
	// promise도 너무 중첩으로 사용하면 callback지옥처럼 됨...
}
pickFruitsWithChaining().then(console.log);


async function pickFruits () {

	// getApple과 getBanana는 서로 연관이 없는 처리 -> 병렬적으로 하는 것이 효율적
	const applePromise = getApple(); // promise는 생성하자마자 실행된다
	const bananaPromise = getBanana();
	const apple = await applePromise;
	const banana = await bananaPromise;
	return `await의 병렬처리 ${apple} + ${banana}`;
}

pickFruits().then(console.log);


// 3. useful Promise APIs

//위의 병럴처리를 깔끔하게
// all -> 지정된 Promise들을 병렬적으로 실행시키고, 결과를 모으는 함수
function pickAllFruits() {
	return Promise.all([getApple(), getBanana()])
		.then(fruits => fruits.join['+']);
}
pickAllFruits().then(console.log);

// 첫 번째로 처리가 완료된 Promise의 결과를 얻고 싶을 때
// race -> 지정된 Promise들을 병렬적으로 실행시키고, 가장 먼저 얻은 결과만 전달 해주는 함수
function pickOnlyOne() {
	return Promise.race([getApple(), getBanana()])
}
pickOnlyOne().then(console.log)













