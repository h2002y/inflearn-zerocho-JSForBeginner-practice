// 중첩 반복문
// while문 안에 for문이나 while문을 넣을 수 있다
// for문 안에 for문이나 while문을 넣을 수 있다

// 개발자가 원하는 만큼 N번 중첩 반복문을 사용할 수 있지만
// 중첩 반복문을 많이 사용하는 것은 시간복잡도에 안좋은 영향을 주고 가독성도 떨어진다
// => 프로그램 실행 시간이 매우 오래 걸리거나 메모리가 터질 수 있으니 적당히 하자

// 이중 for문 예시
// 별찍기 프로그램
for (let i = 0; i < 5; ++i) {
    let string = '';
    // 현재 i의 크기만큼 * 출력
    for (let j = 0; j <= i; ++j) {
        string += '*';
    }
    console.log(string);
}

// 홀수만 계산한 구구단
for (let i = 1; i <= 10; ++i) {
    if (i % 2 === 0) continue;
    for (let j = 1; j <= 10; ++j) {
        if (j % 2 === 0) continue;
        console.log(i * j);
    }
}