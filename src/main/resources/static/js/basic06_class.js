'use strict';

// Object - Oriented Programming
//		Class : template
//		Object : Instance of a Class

// JS의 Class : ES6 부터 추가
// (그 이전에는? prototype 있었다)

// 1. class declaration
class Person {
	// constructor
	constructor(name, age) {
		//fields
		this.name = name;
		this.age = age;
	}

	//method
	speak(){
		console.log(`${this.name} : hello!`);
	}
}

const mk = new Person('minki', 31);
console.log(`${mk.name}`);
console.log(`${mk.age}`);
mk.speak();

// 2. getter / setter
class UserWithoutGS {
	constructor(firstName, lastName, age) {
		this.firstName = firstName;
		this.lastName = lastName;
		this.age = age;
	}
}
// 의도 : 유저의 나이는 변수 age에 저장
const user1 = new UserWithoutGS('Steve', 'Jobs', -1); // 나이를 -1 로 ?
console.log(user1.age);  // 나이가 -1 -> 의도에서 벗어난다.

class UserWithGS {
	constructor(firstName, lastName, age) {
		this.firstName = firstName;
		this.lastName = lastName;
		this.age = age;
	}

	/// 주의 !!
	// 아래와 같은 명명법 그대로 사용하면 call stack 에러발생.

	// age의 getter를 정의하는 순간, 생성자의 this.age는
	// 메모리의 데이터를 읽어오는 것이 아니라
	// getter를 호출하게 된다.
	// get age() {
	// 	return this.age;
	// }

	// age의 setter를 정의하는 순간, 생성자의 = 사인을 ( = age) 호출할 때
	// 즉, 값을 할당할 때 메모리에 있는 값을 바로 할당하는 것이 아니라
	// setter를 호출하게 된다.
	// set age(value) {
		//setter 안에서
		// 전달된 value를 this.age 에 할당할 때, 메모리의 값을 업데이트 하는 것이 아니라
		// setter를 호출하게 된다. -> value를 할당할 때 setter 호출 ->  value를 할당할 때 setter 호출 ->  ...
		// 무한정 반복되니 call stack 에러발생.
		// this.age = value;
	// }

	// 따라서, getter/setter의 변수명을 조금 다르게 만들어 줘야 한다.
	get age() {
		return this._age;
	}
	set age(value) {
		this._age = value  < 0 ? 0 : value;
	}
}
const user2 = new UserWithGS('Steve', 'Jobs', -1); // 나이를 -1 로 ?
console.log(user2.age); // setter에 의해 0으로.



// 3. Fields (public, private)
// 최근에 추가되었다.-> 브라우저에서 지원되는지 확인필요할 정도로 최근
// (크롬은 2020년 11월에 지원)
class Experiment {
	thisIsPublicField = 2;
	#thisIsPrivateField = 33;
}
const experiment = new Experiment();
console.log(`${experiment.thisIsPublicField}`);
console.log(`${experiment.thisIsPrivateField}`); // private이므로 class 외부에서는 접근할 수 없다.

// 4. static properties and methods
// 최근에 추가됨

// class안의 필드와 메소드들은
// 새로운 object를 만들 때 마다
// 같이 새롭게 만들어진다

// but, Object에 상관 없이
// 클래스가 가진 고유의 값이나 반복적으로 사용되어지는 메소드들은
// 오브젝트와 상관없이 class와 연결된다.
// Type script에서 종종쓰인다.

class Article {
	static publisher = 'Dream';

	constructor(articleNumber) {
		this.articleNumber = articleNumber;
	}

	static printPublisher() {
		console.log(` ${Article.publisher}`);
	}
}
const article1 = new Article(1);
const article2 = new Article(2);

console.log(`${article1.publisher}`); // 'Dream'이라 지정했지만 undefined 출력될 것
//article2.printPublisher(); // 펑션이 없다고 에러가 발생할 것
// 왜? publisher, printPublisher() 앞에 static 키워드 부터있다
// 		-> 오브젝트와 연결된 것이 아니라, 클래스 자체와 연결
console.log(`${Article.publisher}`);
Article.printPublisher();
// 오브젝트와 상관없이


// 5. 상속 & 다형성
// a way for one class to extend another class
class Shape {
	//fields
	constructor(width, height, color) {
		this.width = width;
		this.height = height;
		this.color = color;
	}

	//methods
	draw() {
		console.log(`drawing ${this.color} color of`);
	}

	getArea() {
		return this.width * this.height;
	}
}

//Shape클래스를 상속받는다. -> Subclass. 자식클래스
class Rectangle extends Shape{
}

class Triangle extends Shape {
	//overriding
	draw() {
		//단순히 draw()를 오버라이딩 하면
		//부모클래스(Shape)의 draw()는 호출이 안된다.
		//부모클래스의 메소드를 호출하고 싶을때는 'super'키워드
		super.draw();
		console.log('🔺');
	}

	//삼각형의 넓이구하는 공식은 width*height가 아니므로.
	getArea() {
		return (this.width * this.height) / 2;
	}
}
const rectangle = new Rectangle(20, 15, 'red');
rectangle.draw(); //  Shape를 상속받았으므로, Shape의 메소드 사용가능
const triangle = new Triangle(15, 15, 'blue');
console.log(triangle.getArea());
triangle.draw();


// 6. Class checking : instanceOf
// 'instanceOf' operator
// [어느 오브젝트] instanceof [어느 클래스]
//		->[어느 오브젝트]가 [어느 클래스]의 인스턴스인지 아닌지
//			즉, [어느 오브젝트]가 [어느 클래스]를 이용해서 만든 아이인지 아닌지 확인
//			true, false 리턴
console.log(rectangle instanceof Rectangle); // T
console.log(triangle instanceof Rectangle); // F
console.log(triangle instanceof Triangle); // T
console.log(triangle instanceof Shape); // T
console.log(triangle instanceof Object); // T (우리 만든 모든 오브젝트는 JS의 Obejct를 상속받음)

