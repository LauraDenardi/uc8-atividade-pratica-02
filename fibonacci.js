//Sequencia de Fibonacci
//1, 1, 2, 3, 5, 8, 13

var x = 0
var y = 1
var fibo = x + y


console.log(fibo)
for (let i = 0; i < 7; i++) {
    console.log(fibo)
    x = y
    y = fibo
    fibo = x + y
}


// torre de Hanói | movimentos mínimos = 2^discos -1 