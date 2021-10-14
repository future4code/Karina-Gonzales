//Exercícios de interpretação de código
___________________________________________________________
// Ex. 1)
const respostaDoUsuario = prompt("Digite o número que você quer testar")
const numero = Number(respostaDoUsuario)

if (numero % 2 === 0) {
  console.log("Passou no teste.")
} else {
  console.log("Não passou no teste.")
}

// resultado com valor 10: passou no teste

// a) Explique o que o código faz. Qual o teste que ele realiza?
// Ele testa o ususario e caso seja true, ou seja, a operação funcione, o usuario é aprovado, caso contrario ele vai para o else( que entendemos como SE NAO:, para como você nao passou no teste)

// b) Para que tipos de números ele imprime no console "Passou no teste"? 
// Numeros pares inteiros.

// c) Para que tipos de números a mensagem é "Não passou no teste"??
// Numeros impares inteiros e pares quebrados.

___________________________________________________________

// Ex. 2)


let fruta = prompt("Escolha uma fruta")
let preco
switch (fruta) {
  case "Laranja":
    preco = 3.5
    break;
  case "Maçã":
    preco = 2.25
    break;
  case "Uva":
    preco = 0.30
    break;
  case "Pêra":
    preco = 5.5
    break; // BREAK PARA O ITEM c.
  default:
    preco = 5
    break;
}
console.log("O preço da fruta ", fruta, " é ", "R$ ", preco)


// a) Para que serve o código acima?
// Para que o usuario escolha uma fruta e descubra o valor dela.

// b) Qual será a mensagem impressa no console, se o valor de fruta for `"Maçã"`?
//O preço da fruta maçã é R$ 5.

// c) Considere que um usuário queira comprar uma `Pêra`, qual seria a mensagem impressa no console se retirássemos o `break` que está logo acima do `default` (o `break` indicado pelo comentário "BREAK PARA O ITEM c.")?
//  O preço da fruta pera é R$ 5.

__________________________________________________________

// Ex. 3)

const numero = Number(prompt("Digite o primeiro número."))

if(numero > 0) {
  console.log("Esse número passou no teste")
	let mensagem = "Essa mensagem é secreta!!!"
}

console.log(mensagem)


// a) O que a primeira linha está fazendo?
// Declarando que o usuario deverá inserir um numero.

// b) Considere um usuário digitou o número 10. Qual será a mensagem do terminal? E se fosse o número -10?
// se for 10: Esse número passou no teste / error: Uncaught ReferenceError: mensagem is not defined 
// se for -10 error: Uncaught ReferenceError: mensagem is not defined 


// c) Haverá algum erro no console? Justifique usando os conceitos de bloco ou escopo.
// error: Uncaught ReferenceError: mensagem is not defined / erro: Referência não capturadaError: mensagem não definida 
// esta parte do codigo nao esta atrelada a nenhum escopo, pois a mensagem nao esta definida.
// let mensagem = "Essa mensagem é secreta!!!"
// }

// console.log(mensagem)

__________________________________________________________

//Exercícios de escrita de código
__________________________________________________________


// Ex. 1)

const idadeUsuario = Number(prompt("Qual a sua idade?"))

if(idadeUsuario >= 18) {
    console.log("Legal, você pode dirigir!")
} else {
    console.log("Infelizmente você não pode dirigir ainda!.")

}

// resultado:
//  18 ou mais - Legal, você pode dirigir!
//  17 - Infelizmente você não pode dirigir ainda!.

___________________________________________________________

// Ex. 2)

const turnoDeEstudo = prompt("Qual a horario do dia você estuda? Escreva M (matutino) ou V (Vespertino) ou N (Noturno).")

if(turnoDeEstudo === "M") {
    console.log("Bom dia!")
} else if (turnoDeEstudo === "V") {
    console.log("Boa tarde!")
} else if (turnoDeEstudo === "N") {
    console.log("Boa noite!")
} else {
    console.log("Insira um valor válido.")
  }


// resultado:
// N - Bom dia!
// V - Boa tarde!
// N - Boa noite!
// X - Insira um valor válido.

___________________________________________________________

// Ex. 3)

const turnoDeEstudo = prompt("Qual Periodo estuda?", "M", "V", "N")
const resp = turnoDeEstudo.toUpperCase()

switch (resp){
    case "M":
        console.log("Bom dia!");
        break;
    case "V":
        console.log("Boa tarde!");
        break;
    case 'N':
       console.log("Boa noite!");
        break;
        default:
       console.log("Insira um valor válido!")
      break
  }


// resultado:
// M - Bom dia!
// V -Boa tarde!
// N - Boa noite!
// X - Insira um valor válido!

___________________________________________________________

// Ex. 4)

// Considere a situação: você vai ao cinema com um amigo  
// porém ele/ela só assistirá a um filme com você se ele for do 
// gênero **fantasia** e se o ingresso está **abaixo de 15 reais.**

// Faça um código que pergunta ao usuário qual o gênero de filme 
// que vão assistir e outra pergunta sobre o preço do ingresso, 
// então verifique se seu amigo ou amiga vai topar assistir o filme. 
// Caso positivo, imprima no console a mensagem: "Bom filme!", 
// caso contrário, imprima "Escolha outro filme :("

let generoDoFilme = prompt("Qual genero do Filme você vai assistir?")
let precoDoFilme = prompt("Qual o valor do filme?")

if(generoDoFilme !== "fantasia") {
  console.log("Bom filme!")
} else { 

if (generoDoFilme <= "15") {
    console.log("Bom filme!");
} else  {
    console.log("Escolha outro genero de filme!")
  }
}


___________________________________________________________
