// ======================================
// ARRAYS E MÉTODOS DE ARRAY
// ======================================


// ======================================
// CRIAÇÃO DE ARRAYS
// ======================================

// Array de textos (strings)
let comidas = ["arroz", "feijão", "macarrão"];

// Array com tipos de dados mistos
let dados = [10, "texto", true];

// Exibindo arrays no console
console.log(comidas);
console.log(dados);


// ======================================
// ÍNDICES DE ARRAYS
// ======================================


// Os índices começam em 0
// Cada posição do array possui um número (índice)

console.log(comidas[0]); // arroz
console.log(comidas[1]); // feijão
console.log(comidas[2]); // macarrão


// ======================================
// MODIFICANDO VALORES DE UM ARRAY
// ======================================

// Alterando o valor do índice 0
comidas[0] = "feijão";

console.log(comidas);
// Resultado: ["feijão", "feijão", "macarrão"]


// ======================================
// ADICIONANDO ELEMENTOS AO ARRAY
// ======================================

// Método push()
// Adiciona um ou mais elementos ao FINAL do array

let numeros = [0, 1, 2, 3, 4, 5];

numeros.push(6, 7);

console.log(numeros);
// Resultado: [0, 1, 2, 3, 4, 5, 6, 7]


// Também é possível adicionar pelo índice
numeros[8] = 8;

console.log(numeros);
// Atenção: pular índices pode gerar posições vazias


// ======================================
// REMOVENDO ELEMENTOS DE UM ARRAY
// ======================================

// Método splice()
// Remove ou altera elementos do array

// Estrutura: array.splice(indiceInicial, quantidade)

numeros.splice(0, 1); // remove o primeiro elemento

console.log(numeros);


// ======================================
// OUTROS MÉTODOS ÚTEIS DE ARRAY
// ======================================

// length → retorna o tamanho do array
console.log("Tamanho do array:", numeros.length);

// pop() → remove o último elemento do array
numeros.pop();
console.log(numeros);

// shift() → remove o primeiro elemento do array
numeros.shift();
console.log(numeros);

// unshift() → adiciona elementos no início do array
numeros.unshift(99);
console.log(numeros);


// ======================================
// EXIBINDO ARRAYS NO CONSOLE
// ======================================

// Exibindo o array completo
console.log(numeros);

// Exibindo apenas um índice específico
console.log(numeros[0]);


// ======================================
// EXEMPLO PRÁTICO COM ARRAY
// ======================================

// Lista de pessoas
let pessoas = ["Carlos", "João", "Fabrício", "Thomas", "Fulano", "Ciclano"];

// Exibindo alguns elementos específicos
console.log(pessoas[0]); // Carlos
console.log(pessoas[3]); // Thomas
console.log(pessoas[5]); // Ciclano


// ======================================
// RESUMO DA AULA
// ======================================

/*
- Arrays armazenam vários valores em uma única variável
- Índices começam em 0
- push() adiciona elementos ao final
- pop() remove o último elemento
- shift() remove o primeiro elemento
- unshift() adiciona elementos no início
- splice() remove ou altera elementos
- length retorna o tamanho do array
*/
