// ES6

/**
 * Shorthand property names
 */
{

 // jS의 오브젝트. key: value 로 이루어짐
 const mk1 = {
  name: 'minki',
  age: '31',
 };

 const name = 'minki';
 const age = '31';

 // 앞서 정의한 변수로 새로운 오브젝트를 만들 때

 // 💩
 const mk2 = {
  name: name,
  age: age,
 };

 // ✨
 const mk3 = {
  // key와 value의 이름이 동일하면, 하나로 축약해서 작성 가능하다.
  name,
  age,
 };

 console.log(mk1, mk2, mk3);

}


/**
 * Destructuring Assignment
 */
{
 // Object
 const student = {
  name: 'anna',
  level: '1',
 }

 // 💩
 {
  // 기존
  // object의 value에 접근하는 방법 -> [.]를 통해서
  const name = student.name;
  const level = student.level;
  console.log(name, level);
 }

 // ✨
 {
  // 오브젝트에 있는 key의 이름을 동일하게 중괄호 안에 정의해주면
  // 알아서 맞게 할당해줌
  const {name, level} = student;
  console.log(name, level);

  // key 이름과 변수명을 달리하고 싶을 때는 (key 이름을 그대로 쓰고싶지 않을 때)
  // key이름:전달받을변수명  으로 작성하면 된다.
  const {name:studentName, level:studentLevel} = student;
  console.log(studentName, studentLevel);
 }

 // Destructuring은 오브젝트 뿐만 아니라 배열에서도 동일하게 사용

 // Array
 const animals = ['🐶', '🐱'];

 // 💩
 {
  // 기존
  // 배열의 접근할때 인덱스를 사용
  const first = animals[0];
  const second = animals[1];
  console.log(first, second);

 }

 // ✨
 {
  // 변수들을 대괄호에 안에 정의해주면,
  // 배열로부터 순서대로 알아서 값을 받아온다
  const [first, second] = animals;
  console.log(first, second);
 }
}

/**
 * Spread Syntax
 * 오브젝트의 주소참조값(레퍼런스)를 복사하는 것이므로 주의.
 * (원래의 오브젝트를 변경하면 복사한 것에 전부 영향미침)
 */
{
 const obj1 = {key: 'key1'};
 const obj2 = {key: 'key2'};
 // 오브젝트를 담고있는 배열
 const array = [obj1, obj2];

 // 배열의 복사에는 여러 방법이 있지만
 // Spread Syntax를 이용해서 간단하게 가능
 const arrayCopy = [...array]; // 배열의 괄호인 대괄호[]사용
 // ... 의 의미? -> 배열의 아이템을 하나씩 복사해오는 것을 의미 (레퍼런스의 경우, 레퍼런스를 복사해옴)
 console.log(array,arrayCopy);
 // 레퍼런스 복사이므로, 동일한 오브젝트를 참고하고 있다.



 // 배열을 복사해 오면서, 새로운 아이템을 추가하는 것도 가능
 // Spread Syntax 사용 후 추가하고자 하는 아이템을 작성하면 됨.
 const arrayCopy2 = [...array, {key: 'key3'}]; // 기존 배열을 복사하면서, 새로운 오브젝를 정의해서 arrayCopy2에 저장
 console.log(array,arrayCopy2);


 //배열 뿐만 아니라 오브젝트를 복사도 가능
 const obj3 = {...obj1} // 오브젝트의 괄호인 중괄호{} 사용
 console.log(obj1, obj3);

 // 조금 응용: 배열의 합치기(concatenation), 오브젝트 병합(merge)
 const fruits1 = ['🍑', '🍓'];
 const fruits2 = ['🍅', '🍎'];
 const fruits3 = [...fruits1, ...fruits2];
 console.log(fruits3);

 const dog1 = {dog1:'🐕'};
 const dog2 = {dog2:'🐩'};
 const dog3 = {...dog1, ...dog2};
 console.log(dog3);

 // 주의. 만약 key이름이 동일한 오브젝트를 병합한다면
 // 뒤의 오브젝트가 앞의 오브젝트를 덮어씀
 const cat1 = {cat: '🐱'};
 const cat2 = {cat2: '🐈'};
 const cat3 = {cat: '😹'};
 const cat4 = {...cat1, ...cat2, ...cat3}
 console.log(cat4); // cat1과 cat3의 key이름이 동일하므로, cat3에대한 것만 출력됨
}


