'use strict';

// 1. join
// Adds all the elements of an array into a string
{
	// make a string out of an array
	const fruits = ['apple', 'banana', 'orange'];
	const result1 = fruits.join(); // 구분자 없이
	console.log(result1);
	const result2 = fruits.join('-');
	console.log(result2);
}

// 2. split
// 문자열의 함수. 문자열을 지정한 구분자를 기준으로 나누어서 배열화
// make an array out of a string
{
	const fruits = '🍏, 🥝, 🍌, 🍒'; // 문자열
	const result1 = fruits.split(','); // 문자열에 정의된 함수. 구분자(스트링or정규표현식)와 ?리미트를 전달받음
	console.log(result1);
	const result2 = fruits.split(',',2);
	console.log(result2);
}

// 3. reverse
// Reverses the elements in an array in place.
// 배열내 아이템들의 순서를 거꾸로.
{
	const array = [1, 2, 3, 4, 5];
	console.log(array.reverse());
	console.log(array); // 배열 자체를 변화시킴
}

// 4. slice
// Returns a copy of a section of an array.
// 주의. end 파라미터는 exclusive 함 -> 계산에 포함 안 됨
// (연속된)원소들을 제거해서 새로운 배열 만들 때 사용
//
{
	const array = [1, 2, 3, 4, 5];
	const array2 = [6, 7, 8, 9, 10];
	const result = array.splice(0, 2); // 앞부터 두 개의 아이템을 제거
	console.log(array); // 삭제된 다음의 배열 (배열 자체에서 삭제됨)
	console.log(result); // 삭제된 대상(배열)
	console.log(`splice는 원본배열 자체를 변경시킨다`);
	const result2 = array2.slice(2, 5);
	console.log(array2); // slice해도 원본 배열에는 영향 X
	console.log(result2); // 결과(배열)
	console.log(`slice는 원본배열 변경X`);
}


class Student {
	constructor(name, age, enrolled, score) {
		this.name = name;
		this.age = age;
		this.enrolled = enrolled;
		this.score = score;
	}
}

const students = [
	new Student('A', 29, true, 45),
	new Student('B', 28, false, 80),
	new Student('C', 30, true, 90),
	new Student('D', 40, false, 66),
	new Student('E', 18, true, 88),
];



// 5. find
// 가장 처음 찾은(TRUE) 요소를 반환
// 콜백함수를 만들어 전달, 배열의 요소마다 콜백함수를 실행
// 콜백함수는 boolean 타입을 리턴해야함
{
	// find a student with the score 90
	const result = students.find(
		(student) => student.score === 90
	);
	console.log(result);
}


// 6. filter
// 콜백함수 전달 -> 콜백함수 결과가 TRUE 인 결과들을 모아 배열화
// find는 결과가 하나, filter는 결과가 여럿-배열화
{
	// make an array of enrolled students
	const result = students.filter(
		(student) => student.enrolled
	);
	console.log(result);
}

//7. map
// 콜백함수 전달 -> 배열의 값을 콜백함수를 통해 모종의 처리 -> 새로운 배열
// 배열의 값을 콜백함수를 통해 다른 값으로 맵핑(mapping)하는 것

{
	// make an array containing only the student's score
	// result should be [45,80,90,66,88]

	// 학생의 정보를 받아서 result에 학생의 점수 student.score를 리턴
	const result = students.map( (student) => student.score);
	console.log(result);
}



// 8. some , every
// some : 콜백함수를 전달하여, 콜백함수의 결과가 TRUE가 되는게 있는지 없는지 확인결과 리턴 (TRUE / FALSE)
// every :  콜백함수를 전달하여, 배열의 모든 요소들이 콜백함수 결과를 충족하는지 안하는지 리턴 (TRUE / FALSE)
{
	// check if there is a student with the score lower than 50
	const result = students.some((student)=>student.score<50);
	console.log(result);
	const result2 = students.every((student)=>student.score>=50);
	console.log(result2);
}


// 9. reduce
// 콜백함수(previousVal, currentVal) 전달 -> 콜백함수의 결과를 누적 -> 리턴
// : 콜백함수의 결과(currentVal)가 다음 콜백함수 실행 시 previousVal이 됨
{
	// compute students' avg score
	const result = students.reduce(function (prev, curr) {
		return prev + curr.score;
	}, 0); // 초기값으로 0 설정

	// 1회째 : prev 0(초기값으로 0을 설정했으므로), curr 45 => 45 리턴
	// 2회째 : prev 45, curr 80 => 125 리턴
	// 3회째 : prev 125, curr 90 => 215 리턴
	// ...
	console.log(result); // 총합
	console.log(result / students.length); // 평균


	//reduceRight 도 있음 (배열의 뒤에서부터 콜백함수 호출)
}

// 10 문법
{
	// make a string containing all the score >= 50
	// result should be '80,90,66,80'

	//아래와 같은 문법으로, 묶어서 가능
	const result = students
		// map으로 학생들의 점수만으로 이루어진 배열을 만들고
		.map((student) =>student.score)
		// filter로 50이상의 점수들만 구해서
		.filter((score)=>score >= 50) // 주의. map을 사용했으므로 이미 숫자로만 이루어진 배열이므로 student.score가 아니다
		// join을 이용해 배열의 아이템들을 문자열로.
		.join();
	console.log(result);

}

// 추가. sort
// 콜백함수에는 A값과 N값을 전달이 되는데
// 콜백함수의 결과가 음수(-)값이면, A < B
// 결과가 0 이면 A = B
// 결과가 양수면 A > B
{
	const result1 = students.map((student) => student.score);
	const result2 = students.map((student) => student.score);

	//오름차순
	console.log(
		result1.sort((a, b) => a - b)
			.join()
	);
	// 내림차순
	console.log(
		result2.sort((a, b) => b - a)
			.join()
	);

}














