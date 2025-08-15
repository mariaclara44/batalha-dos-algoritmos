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

console.log(`1️⃣CAPÍTULO I: Ao amanhecer antes de Íris entrar na caverna e cumprir sua missão com honra e coragem, ela percebe que ao abrir o portão terá que enfrentar uma fera poderosa e mortal da qual ninguém havia lutado antes, portanto será necesserário obter um escudo para ver se terá chances de enfrentar a criatura, além de verificar se sua armadura e arma estão bons.`);

// Para passar pela porta precisa verificar se possui um escudo

let podePassarPelaPorta = possuiEscudo;

if (possuiEscudo) {
    console.log(`A guerreira poderá passar pela porta? ${podePassarPelaPorta}.`);
    xp += 10
    console.log(`Com isso adquiriu ${xp} pontos de expêriencia.`);
    
}

// Verificação se posses (armadura e arma) 
let possuiArmaduraEArma = true;
if (possuiArmaduraEArma) {
    console.log(`A guerreira está segura e pronta para seguir: ${possuiArmaduraEArma}.`);
    
}

console.log(`2️⃣CAPÍTULO II: Após a permissão concebida para entrar e sua rápida escapada da armadilha Íris resolveu encontrar um lugar seguro para descansar, dessa forma podendo enfrentar a fera com as forças renovadas. Viu um canto que aparentava ser seguro e lá se deitou. No cair da noite do mesmo a guerreira se levantou, sentindo-se revigorada, então pós-se de pé e seguiu adiante disposta a cumprir o que havia sido destinada. Um silêncio mortal tomava conta da caverna, a guerreira andava em passos lentos e pensava o que será que a aguardava? `);

vidaAtual += 15 
console.log(`Totalizando ela ganhou ${vidaAtual} pontos de vida.`);

console.log(`Ao dar o seu primeiro passo, percebe que pisou em algo e ao virar-se rapidamente vê vários machados voando em sua direção.`);

// Verificação de defesa para a guerreira analisar as chances de desviar da armadilha
if (defesa >= 20) {
    console.log(`Ela conseguiu desviar e se salvar da armadilha.`); 
    defesa += 30 
    console.log(`Sua pontuação de defesa subiu para ${defesa}.`);
    
} else {
    console.log(`Ela foi atingida e perdeu 25 pontos de vida.`);
    defesa -= 15 
    console.log(`Sua pontuação baixou para ${defesa}.`);
    
}

// Vericação de combates vencidos para a guerreira analisar as chances de vitória

if (combatesVencidos >= 5) {
    console.log(`A ${classe} ${nome} pode ter chances de ganhar da criatura.`);
    xp += 10
    console.log(`Sua pontuação de xp será de  ${xp}.`);
    
} else {
    console.log(`Ela terá pequenas chances de vitória.`);
    
}

console.log(`3️⃣CAPÍTULO 3: Após várias análises, antes da batalha final, Íris tenta se concentrar, com suas forças renovadas, agora precisa renovar sua coragem, tentando se lembrar do seu objetivo ao encarar essa missão. Respirando fundo ela se concentra e com determinação decide que nada irá derrota-lá. De repente de um completo nada , ela escuta um barulho e quando vira se depara com uma figura mostruosa de 4 metros de altura, que possuia presas, uma cauda extensa, e com asas extremante longas e fortes, da qual precisará de sua força e agilidade chegar a vitória.`);

 if (agilidade >= 20 & forca >= 40 ) {
    console.log(`Ela conseguiu enfrentar a criatura com sucesso.`);
     agilidade += 10 
     forca += 20 
     nivel++
     console.log(`Sua agilidade subiu para ${agilidade} e força para ${forca}. Seu nível foi para ${nivel}`);
     
    
} else if (agilidade >=10 & forca >= 30) {
    console.log(`Obteve sucesso, porém ficou muito ferida`);
    agilidade += 10
    forca -= 20
    console.log(`Sua agilidade ficou com ${agilidade} pontos. E a força baixou para ${forca} pontos`);
    

 }  else {
    console.log(`Ela não conseguiu completar a missão, fracassando em sua missão, ao perder a batalha`);
    agilidade -= 10 
    forca -= 25
    console.log(`Sua forca ao final ficou ${forca} pontos. E a agilidade para ${agilidade}`);
    
 }

 // Resultado final - Epilógo
let batalhaVencida = true;
if (batalhaVencida) {
    console.log(`A personagem conseguiu trazer honra ao seu nome`);
    combatesVencidos++
    xp += 75
} else {
    console.log(`A personagem não conseguiu total sucesso em seu combate`);
    
}
 console.log(`EPILÓGO: Ao concluir sua batalha épica, Íris senta no chão e respira fundo e tenta se concentrar para sua próxima missão e está seria a missão final, estando em um lugar desconhecido estranho e sombriu, aguardando sua próxima aventura`);

 console.log(`🎉Fim do NÍVEL 2: Aguarde o próximo nível`);
 

// NÍVEL 3:
console.log(` -- CONTINUAÇÃO ÉPICA --`);

// === ELEMENTOS NOVOS PARA A HISTÓRIA ===

console.log(
  `PROLOGO: Sua nova Aliada Fada Luna, lhe disse a informação de que o guardião havia se instalado no castelo e que deveria ir até lá para poder encontra-ló e derrota-ló cumprindo assim sua missão. Apresentou informações como: Inventário, aliados (que teria nessa nova jornada), inimigos encontrados, salas do castelo (da qual ela devia adentrar) e tesouro coletado:`
);

let inventario = [
  "Cera Reconstrutora",
  "Lança da Tempestade",
  "Elmo do Destino ",
  "Poção de força",
];
let aliados = ["Mago Steve", "Cavalo Arco-Íris", "Elfo Dodo", "Fada Luna"];
let inimigosEncontrados = [
  "Guardião da caverna",
  "Dragão Marinho",
  "Guarda Cristovan",
];
let salasDoCastelo = [
  "Salão Aurora",
  "Jardim dos Sussurros",
  "Calabouço Alvorada ",
  "Biblioteca dos Esquecidos",
  "Sala do Trono",
  "Cozinha dos Segredos",
];
let tesouroColetado = [];


