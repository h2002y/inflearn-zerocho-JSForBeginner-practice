// 객체 => 배열, 함수, 객체

// Array (배열)
// 다양한 데이터를 하나로 묶어놓은 것
// 배열 안에 들어있는 것을 elements(요소)라고 한다
const fruits = ['apple', 'banana', 'kiwi', 'mango'];

// 배열 요소 접근 방법
// 배열의 요소는 0번부터 시작한다
// 이 요소의 순서를 index (인덱스)라고 한다
console.log(fruits[0]); // apple, index 0
console.log(fruits[2]); // kiwi, index 2

// 배열 안에는 아무거나 넣어도 된다
// 배열 안에 배열이나 객체가 들어갈 수 있다
// 배열 안의 요소는 중복될 수 있다
const string = "안녕하세요";
const arr = [[1, 2, 3], 4, 5, [6, 7], {num: 100}, string];
console.log(arr);
// [ [ 1, 2, 3 ], 4, 5, [ 6, 7 ], { num: 100 }, '안녕하세요' ]

// 배열 안에 아무것도 들어있지 않아도 된다
const arr2 = [];

// 배열의 요소 개수를 구하기 위해서는 .length 명령어를 사용한다
console.log(arr.length); // 6
console.log(arr2.length); // 0

// 배열에 null, undefined, 0, false, NaN가 들어있어도 요소에 포함된다
const arr3 = [null, undefined, 0, false, NaN];
console.log(arr3.length); // 5

// 배열의 마지막 요소에 접근하기 위해선 배열.length - 1 로 접근하면 편하다
console.log(fruits[fruits.length - 1]); // mango

// 배열에 마지막 요소의 다음 인덱스에 요소를 추가할 수 있다
fruits[fruits.length] = 'orange';

// 배열의 인덱스에 접근해서 요소를 수정할 수 있다
fruits[0] = 'apple2';
console.log(fruits);

// 배열의 맨 앞에 요소를 추가하려면 .unshift(앞에 추가할 요소) 를 사용한다
fruits.unshift('cherry');
console.log(fruits);

// 배열의 맨 뒤에 요소를 추가하려면 .push(넣을 요소) 를 사용한다
console.log(fruits);
fruits.push('pear');
fruits.push('leech');
console.log(fruits);

// const 객체는 초기화 다음 = 를 사용할 수 없다
// 대신 const 객체 내부의 값에는 사용할 수 있다