let firstNumber = prompt ("Digite o primeiro número: ")
let secondNumber = prompt ("Digite o segundo número: ")

firstNumber = Number(firstNumber)
secondNumber = Number(secondNumber)

const sum = firstNumber + secondNumber
const sub = firstNumber - secondNumber
const multi = firstNumber * secondNumber
const div = firstNumber / secondNumber
const restDiv = firstNumber % secondNumber

alert("A soma entre os dois números é: " + sum)
alert("A subtração entre os dois números é: " + sub)
alert("A multiplicação entre os dois números é: " + multi)
alert("A divisão entre os dois números é: " + div)
alert("O resto da divisão entre os dois números é: " + restDiv) 