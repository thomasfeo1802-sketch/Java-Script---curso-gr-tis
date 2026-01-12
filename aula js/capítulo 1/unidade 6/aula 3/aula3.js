// ================================
// UNIDADE 6 – AULA 3
// Seleção de elementos do DOM
// Código prático de exemplo
// ================================

// OBS:
// Este código pressupõe que já existam elementos no HTML.
// O HTML NÃO é o foco do curso, ele apenas permite o JavaScript rodar na web.
// Por isso se você executar esse código vai dar diversos erros no console.

// -------------------------------
// Selecionando elementos por ID
// -------------------------------

// Seleciona um único elemento pelo id
let titulo = document.getElementById("titulo");

// Exibe o elemento no console para verificar se foi encontrado
console.log("Elemento título:");
console.log(titulo);

// -------------------------------
// Selecionando elementos por classe
// -------------------------------

// Seleciona vários elementos que possuem a mesma classe
let itens = document.getElementsByClassName("item");

// Exibe a coleção inteira
console.log("Elementos com a classe 'item':");
console.log(itens);

// Percorrendo os elementos com um loop
for (let i = 0; i < itens.length; i++) {
    console.log("Item na posição", i, ":", itens[i]);
}

// -------------------------------
// Selecionando elementos por tag
// -------------------------------

// Seleciona todos os parágrafos da página
let paragrafos = document.getElementsByTagName("p");

console.log("Parágrafos encontrados:");
console.log(paragrafos);

// -------------------------------
// Seleção moderna com querySelector
// -------------------------------

// Seleciona o primeiro elemento que corresponder ao seletor
let botao = document.querySelector("#botao");

console.log("Botão selecionado com querySelector:");
console.log(botao);

// -------------------------------
// Selecionando vários elementos com querySelectorAll
// -------------------------------

// Retorna uma lista de elementos
let botoes = document.querySelectorAll(".botao");

console.log("Lista de botões:");
console.log(botoes);

// Percorrendo a lista de botões
botoes.forEach(function(elemento, indice) {
    console.log("Botão", indice, ":", elemento);
});

// -------------------------------
// Verificação de segurança
// -------------------------------

// Evita erros caso o elemento não exista
if (titulo !== null) {
    console.log("O título existe na página.");
} else {
    console.log("O título NÃO foi encontrado.");
}

// ================================
// Fim do código da Aula 3
// ================================
