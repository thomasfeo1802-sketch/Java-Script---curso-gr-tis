// ======================================
// CONSTANTES
// ======================================

// Constantes são valores FIXOS
// Após serem declaradas, NÃO podem ser alteradas

const PI = 3.14159;          // Valor fixo de PI
const MAX_VIDAS = 3;         // Quantidade máxima de vidas do jogador
const NOME_JOGO = "Aula JS"; // Nome fixo do jogo

// Exibindo constantes no console
console.log("PI:", PI);
console.log("Máximo de vidas:", MAX_VIDAS);
console.log("Nome do jogo:", NOME_JOGO);

// Tentar alterar uma constante gera erro
// PI = 3.14; // ERRO: Assignment to constant variable


// ======================================
// FUNÇÕES SEM PARÂMETROS
// ======================================

// Função simples que executa uma ação
function mostrarBoasVindas() {
    console.log("Bem-vindo ao curso de JavaScript!");
}

// A função só executa quando é chamada
mostrarBoasVindas();


// ======================================
// FUNÇÕES COM PARÂMETROS
// ======================================

// Parâmetros são valores recebidos pela função
function mostrarNome(nome) {
    console.log("Olá,", nome);
}

// Chamando a função e passando um valor
mostrarNome("Carlinhos");


// ======================================
// FUNÇÕES COM RETORNO
// ======================================

// Função que recebe dois números e retorna a soma
function somar(a, b) {
    return a + b; // return devolve um valor para quem chamou a função
}

// Guardando o retorno da função em uma variável
let resultado = somar(5, 3);
console.log("Resultado da soma:", resultado);


// ======================================
// FUNÇÃO COM LÓGICA E CONDIÇÃO
// ======================================

// Função que verifica se o jogador ainda está vivo
function verificarVida(vidaAtual) {
    if (vidaAtual > 0) {
        return true;  // jogador vivo
    } else {
        return false; // jogador morto
    }
}

// Usando a função
let vidaJogador = 10;

if (verificarVida(vidaJogador)) {
    console.log("O jogador está vivo");
} else {
    console.log("O jogador está morto");
}


// ======================================
// FUNÇÃO USANDO CONSTANTES
// ======================================

// Função que perde uma vida, respeitando o limite mínimo
function perderVida(vidasAtuais) {
    if (vidasAtuais > 0) {
        vidasAtuais -= 1;
    }
    return vidasAtuais;
}

// Testando a função
let vidas = MAX_VIDAS;

vidas = perderVida(vidas);
console.log("Vidas restantes:", vidas);


// ======================================
// RESUMO
// ======================================

/*
- const → usado para valores fixos
- function → cria blocos reutilizáveis de código
- Funções podem:
  - Não receber parâmetros
  - Receber parâmetros
  - Retornar valores
- return encerra a função e devolve um valor
*/
