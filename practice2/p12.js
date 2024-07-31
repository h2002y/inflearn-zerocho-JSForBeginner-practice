// const
// 상수 = 변하지 않는 수

// const num; 상수는 선언만 X
// 상수는 변하지 않는 수이기 때문에 선언과 동시에 초기화가 필요하다
// 변할 필요가 없는 값을 let이나 var로 선언하면 값이 임의로 바뀔 가능성이 있다
// 이를 방지하기 위해 상수 선언인 const를 사용한다

const num = 5;
// num = 1; 변하지 않는 수이기 때문에 변수 값을 바꾸는 것도 불가능하다


// const 상수를 바꿀 수 있는 특수한 경우가 있다
// 상수인 배열에 값을 추가하는 것은 가능하다
const arr = [];
arr.push(5);
console.log(arr);

// 상수인 배열에 다른 배열을 할당하는 것은 불가능하다
const arr1 = [5];
const arr2 = [5, 5];
// arr1 = arr2; Assignment to constant variable 에러 발생

// 상수인 객체의 속성을 바꾸는 것도 가능하다
const student = {name: "Hello"};
student.name = "World!";
console.log(student);

// 배열과 마찬가지로 상수인 객체에 다른 객체를 할당하는 것도 불가능하다
student2 = {
    age: 18
};
// student = student2; Assignment to constant variable 에러 발생