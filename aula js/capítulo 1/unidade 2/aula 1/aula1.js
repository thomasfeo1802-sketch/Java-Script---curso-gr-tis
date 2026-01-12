// ======================================
// ESTRUTURAS DE REPETIÇÃO (LOOPS)
// ======================================


// ======================================
// LOOP WHILE
// ======================================

// O loop while executa o código ENQUANTO
// a condição for verdadeira

let contadorWhile = 0; // variável de controle

while (contadorWhile < 5) {
    console.log("While - contador:", contadorWhile);
    
    // Incremento obrigatório para evitar loop infinito
    contadorWhile++;
}


// ======================================
// LOOP DO...WHILE
// ======================================

// O loop do...while executa o código
// PELO MENOS UMA VEZ, mesmo que a condição seja falsa

let contadorDoWhile = 10; // variável de controle

do {
    console.log("Do...While - contador:", contadorDoWhile);
    
    // Incremento da variável
    contadorDoWhile++;
} while (contadorDoWhile < 5);


// ======================================
// LOOP FOR
// ======================================

// O loop for é ideal quando sabemos
// exatamente quantas vezes o código deve repetir

for (let i = 0; i < 5; i++) {
    console.log("For - repetição número:", i);
}


// ======================================
// EXEMPLO PRÁTICO COM LOOP
// ======================================

// Simulando a perda de vidas em um jogo

let vidas = 3;

while (vidas > 0) {
    console.log("Vidas restantes:", vidas);
    vidas--;
}

console.log("Game Over");


// ======================================
// COMPARAÇÃO VISUAL DOS LOOPS
// ======================================

// While → testa a condição antes de executar
// Do...While → executa pelo menos uma vez
// For → concentra controle, condição e incremento


// ======================================
// RESUMO DA AULA
// ======================================

/*
- Loops servem para repetir código automaticamente
- while → executa enquanto a condição for verdadeira
- do...while → executa pelo menos uma vez
- for → ideal quando o número de repetições é conhecido
- Sempre controle o incremento para evitar loops infinitos
*/
