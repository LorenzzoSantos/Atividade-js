// ============================================
// EXERCICIOS DE JAVASCRIPT COM DOM - PARTE 2
// Resolva cada exercicio seguindo as instrucoes
// ============================================


// ---------- Exercicio 11 ----------
// Ao clicar no botao #btn11, desabilite-o

const botao = document.getElementById("btn11");
botao.addEventListener("click", function () {
    botao.style.backgroundColor = "gray";
    botao.disabled = true;
})
// Dica: use .disabled = true 
// DÊ COMMIT



// ---------- Exercicio 12 ----------
// Ao clicar no botao #btn12, troque o texto dele
// de "Curtir" para "Curtido!"
const botao12 = document.getElementById("btn12")
botao12.addEventListener("click", function () {
    botao12.textContent = "Curtido!"
})
// Dica: use .textContent no proprio botao
// DÊ COMMIT



// ---------- Exercicio 13 ----------
// Ao clicar no botao, mude o tamanho da fonte do
// #texto13 para "32px"
//
// Dica: use .style.fontSize = "32px"
// DÊ COMMIT



// ---------- Exercicio 14 ----------
// Ao clicar no botao, remova todos os itens da #lista14
//
// Dica: use .innerHTML = ""
// DÊ COMMIT



// ---------- Exercicio 15 ----------
// Ao clicar no botao, pegue o valor do #input15 e
// adicione como novo <li> na #lista15
//
// Dica: use document.createElement("li"), .textContent
// e .appendChild()
// DÊ COMMIT



// ---------- Exercicio 16 ----------
// Ao clicar no botao, alterne a visibilidade do #texto16
// Se esta visivel (display != "none"), esconda.
// Se esta escondido (display == "none"), mostre.
//
// Dica: use um if/else com .style.display
// DÊ COMMIT



// ---------- Exercicio 17 ----------
// Ao clicar no botao, adicione uma borda "3px solid red"
// na #caixa17
//
// Dica: use .style.border = "3px solid red"
// DÊ COMMIT



// ---------- Exercicio 18 ----------
// Ao clicar no botao, copie o valor do #input18a
// para o #input18b
//
// Dica: use .value para ler e definir o texto dos inputs
// DÊ COMMIT



// ---------- Exercicio 19 ----------
// Ao clicar em #btn19mais, aumente o valor do #contador19 em 1
// Ao clicar em #btn19menos, diminua o valor do #contador19 em 1
//
// Dica: use Number() para converter o texto em numero
// DÊ COMMIT



// ---------- Exercicio 20 ----------
// Ao clicar no botao, pegue a cor selecionada no #corInput20
// e aplique como cor de fundo da #caixa20
//
// Dica: input type="color" tambem tem .value
// DÊ COMMIT