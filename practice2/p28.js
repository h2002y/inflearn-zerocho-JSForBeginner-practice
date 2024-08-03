// 객체의 비교 (윈시값 차이점)
// 객체끼리는 모양이 같아도 항상 false가 나온다
// Javascript는 객체를 값이 아닌 참조로 비교하기 때문이다

console.log(false === false); // true
console.log('string' === 'string'); // true
console.log(5 === 5); // true

console.log({} === {}); // false, 새로운 객체와 새로운 객체
// JavaScript는 값이 아닌 참조로 개체를 비교하므로 이 조건은 항상 'false'을(를) 반환합니다.ts(2839)
// 배열도 false가 나오고 함수도 false가 나온다

// 객체는 모양이 같아도 생성할 때마다 새로운 객체가 생성된다
// 같은 객체인지 비교하려면 기존 객체를 변수에 저장해야 된다

const a = {
    name: '김철수',
    age: 20,
};

const b = {
    name: '김철수',
    age: 20,
};

const c = a;

console.log("a와 b 비교 " + (a === b)); // 값은 동일해도 a와 b의 참조 주소값이 달라서 false
console.log("a와 c 비교 " + (a === c)); // 값이 동일하고 a와 c의 참조 주소값이 같아서 true

// a와 c는 주소가 같기 때문에 a에 gender가 추가되면 c에도 gender가 추가된 것을 볼 수 있다
a.gender = 'M';
console.log(a); // gender O
console.log(c); // gender O

console.log("달라진 a와 c 비교 " + (a === c)); // 값이 동일하고 a와 c의 참조 주소값이 같아서 true


// 이건 배열과 함수도 마찬가지다
const arr = [1, 2, 3];
console.log("arr과 [1, 2, 3] 비교 " + (arr === [1, 2, 3])); // false

// 객체가 아닌 값들은 메모리 주소에 값이 따로 존재한다
let x = 1;
let y = 1;
// x와 y의 1은 동일한 1을 가리킨다
// 좀 더 자세하게 말하자면
// 객체가 아닌 값들은 따로 메모리 주소에 저장되고
// 해당 값을 가리키는 변수들과 연결된다
// 따라서 1의 메모리 주소는 x와 y 변수와 연결되어 있다
// x => 1 <= y
// 그래서 === 비교로도 동일한 값이 뜬다
console.log(x === y); // true

// 하지만 객체들은 생성할 때마다 새로운 메모리 주소에 연결된다
// c => [], d => []
let m = [];
let n = [];
console.log(m === n); // false

// 객체가 아닌 값들을 원시값이라고 한다

// 참조와 복사
const student = {
    name: '김철수',
    age: 20
};

// 객체를 변수에 저장하면 참조(동일한 메모리 주소)하게 된다
const student2 = student;
// student => student1

// 서로 참조한 객체 중 하나의 값을 수정하면 나머지도 반영된다
// 여기에서는 나머지가 바뀐다는 표현보다는
// 서로 동일한 객체를 가리키고 있을 뿐이다
// (둘이 처음부터 똑같은 하나의 객체를 가리키고 있다)
student2.hobby = '컴퓨터';
console.log(student);
console.log(student2);
// { name: '김철수', age: 20, hobby: '컴퓨터' }

// 하지만 객체가 아닌 값을 가리키게 되면 변수가 아닌 메모리의 실제 값을 가르키게 된다
let student3 = student2;
console.log(student3 === student); // true
// student3 => student2 => student1
// student1 => '김철수', 20

student3 = '김철수';
console.log(student3 === '김철수'); // true
console.log(student3 === student.name); // true
// student.name => '김철수'
// student3 => '김철수'
// student.name은 원시값으로 '김철수'를 가리키고 있고,
// student3도 원시값으로 '김철수'를 가리키게 되어
// 서로 동일한 값이라고 판단한다


// 객체는 여러개가 중첩될 수 있다
// 물론 객체 안에 함수(메서드)나 배열도 들어갈 수 있다
const kimchulsoo = {
    name: {
        first: '철수',
        last: '김'
    }, 
    gender: 'M'
};

// 똑같이 .으로 계속 접근하면 된다
console.log(kimchulsoo.name.last);