/**
 * Default parameters
 */
{
 // 어느 인자를 받는 함수를 정의하고, 인자의 기본값을 설정할 때.

 // 💩
 {
  // 기존.
  // 함수에 파라미터 null 체크 로직을 추가함
  function printMessage(msg) {
   if (msg == null) {
    msg = 'default message1111';
   }
   console.log(msg);
  }
  printMessage('hello1111');
  printMessage(); // 인자 미전달의 경우.
 }

 // ✨
 {
  // 인자이름 다음에, 기본값으로써 사용할 값을 지정할 수 있다.
  function printMessage(msg = 'default message2222') {
   console.log(msg);
  }
  printMessage('hello2222');
  printMessage(); // 인자 미전달의 경우.
 }
}


/**
 * Ternary Operator
 */
{
 // 어느 변수의 상태(T,F)에 따라 다른 변수를 정의하고 싶을 때.

 const isCat = true;

 // 💩
 {
  let component;
  if (isCat) {
   component = '🐈';
  } else {
   component = '🐕';
  }
  console.log(component);
 }

 // ✨
 // 삼항연산자... 간단한 처리에는 괜찮지만...중첩되게 사용하면 오히려 가독성 저하. 주의.
 {
  const component = isCat ? '🐈' : '🐕';
  console.log(component);
 }
}


/**
 * Template Literals
 */
{
 const weather = '☁';
 const temperature = '16°C'

 // 💩
 // 기존
 // 작은 따옴표(Single quotation)와 변수, 그리고 + 기호의 조합
 console.log(
     'Today weather is ' + weather + ' and temperature is ' + temperature
 );

 // ✨
 // 백틱사용
 console.log(`Today weather is ${weather} and temperature is ${temperature}`);
}

//ES11

/**
 * Optional Chaining
 */
{

 // 오브젝트 내부에 오브젝트를 사용
 const person1 = {
  name: 'minki',
  job: {
   title: 'S/W Eingineer',
   manager: {
    name: 'Bob',
   },
  },
 };

 const person2 = {
  name: 'Bob',
 };


 // 💩
 {
  function printManager(person) {
   // undefined(또는 null)체크 로직추가해서
   // 최종적으로는 manager의 name을 출력할 수 있게.
   console.log(person.job && person.job.manager && person.job.manager.name);
   // person에 job이 있고, person의 job에 manager가 있으면 person의 job의 manager의 name을 출력
   // ... 중복되는 것들이 보기 좋지 않다.
  }

  printManager(person1);
  printManager(person2); // manager가 존재하지 않으므로...undefined
 }

 // ✨
 {
  function printManager(person) {
   // undefined(또는 null)체크 로직추가해서
   // 최종적으로는 manager의 name을 출력할 수 있게.
   console.log(person.job?.manager?.name);
   // person에 job이 있나? (있으면 person에의 job에)manager가 있나?  (있으면  person의 job의 manager의) name을 출력
   // 중복되는 것들을 ? 로 간략화
  }
  printManager(person1);
  printManager(person2);

 }

}


/**
 * Nullish Coalescing Operator
 */
{
 // Logical OR operator
 // false로 간주되는 것들: false, '', 0, null, undefined
 {


  // OR 연산자를 통해, 어떤 변수의 값이 false이면 기본 값으로 대체되게 끔
  // 종종 사용되어져 왔다.
  {
   const name = 'Minki';
   const userName = name || 'Guest';
   console.log(userName);
  }

  // 💩
  {
   // name이 null이거나 undefined인 경우에만 기본값을 사용하고 싶은데,
   // '' 또한 false로 간주되어지기 때문에 기본값이 할당되어진다.
   const name = '';
   const userName = name || 'Guest';
   console.log(userName);

   // 숫자 0을 출력하고 싶었는데, 0또한 false로 간주되어지므로
   // 기본값이 출력되어버린다.
   const num = 0;
   const message = num || 'Not A Number';
   console.log(message);

  }


  // ✨
  {
   // ?? 를 사용.
   // 값이 있다면 그대로 사용하고, 값이 없다면(null, undefined)라면 뒤의 것을 사용
   const name = '';
   const userName = name ?? 'Guest';
   console.log(userName);

   const num = 0;
   const message = num ?? 'Not A Number';
   console.log(message);
  }

 }

}