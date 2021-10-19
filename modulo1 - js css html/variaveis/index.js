


// //Exercicio 01


// let a = 10
// let b = 10

// console.log(b)

// b = 5
// console.log(a, b)

// // o resultado será:
// // 10
// // 10, 5 

// ______________________________________________


// let a = 10
// let b = 20
// let c = a
// c = a 
// b = c 
// a = b 

// console.log(a, b, c)
// // resultado é: 10 10 10 (obs. variavel let C nao estava declarada, declarei e resolveu).

// ______________________________________________



// let horasDia = prompt("Quantas horas você trabalha por dia?")
// let valorDia = prompt("Quanto você recebe por dia?")
// alert(`Voce recebe ${horasDia/valorDia} por hora`)


// ______________________________________________


// const meuNome = prompt("Qual seu nome?")
// let idade = prompt("Qual sua idade","")

// console.log(meuNome)
// console.log(idade)

// console.log(typeof meuNome)
// console.log(typeof (idade))

// alert(`Olá ${meuNome}, você tem ${idade} anos.`)

// // typeof declarou ambas como string, porque esta tendo interação com o usuario, pois é um prompt.


// ______________________________________________
// // Exercicio 02

// const duvida1 = "Você esta usando uma roupa azul hoje?"
// const duvida2 = "Você usa óculos?"
// const duvida3 = "Você é careca?"

// const resposta1 = prompt(duvida1);
// const resposta2 = prompt(duvida2);
// const resposta3 = prompt(duvida3);

// console.log(duvida1, "-", resposta1);
// console.log(duvida2, "-", resposta2);
// console.log(duvida3, "-", resposta3);



// ______________________________________________
// // Exercicio 03


// let a = 10
// let b = 25

// // Aqui faremos uma lógica para trocar os valores

// // Depois de trocados, teremos o seguinte resultado:
// console.log("O novo valor de a é", b) // O novo valor de a é 25
// console.log("O novo valor de b é", a) // O novo valor de b é 10

// //fim.



_________________________________________________________
//CALL BACK   


const verificaImpar = (numero) => {
    if(numero % 2 !== 0){
    imprimir()

    verificaImpar
    }
}


const imprimirMensagem = () => {
    console.log("sim é impar")
}

verificaImpar(2, imprimirMensagem)