// ======================================
// UNIDADE 2 — AULA 3
// MÉTODOS DE ARRAYS EM JAVASCRIPT
// ======================================


// ======================================
// ARRAY BASE PARA OS EXEMPLOS
// ======================================

let numeros = [1, 2, 3, 4, 5];

console.log("Array inicial:", numeros);


// ======================================
// push() → ADICIONA ELEMENTOS AO FINAL
// ======================================

numeros.push(6, 7);
console.log("Após push():", numeros);


// ======================================
// pop() → REMOVE O ÚLTIMO ELEMENTO
// ======================================

numeros.pop();
console.log("Após pop():", numeros);


// ======================================
// unshift() → ADICIONA ELEMENTOS NO INÍCIO
// ======================================

numeros.unshift(0);
console.log("Após unshift():", numeros);


// ======================================
// shift() → REMOVE O PRIMEIRO ELEMENTO
// ======================================

numeros.shift();
console.log("Após shift():", numeros);


// ======================================
// length → TAMANHO DO ARRAY
// ======================================

// length não é um método, é uma propriedade
console.log("Tamanho do array:", numeros.length);


// ======================================
// splice() → REMOVE OU ALTERA ELEMENTOS
// ======================================

// Estrutura: array.splice(indice, quantidade)

// Remove 1 elemento a partir do índice 2
numeros.splice(2, 1);
console.log("Após splice():", numeros);


// ======================================
// slice() → COPIA PARTE DO ARRAY
// ======================================

// slice NÃO altera o array original
let copia = numeros.slice(0, 3);

console.log("Array original:", numeros);
console.log("Array copiado com slice():", copia);


// ======================================
// indexOf() → RETORNA O ÍNDICE DE UM ELEMENTO
// ======================================

let indice = numeros.indexOf(4);
console.log("Índice do número 4:", indice);

// Se o valor não existir, retorna -1
console.log("Índice do número 10:", numeros.indexOf(10));


// ======================================
// includes() → VERIFICA SE UM ELEMENTO EXISTE
// ======================================

console.log("Existe o número 3?", numeros.includes(3)); // true
console.log("Existe o número 10?", numeros.includes(10)); // false


// ======================================
// join() → TRANSFORMA ARRAY EM STRING
// ======================================

let texto = numeros.join(" - ");
console.log("Array em formato de texto:", texto);


// ======================================
// EXEMPLO PRÁTICO COM STRINGS
// ======================================

let pessoas = ["Carlos", "João", "Fabrício"];

// Adicionando uma pessoa
pessoas.push("Thomas");

// Removendo a primeira pessoa
pessoas.shift();

console.log("Lista de pessoas:", pessoas);

// Verificando se alguém está na lista
if (pessoas.includes("Thomas")) {
    console.log("Thomas está na lista");
} else {
    console.log("Thomas não está na lista");
}


// ======================================
// RESUMO DOS MÉTODOS UTILIZADOS
// ======================================

/*
push()     → adiciona elementos no final
pop()      → remove o último elemento
unshift()  → adiciona elementos no início
shift()    → remove o primeiro elemento
length     → retorna o tamanho do array
splice()   → remove ou altera elementos
slice()    → copia parte do array
indexOf()  → retorna o índice de um elemento
includes() → verifica se um elemento existe
join()     → transforma o array em string
*/
