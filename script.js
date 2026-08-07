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
document.getElementById("btn4").addEventListener("click", function () {
   const itemNovo = document.createElement("li")
   itemNovo.textContent = "Novo item"
   document.getElementById('lista4').appendChild(itemNovo)
})
// Dica: use document.createElement() e .appendChild()



// ---------- Exercicio 5 ----------
// Ao clicar no botao, mude a cor de fundo da #caixa5
// para amarelo
document.getElementById("btn5").addEventListener("click", function () {
    document.getElementById("caixa5").style.backgroundColor = "yellow"
})
// Dica: use .style.backgroundColor = "yellow"



// ---------- Exercicio 6 ----------
// Ao clicar no botao, aumente o numero do #contador6 em 1
document.getElementById("btn6").addEventListener("click", function () {
    let contador = document.getElementById('contador6')
    let contaAtual =  Number(contador.textContent)
    contador.textContent = contaAtual +1
})
// Dica: leia o valor atual com .textContent, converta para
// numero com Number() e some 1



// ---------- Exercicio 7 ----------
// Ao clicar no botao, pegue o valor digitado no #input7
// e mostre dentro do #resultado7
document.getElementById("btn7").addEventListener("click", function () {
    let Sla = document.getElementById("input7").value
    document.getElementById("resultado7").textContent = Sla
})
// Dica: use .value para pegar o texto do input



// ---------- Exercicio 8 ----------
// Ao clicar no botao, adicione a classe "destaque" ao #texto8
document.getElementById("btn8").addEventListener("click", function () {
    document.getElementById("texto8").classList.add("destaque")
})
// Dica: use .classList.add("destaque")



// ---------- Exercicio 9 ----------
// Ao clicar no botao, remova o ultimo <li> da #lista9
document.getElementById("btn9").addEventListener("click", function() {
    const removido = document.getElementById("lista9")
    const ultimo = removido.lastElementChild
    if(ultimo){
        removido.removeChild(ultimo)
    }
})
// Dica: use .lastElementChild e .removeChild()



// ---------- Exercicio 10 ----------
// Ao clicar no botao, troque o src da #imagem10 para
// "https://placecats.com/300/200"
document.getElementById("btn10").addEventListener("click", function() {
    document.getElementById("imagem10").src = "https://placecats.com/300/200"
})
// Dica: use .src = "nova-url"