// Objects
// one of the JS's data type.
// a collection of related data and/or functionality.
// Nearly all objects in JS are instance of Object

// 오브젝트는 키와 값의 집합체이다
// object = {key : value};


// 1. Literals and Properties

//기본적인 함수호출 방법으로 하면
const name = 'minki';
const age = 4;
print(name, age);
function print(name, age) {
	console.log(name);
	console.log(age);
	//인자가 많아질수록 불편
}

const minki = {name: 'minki', age: 4} //오브젝트를 만들어서 사용
function print2(person) {
	console.log(person.name);
	console.log(person.age);
}
print2(minki);

//remind. 오브젝트를 만드는 방법
const obj1 = {}; // ' Object literal ' syntax. JS에서는 클래스가 없어도 중괄호 { } 로 바로 오브젝트 생성가능
const obj2 = new Object(); // ' Object constructor ' syntax

// JS는 타입이 Runtime때 결정되므로...아래와 같은 것도 가능
minki.hasJob = true; // 이미 오브젝트를 만들었음에도, 나중에 추가가 된다.
console.log(minki.hasJob);
delete minki.hasJob // 나중에 추가한걸 삭제 또한 가능하다
console.log(minki.hasJob);
// 다른 언어에서 흔하지 않은 방식
// 유지보수가 힘들어지고 예상치못한 에러가 발생할 수 있으니 추천X


// 2. Computed properties
console.log(minki.name); // 오브젝트 내부propertie에 접근할 때는 dot ( . ) 사용
console.log(minki['name']); // 또 다른 방법. 배열처럼 접근이 가능. -> Computed properties 방식
// 주의. key는 스트링 타입으로해야 한다 : obejct['키이름'];
minki['hasJob'] = true; // 이러한 문법으로도 추가 가능
console.log(minki.hasJob);

// 어떤 경우에 어떤 방식을 쓰는가?
// dot 방식 : 코딩하는 그 순간, 키에 해당하는 값을 받아오고 싶을 때
// Computed properties 방식 : 정확하게 어떤 키가 필요한지 모를 때(=런타임에서 결정될 때)

// 예를 들어?
// 오브젝트와 키를 받아서, 오브젝트에 에서 키에 상응하는 값을 출력하는 함수가 있다고 보자.
// 언제, 어떤 키를 받을 지는 모른다(사용자가 입력하는 경우 등)
//  = 코딩하는 시점에서는 key를 모른다.
function printValue(obj, key) {
	console.log(obj.key); // object에 key 라는 key의 값 출력하게 동작된다.
	// 당연히, 오브젝트에 key 라는 key가 없으면 undefined출력

	//따라서, Computed propertie 방식을 사용한다
	console.log(minki[key]);
}
printValue(minki, 'name');
printValue(minki, 'age');



// 3. Property value shorthand

const person1 = {name: 'bob', age: 2};
const person2 = {name: 'steve', age: 3};
const person3 = {name: 'dave', age: 4};
//동일한 key, value를 반복해서 작성하고 있다
// ....하나하나 만들어주기 번거롭다 -> 함수를 사용해서 값만 전달하도록 하자

const person4 = makePerson('minki', 31);
function makePerson(name, age) {
	return{
		name: name,
		age: age
	}
}
//Property value shorthand 기능
// key와 value의 이름이 동일하면, 생략가능
function makePersonShorthand(name, age) {
	return{
		name,
		age
	}
}
const person5 = makePerson('minkiiiiiiiii', 3);
console.log(person5 );
// JS에 class가 없을 때는 이러한 방식이 많이 사용 됨


// 4. Constructor function
// 다른 계산을 하지 않고, 순수하게 오브젝트를 생성하는 함수는
// 대문자로 시작하는 이름으로 이름을 지어준다
function Person(name, age) {
	// return 대신, constructor에서 했던 것과 같이 this 키워드 사용

	//생략된 것 : this = {};
	this.name = name;
	this.age = age;
	//생략된 것 : return this;
}
const person6 = new Person('mk', 3); // JS엔진이 알아서 오브젝트를 생성해준다



// 5."in" operator
// property existence check (key in object)
// 오브젝트에 해당 key 유무 체크
console.log('name' in minki);
console.log('age' in minki);
console.log('random' in minki);

// 6. "for ... in"   vs "fo ... of"

// for (key in obj)
// for문이 반복될 때 마다, object가 가진 key들이 지역변수 localKey에 할당된다
// -> 모든 키들을 받아와서 작업하고 싶을 때 사용
for (localKey in minki) {
	console.log(localKey);
}


// for (value of iterable)
// 배열, 리스트같은 순차적으로 iterable한 (반복가능한?)
// 데이터의 모든 값을 받아와서 작업하고 싶을 때 사용
const array = [1, 2, 3, 4, 5];

//기본적인 for문을 이용한 방법
for (let i = 0; i < array.length; i++) {
	console.log(array[i]);
}

// for문이 반복될 때 마다, 배열이 가진 값들이 지역변수 number에 할당된다
for (const number of array) {
	console.log(number);
}



// 7. Cloning
// Object.assign(dest, [obj1, obj2, obj3 ...])

const user = {name:'minki', age: 20};
const user2 = user;
// 변수user에는 name=minki, age=20 의 오브젝트의 메모리주소(reference)가 할당되어있다
// 변수user2 에는 변수user와 동일한 레퍼런스가 할당되어 있다.
user2.name = 'coder';
console.log(user); // user2가 보고있는 오브젝트는 user가 보고있는 오브젝트와 동일하므로
// user2에서 값을 바꾸면 user에도 영향을 미친다


// 오브젝트를 "복사"하는 방법은 ?
// 옛날방법...
const user3 = {}; // 빈 오브젝트를 만들고
for (const userKey in user) {
	user3[userKey] = user[userKey];  // 복사대상의 key들을 for in 문을 통해 모두 가져온다
}
console.log(user3);

// Object assign 방법
const user4 = {}; // 빈 오브젝트를 만들고
Object.assign(user4, user);  // dest 부분에 넣기
console.log(user4);
// 또는
const user5 = Object.assign({}, user);
console.log(user5 );

// assign의 source에 여러가지를 전달한 경우
const fruit1 = {color: 'red'};
const fruit2 = {color: 'blue', size: 'big'};
const mixed = Object.assign({}, fruit1, fruit2);
console.log(mixed.color); // blue가 출력 됨
console.log(mixed.size ); // big이 출력 됨
// 같은 key를 가지고 있다면 => 뒤쪽 오브젝트의 값으로 덮어 씌어진다
















