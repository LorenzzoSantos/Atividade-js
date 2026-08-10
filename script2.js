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
const texto13 = document.getElementById("texto13");
const botao13 = document.getElementById("btn13");

botao13.addEventListener("click", function () {
    texto13.style.fontSize = "32px";
});
// Dica: use .style.fontSize = "32px"
// DÊ COMMIT



// ---------- Exercicio 14 ----------
// Ao clicar no botao, remova todos os itens da #lista14

const lista14 = document.getElementById("lista14");
const botao14 = document.getElementById("btn14");

botao14.addEventListener("click", function () {
    lista14.innerHTML = "";
});
// Dica: use .innerHTML = ""
// DÊ COMMIT CARA



// ---------- Exercicio 15 ----------
// Ao clicar no botao, pegue o valor do #input15 e
// adicione como novo <li> na #lista15

const input15 = document.getElementById("input15");
const lista15 = document.getElementById("lista15");
const botao15 = document.getElementById("btn15");

botao15.addEventListener("click", function () {
    const novoItem = document.createElement("li");
    novoItem.textContent = input15.value;
    lista15.appendChild(novoItem);
});
// Dica: use document.createElement("li"), .textContent
// e .appendChild()
// DÊ COMMIT



// ---------- Exercicio 16 ----------
// Ao clicar no botao, alterne a visibilidade do #texto16
// Se esta visivel (display != "none"), esconda.
// Se esta escondido (display == "none"), mostre.
const texto16 = document.getElementById("texto16");
const botao16 = document.getElementById("btn16");

botao16.addEventListener("click", function () {
    if (texto16.style.display === "none") {
        texto16.style.display = "block";
    } else {
        texto16.style.display = "none";
    }
});
// Dica: use um if/else com .style.display
// DÊ COMMIT



// ---------- Exercicio 17 ----------
// Ao clicar no botao, adicione uma borda "3px solid red"
// na #caixa17
const caixa17 = document.getElementById("caixa17");
const botao17 = document.getElementById("btn17");

botao17.addEventListener("click", function () {
    caixa17.style.border = "3px solid red";
}); 
// Dica: use .style.border = "3px solid red"
// DÊ COMMIT



// ---------- Exercicio 18 ----------
// Ao clicar no botao, copie o valor do #input18a
// para o #input18b

const input18a = document.getElementById("input18a");
const input18b = document.getElementById("input18b");
const botao18 = document.getElementById("btn18");

botao18.addEventListener("click", function () {
    input18b.value = input18a.value;
});
// Dica: use .value para ler e definir o texto dos inputs
// DÊ COMMIT



// ---------- Exercicio 19 ----------
// Ao clicar em #btn19mais, aumente o valor do #contador19 em 1
// Ao clicar em #btn19menos, diminua o valor do #contador19 em 1

const contador19 = document.getElementById("contador19");
const btn19mais = document.getElementById("btn19mais");
const btn19menos = document.getElementById("btn19menos");

btn19mais.addEventListener("click", function () {
    contador19.textContent = Number(contador19.textContent) + 1;
});

btn19menos.addEventListener("click", function () {
    contador19.textContent = Number(contador19.textContent) - 1;
});
// Dica: use Number() para converter o texto em numero
// DÊ COMMIT



// ---------- Exercicio 20 ----------
// Ao clicar no botao, pegue a cor selecionada no #corInput20
// e aplique como cor de fundo da #caixa20
const botao20 = document.getElementById("btn20")
botao20.addEventListener("click", function () {
    let Cor = document.getElementById("corInput20").value
    document.getElementById("caixa20").style.backgroundColor = Cor
})

// Dica: input type="color" tambem tem .value
// DÊ COMMIT