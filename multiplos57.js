/*
for (let i=1; i<=50; i++){
    if (i%5==0){
        console.log(i)
    }
    if (i%7==0){
        console.log(i)
    }
}
//aparece o 35 2x
*/

for (let i = 1; i <= 50; i++) {
    if (i % 5 == 0 || i % 7 == 0) {
        console.log(i)
    }
}
