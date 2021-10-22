<!-- Enunciado
Uma revendedora de carros usados paga a seus vendedores um salário fixo de R$2000,00 por mês. Os vendedores recebem uma comissão para cada carro vendido, no valor de R$100 + 5% do valor do carro.

Crie uma função que leia o número de carros vendidos por uma pessoa (qtdeCarrosVendidos, um número inteiro) e o valor total de suas vendas do mês (valorTotalVendas, também um número, correspondente ao valor total recebido por todas as vendas efetuadas).

Retorne o salário final do mês do funcionário com base nesses valores. -->

function calculaSalario(qtdeCarrosVendidos, valorTotalVendas) {
  const salarioFixo = 2000
  const comissao1 = (100 * qtdeCarrosVendidos)
  const comissao2 = (valorTotalVendas * 0.05)
  return salarioFixo + comissao1 + comissao2
}


__________________________________________________
Enunciado
As maçãs custam R$ 1,30 cada se forem compradas menos de uma dúzia e R$ 1,00 se forem compradas pelo menos 12.

Escreva uma função receba o número de maçãs compradas, calcule e retorne o custo total da compra.

Escreva sua função abaixo


function calculaPrecoTotal(quantidade) {
  // Escreva seu código aqui
const maca = 7 
if (maca < 12){
return (maca * 1.30)
}else {
return (maca * 1.00)
    }
  }
console.log(calculaPrecoTotal())