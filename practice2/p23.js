// 배열의 메서드들 응용하기

const fruits = ['apple', 'banana', 'cherry', 'banana', 'mango', 'banana'];
console.log(fruits);

// banana 모두 제거하기
while (fruits.indexOf('banana') !== -1) {
    fruits.splice(fruits.indexOf('banana'), 1);
}
console.log(fruits);

// indexOf, lastIndexOf의 결과값이 0 인덱스가 나올 수 있다
// 하지만 이걸 그대로 if문 등의 조건식에 넣으면 false가 나와버린다
// 따라서 indexOf, lastIndexOf를 조건식에 활용할 때는
//  === -1 이나 > -1 조건식을 사용해야 한다