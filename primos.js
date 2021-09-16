for (let i = 1; i <= 50; i++) {
    let qtdDivsores = 1
    for (let j = i; j > 1; j--) {
        if (i % j == 0) {
            qtdDivsores++
        }
    }
    if (qtdDivsores == 2) {
        console.log(i)
    }
}

/* ou, segundo for ++
for (let i = 1; i <= 50; i++) {
    let qtdDivsores = 1
    for (let j = 2; j <= i; j++) {
        if (i % j == 0) {
            qtdDivsores++
        }
    }
    if (qtdDivsores == 2) {
        console.log(i)
    }
}
*/