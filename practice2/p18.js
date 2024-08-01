// break
// 반복문에서 멈출 때 사용한다
// 보통 for문 보단 while문에서 많이 사용한다
console.log("i start!");
let i = 0;
while(true) {
    console.log(i + 1);
    ++i;
    if (i >= 5) break; // i가 5 이상이라면 반복문 중지
}

// continue
// 반복문에서 스킵할 때 사용한다
console.log("j start!");
let j = 1;
while (j <= 10) {
    if (j % 2 == 1){ // j가 홀수이면 스킵
        ++j;
        continue;
    } 
    console.log(j);  // j가 짝수면 console 출력
    ++j;
}