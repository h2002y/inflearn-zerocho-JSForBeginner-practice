// 변수 네이밍
// 변수 이름은 중복될 수 없다
// let v; let v; => Uncaught SyntaxError 에러 발생

// 변수명은 어떤 데이터를 저장하고 있는지 유추할 수 있게 지어야 한다
let asdf = 10; // 어떤 데이터를 담고 있는지 알 수 없음
let num = 10; // num을 통해서 Number 타입인 데이터가 들어있음을 알 수 있음

// 변수명은 한글도 가능하다
let 안녕 = "안녕하세요";

// 변수명은 숫자로 시작할 수 없다
// let 1num = 10;

// 변수명에 특수 기호는 $와 _ 만 사용 가능하다
let $num = 10;
let max_score = 100;

// 변수명에 예약어(명령어)를 사용할 수 없다
// let let; => Uncaught SyntexError: let is disallowed as a lexically bound name 에러 발생, let은 예약어가 아니라서 에러도 다르게 뜬다
// let class; => Uncaught SyntexError: Unexpected token 'class' 에러 발생, class는 예약어다

// let은 ES6에서 추가되었기 때문에 에러 내용이 다르다
var let = 10; // 변수명이 let인 것은 잘 실행되지만
// let var = 10; // 변수명이 var인 것은 에러가 뜬다