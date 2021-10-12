// Leitura de cód.

//Ex. 01

const bool1 = true
const bool2 = false
const bool3 = !bool2

let resultado = bool1 && bool2
console.log("a.", resultado)

resultado = bool1 && bool2 && bool3 
console.log("b.", resultado) 

resultado = !resultado && (bool1 || bool2) 
console.log("c.", resultado)

console.log("d.", typeof resultado)

//a. false
//b. false
//c. true
//d. booleano

_________________________________________________________


//Ex. 02

//ele nao esta considerando number e sim string, 
// por isso junta os numeros e nao efetua a soma de fato.


_________________________________________________________


//Ex. 03

//para solucionar inserimos o number e assim efetivar a soma.

let primeiroNumero = prompt("Digite um numero!")
let segundoNumero = prompt("Digite outro numero!")

const soma = Number(primeiroNumero) + Number(segundoNumero)

console.log(soma)


_________________________________________________________


// Escrita de cód.

//Ex. 01

let idade = prompt("Qual sua idade?")
let idadeMelhorAmigx = prompt("Qual a idade do seu melhor amigo ou amiga?")
let comparacaoIdadeAmigx = idade >= idadeMelhorAmigx 

const subtracao = idade - idadeMelhorAmigx

console.log (comparacaoIdadeAmigx, subtracao)

// true, (30-15) = idade subtracao 15


________________________________________________________________


//Ex. 02

// a), b) 
const numberPar = prompt("Insira um numero par!")
const resultado = numberPar % 2
 
console.log (resultado)

// c) o padrão de respostas é sempre zero, visto a divisao por 2. 

// d) retorna somente o resto da dividao entre valores inteiros, sendo a divisao por 2, sempre resulta em resposta 1.
________________________________________________________________


//Ex. 03

let idade = prompt("Qual sua idade?")

console.log(idade * 12, "meses")
console.log(idade * 365, "dias")
console.log(idade * 24 * 60, "horas")


// resultado do consolet é o abixo (usei a idade 27 anos):
// 324meses
// 9855 dias
//38880 horas


________________________________________________________________


//Ex. 04

const numero1 = prompt("Escreva um numero!")
const numero2 = prompt("Escreva um segundo número!")


console.log (numero1 > numero2)
console.log (numero1 === numero2)
console.log (numero1 % numero2 === 0)
console.log (numero2 % numero1 === 0)

//Resultado:
//O primeiro numero é maior que segundo? false
//O primeiro numero é igual ao segundo? false
//O primeiro numero é divisível pelo segundo? true
//O segundo numero é divisível pelo primeiro? false


