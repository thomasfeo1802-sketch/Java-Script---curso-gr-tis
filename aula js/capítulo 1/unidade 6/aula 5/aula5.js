// ================================
// UNIDADE 6 – AULA 5
// Eventos e interatividade
// Código prático de exemplo
// ================================

// OBS:
// O HTML apenas fornece os elementos.
// Todo o comportamento é controlado pelo JavaScript.

// -------------------------------
// Selecionando elementos
// -------------------------------

let botao = document.getElementById("botao");
let mensagem = document.getElementById("mensagem");
let contadorTexto = document.getElementById("contador");

// -------------------------------
// Estado do sistema
// -------------------------------

let sistemaLigado = false;
let contadorCliques = 0;

// -------------------------------
// Função que controla o sistema
// -------------------------------

function alternarSistema() {
    // Inverte o estado
    sistemaLigado = !sistemaLigado;

    if (sistemaLigado) {
        mensagem.innerText = "Sistema ligado";
        mensagem.style.color = "green";
    } else {
        mensagem.innerText = "Sistema desligado";
        mensagem.style.color = "red";
    }
}

// -------------------------------
// Função para contar cliques
// -------------------------------

function contarCliques() {
    contadorCliques++;
    contadorTexto.innerText = "Cliques: " + contadorCliques;
}

// -------------------------------
// Evento de clique
// -------------------------------

botao.addEventListener("click", function () {
    alternarSistema(); // muda o estado
    contarCliques();   // atualiza o contador
});

// -------------------------------
// Evento de teclado (exemplo extra)
// -------------------------------

document.addEventListener("keydown", function (event) {
    console.log("Tecla pressionada:", event.key);
});

// -------------------------------
// Mensagem inicial
// -------------------------------

mensagem.innerText = "Sistema desligado";
mensagem.style.color = "red";
contadorTexto.innerText = "Cliques: 0";

// ================================
// Fim do código da Aula 5
// ================================
