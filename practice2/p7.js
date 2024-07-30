// 논리연산자
// && AND 연산자
// && 연산자는 왼쪽과 오른쪽 식 모두 true를 만족해야 true가 나온다
5 > 1 && 2 < 8 // true
// 5 > 1 true
// 2 < 8 true

// || 연산자
// || 연산자는 왼쪽과 오른쪽 식 중 하나라도 true를 만족하면 true가 나온다
5 > 1 && 2 > 8 // true
5 > 1 // true
2 > 8 // false, 하지만 이미 5 > 1에서 true가 나왔음으로 최종적으로 true가 된다

// ! 연산자
// true를 false로, false를 true로 바꿔준다
!true // false
!false // true

!!'a' // true
console.log(Boolean('a')); // 'a' 는 true
!'a' // true인 'a'에 !연산자를 사용하면 false
!!'a' // false인 !'a'에 !를 사용하면 다시 true
// true


// boolean으로 형 변환을 했을 때 false가 되는 7가지 타입
false // false
'', "", `` // false
0 // false
NaN // false
undefined // false
null // false
document.all // false

' ', " ", ` ` // true, 공백이 들어간 빈 문자열은 true다
1 // true