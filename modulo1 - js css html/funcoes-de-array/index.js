//Exercícios de interpretação de código


// Ex. 01
const usuarios = [
    { nome: "Amanda Rangel", apelido: "Mandi" },
    { nome: "Laís Petra", apelido: "Laura" },
    { nome: "Letícia Chijo", apelido: "Chijo" }
  ]
  
  const novoArrayA = usuarios.map((item, index, array) => {
     console.log(item, index, array)
  })


// a. resultado

// {
//     nome:"Amanda Rangel",
//     apelido:"Mandi"
//     }
//     0
//     (3) [{...},{...},{...}]{
//     nome:"Laís Petra",
//     apelido:"Laura"
//     }
//     1
//     (3) [{...},{...},{...}]{
//     nome:"Letícia Chijo",
//     apelido:"Chijo"
//     }
//     2
//     (3) [{...},{...},{...}]

__________________________________


// Ex. 02

const usuarios = [
  { nome: "Amanda Rangel", apelido: "Mandi" },
  { nome: "Laís Petra", apelido: "Laura" },
  { nome: "Letícia Chijo", apelido: "Chijo" },
]

const novoArrayB = usuarios.map((item, index, array) => {
   return item.nome
})

console.log(novoArrayB)


// a. resultado

//["Amanda Rangel","Laís Petra","Letícia Chijo"]

__________________________________


// Ex. 03
const usuarios = [
    { nome: "Amanda Rangel", apelido: "Mandi" },
    { nome: "Laís Petra", apelido: "Laura" },
    { nome: "Letícia Chijo", apelido: "Chijo" },
  ]
  
  const novoArrayC = usuarios.filter((item, index, array) => {
     return item.apelido !== "Chijo"
  })
  
  console.log(novoArrayC)


// a. resultado

// (2) [{...},{...}]


__________________________________

//Exercícios de escrita de código


// Ex. 01

// a.

const pets = [
    { nome: "Lupin", raca: "Salsicha"},
    { nome: "Polly", raca: "Lhasa Apso"},
    { nome: "Madame", raca: "Poodle"},
    { nome: "Quentinho", raca: "Salsicha"},
    { nome: "Fluffy", raca: "Poodle"},
    { nome: "Caramelo", raca: "Vira-lata"},
 ]

 const novoArrayB = pets.map((item, index, array) => {
    return item.nome

})
 console.log(novoArrayB)

//  a. resultado
//(6) [
//     "Lupin", 
//   "Polly",
//   "Madame",
//   "Quentinho", 
//   "Fluffy", 
//   "Caramelo"
//     ]

__________________________________
// b.

const pets = [
    { nome: "Lupin", raca: "Salsicha"},
    { nome: "Polly", raca: "Lhasa Apso"},
    { nome: "Madame", raca: "Poodle"},
    { nome: "Quentinho", raca: "Salsicha"},
    { nome: "Fluffy", raca: "Poodle"},
    { nome: "Caramelo", raca: "Vira-lata"},
 ]

 const novoArrayB = pets.filter((item, index, array) => {
    return item.raca === "Salsicha"
})
 console.log(novoArrayB)
 

//  b. resultado
// [
//     { nome: "Lupin", raca: "Salsicha"},
//     { nome: "Quentinho", raca: "Salsicha"}
// ]
 

__________________________________
// c.

const pets = [
    { nome: "Madame", raca: "Poodle"},
    { nome: "Fluffy", raca: "Poodle"},
    { nome: "Caramelo", raca: "Vira-lata"},
 ]

 const novoArrayB = pets.filter()map()(item, index, array) => {
    return item.raca === "Poodle"
})
 console.log(prompt("Você ganhou um cupom de desconto de 10% para tosar o/a" `${item.nome}`))

   
//  c. resultado
// [
//     "Você ganhou um cupom de desconto de 10% para tosar o/a Madame!"
//     "Você ganhou um cupom de desconto de 10% para tosar o/a Fluffy!"
//   ]