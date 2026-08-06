// ============================================
// EXERCICIOS DE JAVASCRIPT COM DOM
// Resolva cada exercicio seguindo as instrucoes
// ============================================ti


// ---------- Exercicio 1 ----------
// Ao clicar no botao, mude o texto do elemento #texto1
// para "Texto alterado com sucesso!"
document.getElementById("btn1").addEventListener("click", function (){
    document.getElementById("texto1").textContent = "Texto alterado com sucesso!"
})
// Dica: use document.getElementById() e .textContent



// ---------- Exercicio 2 ----------
// Ao clicar no botao, mude a cor do texto #texto2 para azul
document.getElementById("btn2").addEventListener("click", function () {
    document.getElementById("texto2").style.color = "blue"
})
// Dica: use .style.color = "blue"



// ---------- Exercicio 3 ----------
// Ao clicar no botao, esconda o elemento #texto3
document.getElementById("btn3").addEventListener("click", function () {
   document.getElementById("texto3").style.display = "none"
})
// Dica: use .style.display = "none"



// ---------- Exercicio 4 ----------
// Ao clicar no botao, adicione um novo <li> com o texto
// "Novo item" dentro da lista #lista4
//document.getElementById("bton4").addEventListener("click", function () {
   
///})
// Dica: use document.createElement() e .appendChild()



// ---------- Exercicio 5 ----------
// Ao clicar no botao, mude a cor de fundo da #caixa5
// para amarelo
//
// Dica: use .style.backgroundColor = "yellow"



// ---------- Exercicio 6 ----------
// Ao clicar no botao, aumente o numero do #contador6 em 1
//
// Dica: leia o valor atual com .textContent, converta para
// numero com Number() e some 1



// ---------- Exercicio 7 ----------
// Ao clicar no botao, pegue o valor digitado no #input7
// e mostre dentro do #resultado7
//
// Dica: use .value para pegar o texto do input



// ---------- Exercicio 8 ----------
// Ao clicar no botao, adicione a classe "destaque" ao #texto8
//
// Dica: use .classList.add("destaque")



// ---------- Exercicio 9 ----------
// Ao clicar no botao, remova o ultimo <li> da #lista9
//
// Dica: use .lastElementChild e .removeChild()



// ---------- Exercicio 10 ----------
// Ao clicar no botao, troque o src da #imagem10 para
// "https://placecats.com/300/200"
//
// Dica: use .src = "nova-url"

