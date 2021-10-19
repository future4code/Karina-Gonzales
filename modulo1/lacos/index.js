//Exercícios de interpretação de código

//For: laço de repeitcao que você ja sabe com antecedencia a quantidade de x que ele vai passar.
//While: laço de repeticao que só para quando a info. for false

// Ex.01

let valor = 0
for(let i = 0; i < 5; i++) {
  valor += i
}
console.log(valor)

//resultado =10. ele contabiliza a passagem de laços + a quantidade de i.

_______________________________________________


// Ex.02

const lista = [10, 11, 12, 15, 18, 19, 21, 23, 25, 27, 30]  //11posições
for (let numero of lista) {
  if (numero > 18) {
		console.log(numero)
	}
}

// a) resultado: ele vai imprimir no console 19, 21, 23, 25, 27, 30
// b) resultado: é suficiente, ele imprimiria as 11 posições do array.

_______________________________________________


// Ex.03

// resultado é:
// *
// **
// ***
// ****


_______________________________________________

// Exercícios de escrita de código

_______________________________________________


// Ex.01


const quantidadeBichinhos = Number(prompt("quantos bichinhos voce tem ?"))

  if (quantidadeBichinhos === 0) {
     console.log("poxa !! :( adote um !!")
  }
 const nomeDoBicho = []
 let i = 0
  for (i = 0; i < quantidadeBichinhos; i++) {
    nomeDoBicho.push(prompt("Digite o nome deles"))
  }
console.log(nomeDoBicho)

// resposta: (8) ["Ethan","Liz","Lola","Cindy","Capucho","Thor","Tutusquinha","Sky"]






// a) Se a quantidade for 0, imprima no console "Que pena! Você pode adotar um pet!"
//Coloque o seu prompt dentro de um loop. Esse loop deve ser executado a mesma quantidade de vezes que o usuário inseriu. Por exemplo: se o usuário tem 4 pets, ele deve conseguir inserir 4 nomes.

// b) Se a quantidade for maior que 0, solicite que o usuário digite os nomes deles, um por um, e guarde esses nomes em um array
    
//     Coloque o seu prompt dentro de um loop. Esse loop deve ser executado a mesma quantidade de vezes que o usuário inseriu. Por exemplo: se o usuário tem 4 pets, ele deve conseguir inserir 4 nomes.
    

// c) Por fim, imprima o array com os nomes dos bichinhos no console











// let i = 0

// while(i < 10){
//   console.log(i)

//    i++
// }

/////////////////////////////////////// EXEMPLO 2 ///////////////////////////////////////

// let coxinhasNoEstomago = 0

// while(coxinhasNoEstomago < 100){
//   console.log("Quero mais coxinha!!!!!")

//   coxinhasNoEstomago = coxinhasNoEstomago + 10

// }

/////////////////////////////////////// EXERCÍCIO 1 ///////////////////////////////////////

// let numero = Number(prompt("Digite um número"))
// let total = 0

// while (numero !== 0) {
//    total = total + numero
//    numero = Number(prompt("Digite outro número"))
// }

// console.log(total)

/////////////////////////////////////// EXEMPLO 3 ///////////////////////////////////////

for (
   let i = 0;
   i < 10;
   i += 4
) {

   console.log(i)
}

/////////////////////////////////////// EXEMPLO 4 ///////////////////////////////////////

// let total = 0

// for (
//    let i = Number(prompt("Digite um número"));
//    i !== 0; // 0 == "0"
//    i = Number(prompt("Digite um número"))
// ) {

//    total = total + i
// }

// console.log(total)

// i++ -> i = i + 1

/////////////////////////////////////// EXEMPLO 5 ///////////////////////////////////////

// const numeros = [ 14, 67, 89, 15, 23 ] 

// for( let i = 0; i < numeros.length; i++){
//   const numero = numeros[i]
//   console.log(numero)
// }

/////////////////////////////////////// EXERCÍCIO 2 ///////////////////////////////////////

// function buscarMaiorElemento(array){
//    let maior = array[0]

//    for( let i = 1; i < array.length; i++){
//       if(array[i] > maior){
//          maior = array[i]
//       }
//    }

//    return maior
// }

// const numeros = [ 14, 67, 89, 15, 23 ] 

// const maiorNumero = buscarMaiorElemento(numeros)

// console.log(maiorNumero)

/////////////////////////////////////// EXEMPLO 6 ///////////////////////////////////////

// const numeros = [ 14, 67, 89, 15, 23 ] 

// for( let numero of numeros){
//   console.log(numero)
// }

/////////////////////////////////////// EXEMPLO 7 ///////////////////////////////////////

// function buscarMaior(array){
//    let maior = array[0]

//    for( let numero of array){
//       if(numero > maior){
//          maior = numero
//       }
//    }

//    return maior
// }

/////////////////////////////////////// EXERCÍCIO 3 ///////////////////////////////////////

// const palavras = ["Oi", "sumido", "tudo", "bom?", "Saudades"]

// function imprimirMensagem(array){
//   let mensagem = ""
  
//   for(let palavra of array){
//     mensagem += " " + palavra
    
//   }
  
//   mensagem.trim()
//   console.log(mensagem)
// }

// imprimirMensagem(palavras)