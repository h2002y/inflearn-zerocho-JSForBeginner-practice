// undefined
// 값이 아직 정해지지 않은 값
let v;
console.log(v); // undefined

typeof undefined // undefined

Boolean(undefined); // false
!undefined // true;

undefined == false // false
undefined == 0 // false
undefined == '' // false


// null
// 값이 없는 값
// 개발자가 의도적으로 명시하는 값
null == undefined // true
null === undefined // false

typeof null // null이 나와야 하지만 object, 이는 자바스크립트의 버그며, 못 고친다...
// 따라서 null인지 비교하기 위해서는 === null 연산자를 사용해야 한다

Boolean(null) // false
!null // true

null == false // false
null == 0 // false
null == '' // false