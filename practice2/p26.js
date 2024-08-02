// 함수 parameter (매개변수)와 argument (인수)

// 함수를 선언할 때는 parameter
function a (parameter) {
    console.log(parameter);
}

// 함수를 호출할 때는 argument
a('argument');

// argument가 함수의 parameter로 들어간다
// 함수는 여러 개의 parameter와 argument를 가질 수 있다

// parameter와 argument의 개수는 일치하지 않아도 된다
// parameter에 비해 argument의 개수가 부족하면 들어오지 않은 값들은 undefined가 된다
// parameter에 비해 argument의 개수가 크면 
// 추가로 들어온 값들은 arguments에 들어가기만 할 뿐 사용되지 않는다

// 함수 안에는 arguments라는 특별한 값이 존재한다
// 이 값으로 어떤 데이터들이 parameter로 들어왔는지 확인할 수 있다
function b (a, b, c, d) {
    console.log(a, b, c, d);
    console.log(arguments);
}

b('hello', 'world', '안녕'); // hello world 안녕 undefined

function sum (a, b, c) {
    console.log(a + b + c);
    console.log(arguments);
}
sum (1, 2, 3); // 6
sum (1, 2); // NaN
sum (1); // NaN
sum (1, 2, 3, 4); // 6

// 화살표는 중괄호 안에 바로 리턴이 나오면 중괄호와 return이 생략 가능하다
// const multiply = (x, y, z) => { return x * y * z }
const multiply = (x, y, z) => x * y * z;
console.log(multiply(1, 2, 5)); // 10

// 함수 안에서도 변수를 선언할 수 있다
const minus = (a, b) => {
    let result = a - b;
    return result;
}
console.log(minus(5, 1));