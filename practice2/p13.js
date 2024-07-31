// if문 (조건문)
// if문은 조건식이 true일 때만 실행된다
// if문 끝에는 세미콜론을 붙이지 않아도 된다(붙여도 되는데 굳이 안함)

if (3 < 5) { // true
    console.log("3 < 5 is true!"); // 조건문이 true임으로 if문을 타서 console.log 실행
}

if (3 > 5) { // false
    console.log("3 > 5 is true!"); // 조건문이 false임으로 if문을 타지 않고 스킵
}

// {} 중괄호를 붙이지 않으면 띄어쓰기를 잘 해야한다
// if문 바로 밑에 있는 코드만 if문 안에 있는 코드로 처리된다
if (3 < 1)
    console.log("No "); // 여기까지만 if문이고, 실행되지 않는다
    console.log("Bracket!"); // if문에 포함되지 않아서 실행된다

// if (조건식) {
//      동작문;
//      동작문;
//      ...
// }

// 조건식에서 아래의 7가지만 무조건 false가 나온다
// '' "" ``
// 0
// false
// null
// undefined
// NaN
// document.all