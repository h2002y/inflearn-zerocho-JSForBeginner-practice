// 숫자
5
0.5
-5
// 큰 숫자
5e4 // 50000
5e-4 // 0.0005


// N진법

// 0b 2진법
0b101 // 5

// 0o 8진법
0o5 // 5

// 0x 16진법
0x5 // 5


// NaN = Not a Number
// NaN도 타입은 숫자다
// NaN은 어떤 연산을 해도 NaN이 나온다
NaN
NaN + 5 // NaN


// Number
// 문자열을 숫자로 바꿔준다(정수는 정수로, 소수는 소수로)
// parseInt, parseFloat와 차이점
// 숫자가 아닌 문자열이 존재할 경우 NaN로 판단해버린다
Number('555') // 555
Number('5일') // NaN
parseInt('5일') // 5
console.log('Number: ' + Number('5일'));
console.log('parseInt: ' + parseInt('5일'));

// parseInt
// 문자열을 정수로 바꿔준다
// 소수점 미만은 잘라버린다
// 두번째 인자로 N진법을 지정할 수 있다
// 두번째 인자는 십진법인 10이 기본으로 들어간다
parseInt('555'); // 555
parseInt('101', 2); // 5
console.log('parseInt with 2nd parameter: ' + parseInt('101', 2)); 

// parseFloat
// 문자열을 소수로 바꿔준다
parseFloat('55.5'); // 55.5
console.log(parseFloat('55.5'));

console.log('555' + 5); // 문자열 연산, 5555
console.log(parseInt(555) + 5); // 숫자 연산, 560
console.log(Number('555') + 5); // 숫자 연산, 560


// 연산자

// + 더하기
5 + 5 // 10
console.log('5 + 5 = ' + (5 + 5));

// - 빼기
10 - 5 // 5
console.log('10 - 5 = ' + (10 - 5));

// * 곱하기
5 * 5 // 25
console.log('5 * 5 = ' + (5 * 5));

// / 나누기
24 / 5 // 4.8
console.log('24 / 5 = ' + (24 / 5));

// % 나머지
24 % 5 // 4
console.log('24 % 5 = ' + (24 % 5));

// ** 제곱
5 ** 5 // 3125
console.log('5 ** 5 = ' + (5 ** 5));


// Infinity 무한
5 / 0 // Infinity
console.log('Infinity: 5 / 0 = ' + (5 / 0));

-5 / 0 // -Infinity
console.log('-Infinity: -5 / 0 = ' + (-5 / 0));

Infinity + 5 // Infinity
Infinity - 5 // Infinity
Infinity + Infinity // Infinity;
Infinity + -Infinity // NaN
Infinity - Infinity // NaN
0 / 0 // NaN


// 문자열과 숫자 더하기
// 문자열과 다른 자료형을 더하게 되면
// 다른 자료형이 문자열로 바뀐 후
// 문자열과 더해진다.
// => 형 변환(type casting)
// 숫자 => 문자열
'555' + 5 // 5가 문자열 '5'로 변환된 후 '555' + '5'가 수행된다
5 + '555'


// 문자열과 숫자 빼기
// 문자열에서 숫자를 뺄 때는 문자열이 숫자로 형 변환(Number())된 후 빼기가 수행된다
// 문자열 => 숫자

// 안녕하세요를 숫자로 형 변환하면 NaN이 되고 NaN - 5는 NaN이다
'안녕하세요' - 5
console.log('안녕하세요 - 5 = ' + ('안녕하세요' - 5));

// '555'를 숫자로 형 변환하면 555가 되고 555 - 5는 550이다
'555' - 5 // 550
console.log('\'555\' - 5 = ' + ('555' - 5))