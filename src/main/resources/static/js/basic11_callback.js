'use strict'

// 자바스크립트는 동기적
// -> hoisting 된 다음 순차적으로 실행

console.log(`${1}`);
console.log(`${2}`);
console.log(`${3}`);

// 자주쓰이는 함수 중, setTimeout이 있다 -> 브라우저에서 지원하는 함수.
setTimeout(() => console.log(`${4}`), 1000); // 1초 뒤에 전달한 콜백함수 실행됨 -> 비동기적
console.log(`${5}`);

// 콜백은 항상 비동기일때만 쓰일까?
// 콜백도 두 가지 경우로 나뉘어짐
// 즉각적으로(동기적으로) 실행되는 Synchronous callback
// 나중에, (상황에따라)언제 실행될 지 예측할 수 없는 Asynchronous callback

// Synchronous callback
function printNow(print) {
	print();
}
printNow(() => console.log(`print now`));

// Asynchronous callback
function printWithDelay(print, timeout) {
	//setTimeout함수를 감싸고 있는, rapping 함수 구조
	setTimeout(print, timeout);
}

printWithDelay(() => console.log(`print after`), 2000);



// 콜백지옥...예시

class UserStorage {
	// 로그인 기능 함수를 가정
	loginUser(id, password, onSuccess, onError) {
		// 실제 서버 대신에... 통신하고 일정시간 뒤 결과 받아온다는 느낌으로. 2초 타임아웃
		setTimeout(()=>{
			if (
				(id === 'min' && password === 'aa') ||
				(id === 'ki' && password === 'bb')
			) {
				onSuccess(id);
			} else {
				onError(new Error('not found...'));
			}
		},2000);
	}

	// 사용자 권한정보 취득함수를 가정
	getRoles(user, onSuccess, onError) {
		setTimeout(()=>{
			if (user === 'min') {
				onSuccess({name: 'min', role: 'admin'});
			} else {
				onError(new Error('no Role...'))
			}
		})
	}
}


// id와 pw를 입력받고
// -> (2초 뒤) 로그인 성공유무
// -> 역할정보 요청
// -> (1초 뒤) 역할정보 받아옴

const userStroage = new UserStorage();
const id = prompt('enter your id');
const password = prompt('enter your pw');

userStroage.loginUser(
	id,
	password,
	user=>{ //콜백함수
		userStroage.getRoles(
			user,
			userWithRole=>{ // 콜백함수 안의 콜백함수
				//성공적으로 로그인 된 뒤, 역할정보도 받아왔을 때
				alert(`hello ${userWithRole.name} you have a ${userWithRole.role} role`);
			},
			error=>{  // 콜백함수 안의 콜백함수
				console.log(error);
			}
		);
	},
	error=>{  // 콜백함수 안의 콜백함수
		console.log(error);
	}
);
// 콜백함수가 또 콜백함수를 호출 하고 또 호출하고 ....
// 가독성이 떨어지고, 디버깅도 어려워진다









































