// 배열 메서드

// 배열 마지막 요소 제거 .pop()
const fruits = ['apple', 'banana', 'orange', 'pear', 'apricot', 'cherry', 'kiwi', 'mango'];
console.log(fruits);
fruits.pop(); // mango 제거
console.log(fruits);

// 배열 첫 번째 요소 제거 .shift()
fruits.shift(); // apple 제거
console.log(fruits);

// 배열의 중간 요소 제거 .splice(지울 요소의 index, 지울 요소의 개수, 추가할 요소)
fruits.splice(1, 1); // orange 제거
fruits.splice(2, 2, 'coconut'); // apricot부터 체리까지 제거한 후 해당 위치에 coconut 추가
console.log(fruits)

// 배열의 중간에 요소 추가
fruits.splice(1, 0, 'grape');
console.log(fruits);

// 배열에서 요소(값) 찾기
// 단순히 값이 들어있는지 true false는 includes
// .includes(찾을 값)
console.log(fruits.includes('coconut')); // true
console.log(fruits.includes('apple')); // false

// 값의 인덱스까지 알아낼려면 indexOf 와 lastIndexOf
fruits.push('grape');
fruits.push('banana');
console.log(fruits);
// ['banana', 'grape', 'pear', 'coconut', 'kiwi', 'grape', 'banana']

// indexOf => 앞에서부터 탐색
console.log(fruits.indexOf('grape')); // 1 index

// lastIndexOf => 뒤에서부터 탐색
console.log(fruits.lastIndexOf('grape')); // 5 index

console.log(fruits.indexOf('grapefruit')); // 없으면 -1 출력
console.log(fruits.lastIndexOf('watermelon')); // 없으면 -1 출력

// 배열은 반복하기 위해서 주로 사용한다

// forEach를 이용한 반복
fruits.forEach((fruit) => console.log(fruit));

console.log();

// for문을 이용한 반복
for (let i = 0; i < fruits.length; ++i)
    console.log(fruits[i]);