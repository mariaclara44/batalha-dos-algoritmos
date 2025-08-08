// 1. Principais variáveis

let nome = "Íris";
let classe = "Guerreira";
let nivel = 17;
let vida = 90;
let ouro = 50;
let xp = 70;

console.log(`Olá! Eu sou ${nome}, da classe ${classe}, estou no nivel ${nivel} com ${vida} pontos de vida. Possuo no meu inventário ${ouro} e meu número de xp é ${xp};`);

// 2. Constantes mágicas 

const NOME_ARMA = "Flecha Celestial";
let DANO_BASE = 100;
const NOME_ARMADURA = "Asas da Mensageira";
const DEFESA_BASE = 35;

console.log(`🏹Arma: ${NOME_ARMA}`);
console.log(`🧨Dano Base: ${DANO_BASE}`);
console.log(`✨Nome da Armadura: ${NOME_ARMADURA}`);
console.log(`Defesa Base: ${DEFESA_BASE}`);


// 3. Operadores de atribuição

xp += 150; // Ganhou 150 pontos de experiência;
ouro -= 30 // Comprou 30 moedas de ouro;
vida += 40 // Recuperou pontos de vida;
DANO_BASE *= 2 // Dano foi dobrado;

console.log(`📜Relatório Final da Jornada:`);
console.log(`🧙‍♀️Herói: ${nome}`);
console.log(`📈Nivel: ${nivel}`);
console.log(`🎇XP: ${xp}`);
console.log(`💰Ouro: ${ouro}`);
console.log(`💖Vida: ${vida}`);


// 4. Atributos Finais 

let ataqueTotal; 
let defesaTotal ;

ataqueTotal = nivel + DANO_BASE;
defesaTotal = DEFESA_BASE + (nivel / 2);

console.log(`O atributo final do ataque é: ${ataqueTotal}`);
console.log(`O atributo da defesa é: ${defesaTotal}`);


// 5.Operadores lógicos 

let vidaSuficiente = vida > 70;
let ataqueForte = ataqueTotal > 60;
let nivelAvancado = nivel >=10;
let podeEnfrentarGuardiao = vidaSuficiente && (ataqueForte || nivelAvancado);

// vidaSuficiente → vida > 70;

// ataqueForte → ataqueTotal > 60;
// nivelAvancado → nivel >= 10;
// podeEnfrentarGuardiao → vidaSuficiente && (ataqueForte || nivelAvancado);

console.log(`A heroina ${nome}, poderá enfrentar o guardião? ${podeEnfrentarGuardiao}`);


// 6. Geração da Lore do personagem

console.log(`📜LORE DA HEROINA: ${nome}`);
console.log(`Há 18 anos atrás nasceu uma ${classe} a quem foi dado o nome de ${nome}, pertencente ao reino de Elphírico, sua família vinha de uma longa linhagem de guerreiros na qual havia uma tradição, quando chegassem ao 18 anos recebiam uma profecia, que possuia desafios que deviariam ser cumpridos`);
console.log(`Quando chegou a maior idade, a heroina ouvia o destino da qual estava designada
    "Ao leste irá se dirigir. 
    Na caverna do guardião deve entrar. 
    O mesmo que tu deverá enfrentar. 
    Se o sucesso obtiver. 
    Terás o que fez por merecer".
     Assim ela fez.`);
console.log(`Ìris saiu com 70 xp, durante o caminho ganhou ${xp} pontos de experiência, possuia 50 moeda e ficou com ${ouro}, lutou se reeegueu e conquistou ${vida} pontos de vida no total, felismente durante um período sua arma foi encantada fazendo o seu dano ser de ${DANO_BASE}`);
console.log(`Ao chegar na caverna respondendo a pergunta e possuindo os itens necessários, foi concedida a permissão de entrada sabendo que tinha apenas o sonho que uma vida que carregava em seu coração`);


// NÍVEL 2 - Resgate do Nível 1

// === CONTINUAÇÃO DA SUA JORNADA DO NÍVEL 1 ===
// Resgate seus dados do personagem anterior e adicione:

// nomePersonagem = "Íris";
// classe = "Guerreira"; 
nivel = 17;
ouro = 20;
xp = 220;

// Dados que foram adicionados
let vidaAtual = 130;
let vidaMaxima = 200;
let manaAtual = 50;
let manaMaxima = 50;

// Novos atributos para batalha
let forca = 40;
let defesa = 30;
let agilidade = 40;
let combatesVencidos = 3;
let possuiEscudo = true

// Estado atual da história (continue de onde parou no Nível 1)
let localAtual = "Reino de Elphírico";
let missaoAtual = "Enfrentar Guardião";

//  Estrutura Narrativa Obrigatória

console.log(`💭Prólogo: A ${classe} ${nome} nascida em Elphírico, ao completar 18 anos, havia recebido uma profecia juntamente com uma missão que deveria ir até uma caverna da qual precisaria enfrentar seu guardião para consquistar um tributo, tendo apenas sua ${NOME_ARMA} e sua ${NOME_ARMADURA}. Mas ao chegar lá percebe que o lugar possiu muitas armadilhas e criaturas míticas e deverá derrotar todas para instaurar sua glória. `);
