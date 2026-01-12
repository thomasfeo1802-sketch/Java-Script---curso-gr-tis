// ================================
// Percorrendo Arrays com Loops
// ================================


// Criamos um array com alguns nomes
let alunos = ["Carlos", "João", "Maria", "Ana", "Thomas"];


// --------------------------------
// PERCORRENDO ARRAY COM FOR
// --------------------------------
// O loop for é o mais usado para percorrer arrays
// Ele trabalha diretamente com os índices

for (let i = 0; i < alunos.length; i++) {
    console.log("Aluno no índice " + i + ": " + alunos[i]);
}

// Explicação:
// i começa em 0 (primeiro índice)
// alunos.length retorna o tamanho do array
// alunos[i] acessa o valor na posição atual



// --------------------------------
// PERCORRENDO ARRAY COM WHILE
// --------------------------------
// O while é útil quando queremos mais controle da condição

let indice = 0;

while (indice < alunos.length) {
    console.log("Aluno (while): " + alunos[indice]);
    indice++; // IMPORTANTE: sem isso o loop vira infinito
}



// --------------------------------
// PERCORRENDO ARRAY COM DO WHILE
// --------------------------------
// O do while executa o código pelo menos uma vez

let contador = 0;

do {
    console.log("Aluno (do while): " + alunos[contador]);
    contador++;
} while (contador < alunos.length);



// --------------------------------
// PERCORRENDO ARRAY COM FOR...OF
// --------------------------------
// Forma mais simples e moderna de percorrer arrays
// Não trabalha com índices, apenas com os valores

for (let aluno of alunos) {
    console.log("Aluno (for...of): " + aluno);
}



// --------------------------------
// USANDO LOOP + CONDICIONAL
// --------------------------------
// Vamos verificar alunos com nome maior que 4 letras

for (let aluno of alunos) {
    if (aluno.length > 4) {
        console.log(aluno + " tem mais de 4 letras");
    }
}



// --------------------------------
// EXEMPLO PRÁTICO: SOMANDO VALORES
// --------------------------------

let notas = [7, 8, 5, 10, 6];
let soma = 0;

for (let nota of notas) {
    soma += nota; // soma = soma + nota
}

let media = soma / notas.length;

console.log("Soma das notas:", soma);
console.log("Média das notas:", media);



// --------------------------------
// EXEMPLO PRÁTICO: CONTANDO ITENS
// --------------------------------
// Vamos contar quantas notas são maiores ou iguais a 7

let aprovados = 0;

for (let nota of notas) {
    if (nota >= 7) {
        aprovados++;
    }
}

console.log("Quantidade de alunos aprovados:", aprovados);



// --------------------------------
// CONCLUSÃO
// --------------------------------
// Nesta aula você aprendeu a:
// - Percorrer arrays com for, while, do while e for...of
// - Usar loops junto com condicionais
// - Trabalhar com dados reais usando arrays
