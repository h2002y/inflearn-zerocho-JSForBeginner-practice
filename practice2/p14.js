// if, else, else if, switch
// if-else 문
// if문에서 else if나 else로 분기 처리가 가능하다
// 조건문은 위에서 아래로 실행된다
// => 위에 있는 조건부터 실행된다

let num = 1000;
if (num > 1000) { // num이 1000 보다 클 경우 실행
    console.log("Over than 1000");
} else if (num < 1000) { // num이 1000 보다 작을 경우 실행
    console.log("Less than 1000");
} else { // num이 1000보다 크지 않고 1000보다 작지 않을 (정확히 1000) 경우 실행
    console.log("Exactly 1000!");
}

// if-else문에서 if와 else는 한번만 사용 가능하고 else if는 원하는 만큼 가능하다
// if(조건식1) {
// } else if (조건식2) {
// } else if (조건식3) {
// } ... {
// } else if (조건식N) {
// } else { // 분기의 나머지 경우
// }


// 중첩 if문
// if문 안에서 if문을 다시 사용해도 된다
let num1 = 10, num2 = 20;
if (num1 === 10) { // true, 실행 o
    if (num2 === 30) { // false
        console.log("num1 is 10 and num2 is 30!"); // 실행 x
    } else {
        console.log("num1 is 10 and num2 is not 30!"); // 실행 o
    }
} else {
    console.log("num1 is not 10!"); // 실행 x
}

// 하지만 중첩 if문을 줄여서 사용하는 것이 더 가독성이 좋을 수 있다
if (num1 === 10 && num2 === 30) {
    console.log("num1 is 10 and num2 is 30!");
} else if (num1 === 10 && num2 !== 30) {
    console.log("num1 is 10 and num2 is not 30!");
} else {
    console.log("num1 is not 10!");
}


// switch문
// switch문은 좀 더 대입하기 편리하게 만든 if문이라고 볼 수 있다
// 하지만 switch문은 if문과는 달리 조건에 맞는 식을 타고 들어가면
// break를 만날 때까지 아래에 있는 조건들도 다 실행한다

// switch (조건식) {
// case 조건:
//      동작문
// }

let char = 'A';
switch(char) {
    case 'A':
        console.log("Char is A");
    case 'B':
        console.log("Char is B");
    case 'C':
        console.log("Char is C");
} // break가 없어서 전부 다 실행된다

switch(char) {
    case 'A':
        console.log("Char is A");
        break;
    case 'B':
        console.log("Char is B");
        break;
    case 'C':
        console.log("Char is C");
        break;
} // 처음에 타고 들어간 조건식의 동작만 실행한다

// switch문의 default
// 어떤 case 조건식도 만족하지 않을 때 default 동작을 수행한다
// else와 비슷하다
let char2 = '1';
switch(char2) {
    case 'A':
        console.log("Char2 is A");
        break;
    case 'B':
        console.log("Char2 is B");
        break;
    case 'C':
        console.log("Char2 is C");
        break;
    default:
        console.log("Char2 is not A B C!");
}