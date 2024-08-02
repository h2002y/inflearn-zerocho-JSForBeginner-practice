// 유구한 전통의 별찍기

for (let i = 0; i < 5; ++i) {
    console.log('*'.repeat(i + 1));
}

for (let i = 4; i >= 0; --i) {
    console.log('*'.repeat(i + 1));
}

for (let i = 1; i <= 10; ++i) {
    if (i % 2 == 0) continue;
    console.log('*'.repeat(i));
}

for (let i = 1; i <= 10; ++i) {
    if (i % 2 == 0) continue;
    console.log('*'.repeat(10 - i));
}

for (let i = 0; i < 5; ++i) {
    console.log(' '.repeat(i) + '*'.repeat(5 - i));
}

for (let i = 0; i < 5; ++i) {
    console.log(' '.repeat(4 - i) + '*'.repeat(i + 1))
}

console.log();

for (let i = 1; i <= 10; ++i) {
    if (i % 2 == 0) continue;
    console.log(' '.repeat((10 - i) / 2) + '*'.repeat(i) + ' '.repeat((10 - i) / 2));
}

console.log();

function printDiamond (cnt, curr) {
    if (cnt === curr) {
        console.log('*'.repeat(curr));
        return;
    }
    console.log(' '.repeat((cnt - curr) / 2) + '*'.repeat(curr) + ' '.repeat((cnt - curr) / 2));
    printDiamond(cnt, curr + 2);
    console.log(' '.repeat((cnt - curr) / 2) + '*'.repeat(curr) + ' '.repeat((cnt - curr) / 2));
};

printDiamond(5, 1);