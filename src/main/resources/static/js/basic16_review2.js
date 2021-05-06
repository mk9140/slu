class Counter {
	// Counter 라는 클래스에는
	// increase라는 함수와
	// counter 라는 변수가 있다. 만드는 순간 0으로 초기화 된다 (constructor에 의해)

	constructor() {
		this.counter = 0;
	}

	// 클래스에서 함수를 작성할 때
	// function 키워드는 필요 없다.

	// counter가 5의 배수가 될 때마다 알고싶다.
	increase(runIf5Times){
		this.counter++;
		console.log(this.counter);
		// 첫 번째 방법. 함수 자체에 로직을 넣는다
		// 문제점
		// Counter 클래스 자체에서 이루어지기 때문에
		// 사용자가 수정/제어하기가 어려움
		// -> 출력 개소에따라 메세지를 조금씩 달리한다던가... 등. 재사용성이 떨어짐
		// 클래스를 수정하면, 사용되고 있는 곳 전부에 대해 테스트가 필요하게 됨
		/*
		if (this.counter % 5 === 0){
			console.log(`yo`);
		}
		*/

		// 두 번째 방법. 콜백함수 이용
		// 장점.
		// 수정 및 원하는 기능을 정의하기 용이함->전달하는 함수만 수정하면 되기 때문
		if (this.counter % 5 === 0){
			runIf5Times(this.counter);
		}
	}
}

// 콜백함수 정의
function printSomething(num) {
	console.log(`yo! ${num}`);
}
function printSomething2(num) {
	console.log(`hi! ${num}`);
}


// class Counter를 이용해서 오브젝트 생성
const coolCounter = new Counter();
// 함수 호출, 콜백함수 전달
// 주의.
// printSomething -> 함수 자체가 전달되는 것
// printSomething(xxx) -> 함수의 실행 '결과' 가 전달되는 것
coolCounter.increase(printSomething);
coolCounter.increase(printSomething);
coolCounter.increase(printSomething);
coolCounter.increase(printSomething);
coolCounter.increase(printSomething);

coolCounter.increase(printSomething);
coolCounter.increase(printSomething);
coolCounter.increase(printSomething);
coolCounter.increase(printSomething);
coolCounter.increase(printSomething2);



// 콜백함수까지 전달하느라 increase함수를 호출하기 매우 번거롭다...
// -> constructor 에서 콜백함수를 받도록 한다.

class CounterTwo {
	// 오브젝트를 생성할 때, 콜백함수를 전달받고
	// callback이라는 변수에 저장
	constructor(runEveryFiveTimes) {
		this.counter = 0;
		this.callback = runEveryFiveTimes;
	}

	// increase 함수에서 직접 콜백함수를 전달받는 대신
	// callback 변수가 가지고 있는 (오브젝트 생성시 전달받은) 콜백함수를 사용하게 한다.
	increase(){
		this.counter++;
		console.log(this.counter);
		if (this.counter % 5 === 0){
			// 인자를(콜백함수) 전달하지 않았을 때, this.callback은 undefined이 되어버리므로
			// 이를 그대로 호출해버리면 에러 발생. 따라서 체크 로직이 필요

			this.callback && this.callback(this.counter);
			// 참고. undefined -> false
			// 참고. 위 코드는 아래의 if문과 같음
			//if(this.callback){
			//	this.callback(this.counter);
			//}
		}
	}
}
const coolCounterTwo1 = new CounterTwo(printSomething);
const coolCounterTwo2 = new CounterTwo(printSomething2);
const coolCounterTwo3 = new CounterTwo(); // 생성자에서 함수를 전달받기로 되어있는데, 공백으로 둔다면?
// Type Script에서는 인자가 꼭 전달받아야 하는가, 없어도 되는 옵션인가 정할 수 있지만
// 바닐라 JS에는 인자를 전달하지 않으면, undefined 이 되어버린다...
// -> undefined 을 호출하게 되어버리니까, 에러발생
// -> undefined 체크 로직이 추가로 필요하다.


coolCounterTwo1.increase();
coolCounterTwo1.increase();
coolCounterTwo1.increase();
coolCounterTwo1.increase();
coolCounterTwo1.increase();
coolCounterTwo1.increase();

coolCounterTwo2.increase();
coolCounterTwo2.increase();
coolCounterTwo2.increase();
coolCounterTwo2.increase();
coolCounterTwo2.increase();
coolCounterTwo2.increase();
coolCounterTwo2.increase();

coolCounterTwo3.increase();
coolCounterTwo3.increase();
coolCounterTwo3.increase();
coolCounterTwo3.increase();
coolCounterTwo3.increase();
coolCounterTwo3.increase();
coolCounterTwo3.increase();
coolCounterTwo3.increase();


// 실용성은 떨어지는 예시였으나
// 포인트는
// 클래스 작성시, 하나의 완전체로 만들기 보다는
// 원하는 기능을 끼워 맞출 수 있는, 재조립(?)이 가능하도록 만드는 것이 좋다
//



