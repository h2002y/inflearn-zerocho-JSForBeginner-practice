// 옵셔널 체이닝
const kimchulsoo = {
    name: {
        first: '철수',
        last: '김'
    }, 
    gender: 'M'
};

// 여러 속성이 중첩된 객체의 속성을 확인하는 과정에서
// 없는 속성 안의 속성을 참조하면 에러가 나게 된다
// (대충 중간 결과가 undefined인데 여기서 더 참조할 수 있는 속성이 없다)

// . 앞에 ?를 넣음으로써 해당 값이 존재하는지 먼저 체크할 수 있다
// 만약 해당 속성값이 존재하지 않는다면 에러 대신 undefined를 리턴한다

// console.log(kimchulsoo.hobby.first);
// TypeError: Cannot read properties of undefined (reading 'first') at Object.<anonymous>

console.log(kimchulsoo?.hobby?.first); // undefined

console.log(kimchulsoo?.name?.last); // 김

// 배열에도 적용할 수 있다
// 단 이때도 ?.를 같이 써줘야 한다 (둘이 세트다)
// kimchulsoo?.tmi?.[0]