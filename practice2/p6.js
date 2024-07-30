// bool 값
// bool값은 true와 false만 존재한다
true
false

// true와 false는 각각 1과 0으로도 대입 가능하다
1 // true
0 // false

// true와 false는 문자열이 아니기 때문에 따옴표로 감싸지 않는다
"true" // string
true // boolean

// boolean 값은 논리식의 결과값으로 사용할 수 있다
5 > 1 // true
5 < 1 // false
5 >= 5 // true
5 <= 1 // false

5 == 5 // true
5 === 5 // true
5 == '5' // true
5 === '5' // false
5 != 5 // false
5 !== '5' // false

NaN == NaN // false, NaN은 비교 연산에서 false를 출력한다
NaN != NaN // true
NaN <= NaN // false
NaN < NaN // false

true > false // true, true는 1 false는 0으로 변환되기 때문에 true가 나온다

'b' > 'a' // true, 문자열도 크기 비교가 가능한데 이때 문자의 아스키코드 번호를 사용한다
// a = 97 b = 98

'ad' > 'ab' // true
// 사전순으로 비교한다
// 같은 자리의 문자가 같다면 다음 문자를 비교한다

'a'.charCodeAt() // 97
'b'.charCodeAt() // 98

'1' < 5 // true, 문자열은 숫자로 형 변환한 후 비교한다
'abc' < 5 // false, abc를 숫자로 형 변환하면 NaN이고, NaN 비교 연산자는 != 빼고 무조건 다 false가 나온다

'0' < true // boolean 값도 숫자로 형 변환이 된다, true => 1, false => 0


// == 와 ===의 차이
// ==는 자료형을 고려하지 않는다
5 == 5 // true
5 == '5' // true, ==는 자료형이 달라도 5와 '5'는 같다는 결과를 도출한다

// ===는 자료형이 같은 지까지 고려한다
5 === 5 // true
5 === '5' // false, ===는 자료형이 달라서 5와 '5'는 다르다는 결과를 도출한다