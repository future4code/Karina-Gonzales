//Exercícios de interpretação de código

//Ex.01

let array
console.log('a. ', array)

array = null
console.log('b. ', array)

array = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
console.log('c. ', array.length)

let i = 0
console.log('d. ', array[i])

array[i+1] = 19
console.log('e. ', array)

const valor = array[i+6]
console.log('f. ', valor)

// resultado:
// a. undefined
// b. null
// c. 11
// d. 3
// e. [3,19,5,6,7,8,9,10,11,12,13]
// f. 9



___________________________________________________________


//Ex.02

const frase = prompt("Digite uma frase")

console.log(frase.toUpperCase().replaceAll("A", "I"), frase.length)

// resultado:
//"SUBI NUM ÔNIBUS EM MIRROCOS" 29

___________________________________________________________


//Exercícios de escrita de código

//Ex.01

const nomeDoUsuario = prompt("qual é seu nome?")
const emailDoUsuario = prompt("qual é seu e-mail?")

console.log (`O email ${emailDoUsuario} foi cadastrado com Sucesso. Seja bem-vindo(a) ${nomeDoUsuario}`)

// resultado:
//O email karina@karina.com foi cadastrado com Sucesso. Seja bem-vindo(a) Karina.

___________________________________________________________


//Ex.02

//a)
const cincoComidas = ["lasanha", "feijoada", "japonesa", "milanesa", "paunzin"]

//b)

console.log("Essas são as minhas 5 comidas Favoritas:")
console.log(cincoComidas[0]) 
console.log(cincoComidas[1])
console.log(cincoComidas[2])
console.log(cincoComidas[3])
console.log(cincoComidas[4])


//c)
const comidausuario = prompt("qual é a sua comida favorita?")
arrayi = 1
array[i] = comidausuario

console.log("Essas são as minhas 5 comidas Favoritas:")
console.log(cincoComidas[0]) 
console.log(cincoComidas[1])
console.log(cincoComidas[2])
console.log(cincoComidas[3])
console.log(cincoComidas[4])


//d) 
let cincoComidas = ["lasanha", "feijoada", "japonesa", "milanesa", "paunzin"]

let comidaUsuario = prompt("qual é a sua comida favorita?")
let array = 0
cincoComidas[array+1] = comidaUsuario

console.log(cincoComidas)
// resultado: (feijoada foi substituida por camarao)
//(5) [
    //"lasanha",
    //"camarão",
   //"japonesa",
    //"milanesa",
    //"paunzin"
    //]

    
___________________________________________________________


//Ex.03

//a)
let listaDeTarefas = []
//b)
let primeiraTarefa = prompt("qual a 1a tarefa do dia?")
let segundaTarefa = prompt("qual a 2a tarefa do dia?")
let terceiraTarefa = prompt("qual a 3a tarefa do dia?")


let array = listaDeTarefas.push(primeiraTarefa,segundaTarefa,terceiraTarefa)

//c)
console.log(listaDeTarefas)

//d)
const indice = prompt("qual a tarefa você já fez? 1, 2 ou 3?")
console.log("NumerodaOpcao:", indice)

const tarefaRealizada = listaDeTarefas[indice -1]
console.log("Tarefa Realizada:", tarefaRealizada)
//e)


array[i] = tarefaRealizada
console.log('e. ', array)


listaDeTarefas.splice(indice -1)


//f)
console.log(listaDeTarefas)

//resultado:
//(3) ["lavar", "secar", "dobrar"]
//NumerodaOpcao: 3 
//Tarefa Realizada: dobrar 
