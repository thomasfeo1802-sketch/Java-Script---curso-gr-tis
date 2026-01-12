// ================================
// UNIDADE 6 – AULA 4
// Manipulação de elementos do DOM
// Código prático de exemplo
// ================================

// OBS:
// Este código considera que os elementos já existem no HTML.
// O foco é exclusivamente o JavaScript.

// -------------------------------
// Selecionando elementos
// -------------------------------

let titulo = document.getElementById("titulo");
let mensagem = document.getElementById("mensagem");
let caixaTexto = document.getElementById("entrada");

// -------------------------------
// Manipulando texto
// -------------------------------

// Alterando o texto visível do elemento
titulo.innerText = "JavaScript controlando a página";

// Alterando conteúdo interno (com HTML)
mensagem.innerHTML = "<strong>Sistema iniciado com sucesso</strong>";

// -------------------------------
// Manipulando valores
// -------------------------------

// Alterando o valor de um campo de entrada
if (caixaTexto !== null) {
    caixaTexto.value = "Valor definido pelo JavaScript";
}

// -------------------------------
// Manipulando estilos
// -------------------------------

// Alterando cor e fundo
titulo.style.color = "blue";
mensagem.style.color = "green";
mensagem.style.backgroundColor = "#e0ffe0";

// Alterando tamanho do texto
titulo.style.fontSize = "24px";

// -------------------------------
// Mostrar e esconder elementos
// -------------------------------

// Escondendo o elemento
mensagem.style.display = "none";

// Simulando uma mudança de estado
let sistemaAtivo = true;

if (sistemaAtivo) {
    mensagem.style.display = "block";
    mensagem.innerText = "Sistema ativo";
    mensagem.style.color = "green";
} else {
    mensagem.style.display = "block";
    mensagem.innerText = "Sistema inativo";
    mensagem.style.color = "red";
}

// -------------------------------
// Manipulando atributos
// -------------------------------

// Adicionando atributo
titulo.setAttribute("title", "Título controlado via JavaScript");

// Removendo atributo (se existir)
if (caixaTexto !== null) {
    caixaTexto.removeAttribute("disabled");
}

// -------------------------------
// Testes no console
// -------------------------------

console.log("Título atual:", titulo.innerText);
console.log("Mensagem visível:", mensagem.style.display);

// ================================
// Fim do código da Aula 4
// ================================
