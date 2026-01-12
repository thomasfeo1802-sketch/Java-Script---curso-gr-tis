// =====================================================
// Unidade 3 - Arquivo: conversa.js
// Conteúdo:
// Programa 1 - Equação do Segundo Grau (Bhaskara)
// Programa 2 - Cardápio Digital (Simulação no Console)
// =====================================================



// =====================================================
// PROGRAMA 1
// Equação do Segundo Grau
// =====================================================

// Mensagem inicial
console.log("=================================");
console.log("Programa 1 - Equação do 2º Grau");
console.log("Que comecem os jogos!");
console.log("=================================");

// ---------------------------------
// Função que calcula as raízes
// ---------------------------------
function calcularEquacaoQuadratica(a, b, c) {

    // Calculando o delta (b² - 4ac)
    let delta = (b * b) - (4 * a * c);

    console.log("Delta:", delta);

    // Verificando se o delta é válido
    if (delta < 0) {
        console.log("A equação não possui raízes reais.");
        return; // encerra a função
    }

    // Calculando as raízes usando Bhaskara
    let raizA = (-b + Math.sqrt(delta)) / (2 * a);
    let raizB = (-b - Math.sqrt(delta)) / (2 * a);

    // Exibindo as raízes
    console.log("Raiz A:", raizA);
    console.log("Raiz B:", raizB);

    // Operações entre as raízes
    console.log("Soma das raízes:", raizA + raizB);
    console.log("Subtração A - B:", raizA - raizB);
    console.log("Subtração B - A:", raizB - raizA);
    console.log("Multiplicação das raízes:", raizA * raizB);

    // Divisão com verificação de zero
    if (raizB !== 0) {
        console.log("Divisão A / B:", raizA / raizB);
    } else {
        console.log("Divisão A / B não é possível (divisão por zero).");
    }

    if (raizA !== 0) {
        console.log("Divisão B / A:", raizB / raizA);
    } else {
        console.log("Divisão B / A não é possível (divisão por zero).");
    }
}

// ---------------------------------
// Chamada da função (exemplo)
// ---------------------------------
calcularEquacaoQuadratica(1, -5, 6);



// =====================================================
// PROGRAMA 2
// Cardápio Digital (Console)
// =====================================================

console.log("\n=================================");
console.log("Programa 2 - Cardápio Digital");
console.log("=================================");

// ---------------------------------
// Arrays do cardápio
// ---------------------------------

// Lista de comidas
let cardapio = [
    "Pizza",
    "Hambúrguer",
    "Lasanha",
    "Coxinha",
    "Pastel",
    "Hot Dog",
    "Pizza Doce",
    "Sushi",
    "Esfiha",
    "Batata Frita"
];

// Quantidade de pedidos para cada comida
let pedidos = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

// ---------------------------------
// Função para mostrar o cardápio
// ---------------------------------
function mostrarCardapio() {
    console.log("\nCardápio Atual:");

    for (let i = 0; i < cardapio.length; i++) {
        console.log(
            (i + 1) + " - " + cardapio[i] +
            " | Pedidos: " + pedidos[i]
        );
    }
}

// ---------------------------------
// Função pedirComida
// ---------------------------------
function pedirComida(nomeDaComida) {

    // Procura a comida no cardápio
    let indice = cardapio.indexOf(nomeDaComida);

    // Se a comida não existir
    if (indice === -1) {
        console.log("Essa comida não está disponível no cardápio.");
        return;
    }

    // Incrementa o número de pedidos
    pedidos[indice]++;

    console.log(
        "Pedido realizado:",
        nomeDaComida,
        "| Total de pedidos:",
        pedidos[indice]
    );

    // Se atingir 10 pedidos, remove do cardápio
    if (pedidos[indice] >= 10) {
        console.log(nomeDaComida + " saiu do cardápio!");

        // Remove a comida e o contador correspondente
        cardapio.splice(indice, 1);
        pedidos.splice(indice, 1);
    }
}

// ---------------------------------
// Simulação de pedidos
// ---------------------------------

mostrarCardapio();

// Simulando pedidos
pedirComida("Pizza");
pedirComida("Pizza");
pedirComida("Pizza");
pedirComida("Pizza");
pedirComida("Pizza");
pedirComida("Pizza");
pedirComida("Pizza");
pedirComida("Pizza");
pedirComida("Pizza");
pedirComida("Pizza"); // aqui a Pizza sai do cardápio

mostrarCardapio();

// Tentativa de pedir algo que saiu
pedirComida("Pizza");

// Pedido normal
pedirComida("Hambúrguer");
mostrarCardapio();
