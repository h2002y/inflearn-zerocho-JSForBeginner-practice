// function (함수)
// 함수 = 일정한 동작을 수행하는 코드

// 반복되는 동작을 함수로 만들어놓으면
// 코드를 줄일 수 있다

// 함수는 값을 반환할 수 있다
// 물론 값을 반환하지 않을 수도 있다 (단순 출력 함수 등)
// => function a () {
//      return 10;
//   }
// return;의 기본 리턴값은 undefined다

// 함수에 return문이 실행될 경우
// return 문 아래에 있는 코드들은 동작하지 않는다
function ret () {
    return;
    console.log("ret function executed!"); // ret 함수가 호출되어도 실행되지 않는다
}
ret();

// function 이나 화살표 함수 () => {}를 사용한다
// 함수에도 이름이 필요하다
// 하지만 한번만 쓸거면 이름이 없어도 된다

// 이름 붙이는 3가지 방법
// 3가지 다 작동 방식이 다르다
function a() {} // 함수 선언문 방식
const b = function() {}; // 함수 표현식 방식
const c = () => {}; // 함수 표현식 중 화살표 함수

// 함수 선언문에는 세미콜론을 붙이지 않는다
// + if문, for문, while문

// 함수 선언
// 함수 선언과 호출은 별개다
// 함수 선언은 함수를 만들어놓은 상태다
function tmp() {}

// 함수 실행, 호출(call)
// console.log나 parseInt의 명령어도 다 함수다
// => console.log()
tmp();

function sum1 (a, b) {
    return a + b;
}

const sum2 = (a, b) => {
    return a + b;
}

console.log(sum1(5, 10));
console.log(sum2(5, 10));

// 함수의 리턴 값을 변수에 저장할 수도 있다
const result = sum1(1000, 1); // 1001
console.log(result); // 1001

// 리턴 값은 여러개로 할 수 없다
// const sum3 = (a, b) {
//     return a + 5, b + 5;
// } => X

//리턴 값을 여러개로 할려면 배열이나 객체로 전달해야 한다
const sum3 = (a, b) => {
    return [a + 5, b + 5];
}
console.log(sum3(1, 2)); // [ 6, 7 ]