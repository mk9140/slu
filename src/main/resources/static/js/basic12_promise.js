'use strict';

// 비동기 처리 두 번째 시간
// JS가 제공하는 비동기를 간편하게 처리할 수 있또록 도와주는 오브젝트

// 정해진, 장시간의 기능을 수행하고 나서
// 정상적으로 수행되었다면 성공메시지와 처리된 결과값 전달
// 수행중 에러 있으면, 에러전달


// 콜백 대신 유용하게 사용
// 공부포인트 1. state(상태), 2. producer(정보제공) / consumer(정보소비) 차이점 알기

// state : pending(수행중) --> fulfilled(완벽히 완료한 상태) or rejected(도중에 문제 발생)
// producer vs consumer

// 1. Producer(executor콜백함수)
// when new Promise is created, the executor runs automatically
const promise = new Promise(((resolve, reject) => {
	// doing some heavy work
	// 왜 heavy ?
	// 네트워크에서 데이터를 받거나, 파일을 읽어오거나 하는 등의 (시간이 걸리는)처리를
	// '동기적'으로 실행하면 처리하는 동안 프로그램이 다른 일을 할 수 X
	//  따라서 시간 걸리는 처리는 비동기적 처리가 좋다.
	console.log('doing something...');

	// 중요. Promise를 만드는 순간, executor(콜백함수)가 바로 실행된다.
	// 네트워크 통신이 바로 개시된다거나 등등...
	// 따라서, 사용자의 조작이 요구되는 처리를 작성할 때는 주의.
	// 예시) 유저가 버튼을 눌러야 네트워크 통신 개시할 때 등.


	// 네트워크 통신을 가정해서, 2초정도 뒤에 resolve콜백함수를 호출
	setTimeout(()=>{
		resolve('minki') // resolve : 정상적으로 완료되었을 때 호출하는 콜백함수
		// reject(new Error('no network')); // 처리실패시 호출하는 콜백함수. 보통은 Error 오브젝트를 리턴함
	},2000)
}));


// 2. Consumers: then, catch, finally

promise.then((value) => { // then : Promise의 성공케이스
	// Promise가 정상적으로 수행되어, 최종적으로 resolve라는 콜백함수가 전달한 값이 value에 삽입됨
	console.log(value);
})
	.catch(error=>{ // catch : Promise의 실패케이스
		//reject콜백함수가 리턴한 Error오브젝트
		console.log(error);
	})
	.finally(()=>{// finally : 성공/실패에 상관없이 무조건 마지막에 호출됨
		console.log(`finally`);
	})
;

// 3. Promise chaining
const fetchNumber = new Promise(((resolve, reject) => {
	setTimeout(() => resolve(1), 1000);
}));

fetchNumber
	.then(num => num * 2) // 1 * 2 = 2
	.then(num => num * 3) // 2 * 3 = 6
	.then(num => { // then으로 Promise를 전달했다
		return new Promise(((resolve, reject) => {
			setTimeout(() => resolve(num - 1), 1000); // 6 - 1 = 5
		}));
	})
	.then(num => console.log(num)); // 5


// 4. Error Handling

// 서버에서 닭, 달걀, 요리 정보를 받아오는 걸 가정
const getHen = () => new Promise((resolve, reject) => {
	setTimeout(() => resolve('🐔'), 1000);
});

const getEgg = hen => new Promise((resolve, reject) => {
	// setTimeout(() => resolve(`${hen} => 🥚`), 1000);
	setTimeout(() => reject(new Error(`error! ${hen} => 🥚`)), 1000); // 달걀 정보를 받아오다가 실패했다

});

const cook = egg => new Promise((resolve, reject) => {
	setTimeout(() => resolve(`${egg} => 🍳`), 1000);
});


getHen()
	.then(hen => getEgg(hen)) // .then(getEgg) 으로 간결화 가능. 밑의 것들도 마찬가지 방식으로 간결화 가능
	.catch(error => {// 에러핸들링. 달걀 준비할 때 에러가 발생했을때, 달걀대신 다른거로 준비하겠다
		return '🍞';
	}) // Promise 체인에 문제가 생기지 않도록 에러핸들링
	.then(egg => cook((egg)))
	.then(meal => console.log(meal))
	.catch(console.log)


// 5. 콜백지옥...을 Promise로 바꾸기
class UserStorage {
	// 로그인 기능 함수를 가정
	loginUser(id, password) {
		return new Promise((resolve, reject) => {
			setTimeout(()=>{
				if (
					(id === 'min' && password === 'aa') ||
					(id === 'ki' && password === 'bb')
				) {
					resolve(id);
				} else {
					reject(new Error('not found...'));
				}
			},2000);
		});
	}

	// 사용자 권한정보 취득함수를 가정
	getRoles(user) {
		return new Promise((resolve, reject) => {
			setTimeout(()=>{
				if (user === 'min') {
					resolve({name: 'min', role: 'admin'});
				} else {
					reject(new Error('no Role...'))
				}
			}, 1000);
		});


	}
}


// id와 pw를 입력받고
// -> (2초 뒤) 로그인 성공유무
// -> 역할정보 요청
// -> (1초 뒤) 역할정보 받아옴

const userStroage = new UserStorage();
const id = prompt('enter your id');
const password = prompt('enter your pw');

userStroage
	.loginUser(id, password)
	.then(user => userStroage.getRoles(user))
	.then(user => alert(`hello ${user.name} you have a ${user.role} role`))
	.catch(error => console.log(error))
;
































