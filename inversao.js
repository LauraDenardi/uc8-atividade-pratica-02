var num = 123
var unidade = num % 10
var centena = Math.trunc(num / 100)
var dezena = Math.trunc(num % 100 / 10)
var numInvertido = unidade * 100 + dezena * 10 + centena

//console.log(centena, dezena, unidade)
console.log(numInvertido)
