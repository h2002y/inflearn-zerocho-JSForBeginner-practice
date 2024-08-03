// Object 객체 리터럴
// 배열도 객체고 함수도 객체다
// 객체 리터럴은 배열과 함수가 아닌 객체를 의미한다

// 관계가 없는 데이터를 하나로 묶기 위해서 객체를 사용한다
const name = '김철수';
const age = '20';
const gender = 'M';

// =>

// 객체는 데이터들을 하나로 묶으면서 이름도 붙인 것이다
// 데이터를 묶어놓기만 할거다 => 배열
// 데이터를 묶지만 이름은 붙이고 싶다 => 객체 리터럴
// 객체 리터럴의 속성으로 데이터를 저장한다
// 속성명은 따옴표안의 문자열로 특수 문자를 포함시킬 수 있다
const kim = {
    name: '김철수', // 속성 이름: 값,
    age: 20, // 객체의 속성을 구별할 때 쉼표를 붙인다
    gender: 'M', // 마지막 속성에 쉼표를 넣을 필요는 없지만 쉼표를 넣어야 속성 값을 추가할 때 편리하다
    'etc tmi': 'extra',
    'etc-tmi': 'tmi',
    tmi: 'tmi',
};

// 객체의 속성에 접근할 때는 객체.속성명 을 사용한다
// 객체.속성명 접근 방식의 경우 특수글자가 들어간 속성명을 참조하면 에러가 난다
console.log(kim);
console.log(kim.name);
console.log(kim.age);
console.log(kim.gender);



// 또는 배열처럼 객체['속성명']으로도 접근이 가능하다
// 이때 속성명에 따옴표를 붙여줘야 한다
// 객체['속성명'] 접근 방식의 경우 특수 문자가 들어간 속성명도 참조할 수 있다
console.log(kim['name']);
console.log(kim['age']);
console.log(kim['gender']);

// 따라서 아래의 배열 접근 방식을 사용해야 한다
// console.log(kim.etc tmi); // missing ) after argument list
// console.log(kim.'etc tmi'); // Unexpected string
// console.log(kim.etc-tmi); // tmi is not defined
// console.log(kim.'etc-tmi'); // Unexpected string
console.log(kim["etc tmi"]);
console.log(kim["etc-tmi"]);

console.log();

// 객체.['속성명']의 '속성명' 대신 변수를 넣어버릴 경우
// 해당 변수에 저장된 데이터를 속성명으로 탐색한다
const tmi = 'hello';
const prop = 'name';

console.log(kim['tmi']); // tmi
console.log(kim[tmi]); // undefined, kim['hello']와 같고 hello라는 속성이 없음으로 undefined

console.log(kim[prop]); // 김철수, kim['name']과 같고 kim의 name은 '김철수'임으로 김철수

console.log(kim['hello']); // undefined, 없는 속성

console.log(kim);

// 객체 속성 수정하기
// 객체 속성 접근 방식에 값을 대입하면 된다
kim.gender = 'F';
console.log(kim.gender); // F

kim['gender'] = 'M';
console.log(kim['gender']); // M

// 객체 속성 제거하기
delete kim["etc tmi"];
console.log(kim);

delete kim.tmi;
console.log(kim);

// 배열과 함수가 객체인 이유
// 배열과 함수에도 객체 속성을 추가, 수정, 제거할 수 있다
// 객체는 배열과 함수도 포함하는 개념이라 (객체를 배열 모양으로 만듦, 객체를 함수 모양으로 만듦)
// 배열과 함수가 아닌 객체를 객체 리터럴이라고 한다
// 하지만 배열과 함수를 객체처럼 사용할 필요는 없다
function hello() {
    console.log("안녕하세요");
}

hello.a = 'A';
hello.b = 'B';

console.log(hello);
// [Function: hello] { a: 'A', b: 'B' }

const arr = [1, 2, 3];
arr.a = 'A';
arr.b = 'B';

console.log(arr);
// [ 1, 2, 3, a: 'A', b: 'B' ]

// 메서드
// 객체의 속성값으로 함수를 넣었을 때 메서드라고 한다
kim.hello = () => {
    console.log("안녕하세요!");
}

console.log(kim);

//  {
//    name: '김철수',
//    age: 20,
//    gender: 'M',
//    'etc-tmi': 'tmi',
//    hello: [Function (anonymous)] => 메서드
//  }

kim.hello(); // 안녕하세요!