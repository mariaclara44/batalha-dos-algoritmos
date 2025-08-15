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


// === CAPÍTULO IV: ===
console.log(
  `4️⃣CAPÍTULO IV: A guerreira após a mensagem deixada pela fada Luna, se dirigiu para fora da caverna e seguiu um caminho de pedras que a levaram até uma floresta aparentemente bela, mas ao adentrar mais ao meio percebeu que era escura e sombria mas prosseguiu da mesma forma. Encontrou um enorme castelo, que era inabitado há anos. Então ela entrou e percebeu que estava em um Salão. `
);   

// Declaração e inicialização
let pocoesEncontradas = ["Elixir Carmesim do Coração Valente", "Poção do Manto Invisível", "Poção do Eco dos Antigos", "Aegis de Brumas", "Bálsamo da Lua Serena", "Tônico Carmesim"
];
let armadilhasAtiradas = []; // Array vazio que será preenchido mais a frente 

// Acesso e modificação de elementos
console.log(`⚗️ Primeira poção encontrada: ${pocoesEncontradas[0]}`);
console.log(`Total de poções mágicas:  ${pocoesEncontradas.length}`);

// Modificando elemento específico
inventario[0] = "Poção de batalha"; // Poção aprimorada!
console.log(`✨ ${nome} aprimorou uma poção!`);

//Métodos de array fundamentais
inventario.push(`Resina de Pedra`); // Adicionado ao final do array
console.log(`Nova poção na lista do inventário: ${inventario}`);


let pocaoRemovida = inventario.pop(); // Item tirado ao final do array
console.log(`🧪 Poção removida: ${pocaoRemovida}`);
console.log(`🗒️ Inventário atual: ${inventario}`);

// === CAPÍTULO V ===
console.log(`5️⃣CAPÍTULO V: Após entrar no Salão Aurora viu que era um lugar espaçoso, com muitos lustres e comodas com vasos e flores bonitas, decidiu que andaria pelo castelo para explorar os outros cômodos e tentar encontrar o guardião.`);

// Utilização do for (tradicional)
console.log(`🚩 Início da descoberta das salas do castelo ${salasDoCastelo.length}.`);

for (let i = 0; i < salasDoCastelo.length; i++) {
console.log(`Sala ${i + 1} : ${salasDoCastelo[i]} `);

if (i === 0) {
  console.log(`🗝️ ${nome} encontrou uma chave em cima de um balcão`);
    xp+= 30;
      console.log(`Agilidade atualizada: ${agilidade} `);
} else if (i === 1) {
  console.log(`🛡️Pulseira mágica que se transforma em um escudo quando necessário`);
    tesouroColetado.push(`🛡️Bracelete Eco blindado`);
      defesa += 30
      console.log(`Tesouro coletado durante o percurso foi ${tesouroColetado}. A ${classe} conquistou ${defesa} pontos de defesa`);
} else {
  console.log(`Uma pratileira cheia de pratos caiu sobre ${nome} `);
    agilidade -= 25;
    console.log(`Com isso ${nome} sua atual pontuação de agilidade é de ${agilidade}`);
    
}
}

// ==== CAPÍTULO VI ====
console.log(`Nesta fase da missão ela irá convidar seus aliados para a batalha final`);

// Usando for (tradicional), para mostrar os aliados
for (let i = 0; i < aliados.length; i++) {
let aliado = aliados[i]; 
console.log(`⚔️Aliados convocados: ${i + 1} : ${aliados} aceitaram o convite e irão comparecer a batalha`);

if (i === 0) { 
console.log(` O primeiro alido: ${aliado} duplica a força da equipe!`);
  forca * 2;
    console.log(`💪O total de pontos de força é de: ${forca}.`);    
} else if (i === 1) { 
console.log(`🪙O segundo aliado: ${aliado} aumentou a energia do grupo!`);
  manaMaxima += 20;
    console.log(` 🎆O total de pontos do mana é de: ${manaMaxima}`);
} else { 
console.log(`A terceira aliada: ${aliado} " melhorou a resistência da equipe!`);
  defesa += 30;
    console.log(`🛡️O total dos pontos de defesa é de: ${defesa}.`);
}
}

// ==== CAPÍTULO VI ====
console.log(`56️⃣CAPÍTULO VI: A ${classe} após recrutar seus aliados, coletar tesouros e poções, ela e sua equipe se preparam para lutar com o guardião da caverna que estava escondido no castelo.`);

// Usando arrays e for (tradicional)
let inimigosDeBatalha = ["Dragão Celestial", "Feiticeiro Scar", "Serpente Esmeralda"];
let danoRecebido = [];

console.log(`💀 ${nome} deverá lutar com ${inimigosDeBatalha.length} seus inimigos de batalha!`);

for (let i = 0; i < inimigosDeBatalha.length; i++) {
let inimigo = inimigosDeBatalha[i];
let dano = Math.floor(Math.random() * 15) + 25;

console.log(`🛞 Jogada: ${(i + 1)}  E está enfrentando: ${inimigo}`);
console.log(`🧨 A ${classe} sofreu um golpe que a arremesou para uma longa distância, que há fez ficar com ${dano} de dano!`);

danoRecebido.push(dano);

// Jogada com base no índice
if (i === 0) {
console.log(`💎 Exito: Bracelete Eco Blinadado!`);
  tesouroColetado.push("Metal precioso");
} else if (i === 1) {
console.log(`🌑Próxima jogada: O dragão cospe fogo, Íris tenta desviar e é atingida, porém se salva!`);
  vidaMaxima -= 25;
    console.log(`A pontuação de vida máxima após o golpe é de ${vidaMaxima}`);
} else {
  console.log(`Jogada final: O dragão é submerso por pedras! Glória conquistada!`);
forca += 90; 
xp += 70;
  console.log(`A pontuação da força após o exito consquitado é de ${forca} e de xp é de ${xp}`);
    tesouroColetado.push("Escama Dragônica");
}
}

let danoAtual = 0;
for (let i = 0; i < danoObtido.length; i++) {
danoAtual += danoObtido[i];
nivel++;
console.log(`Jogada: ${(i + 1)}. E o dano foi de: ${danoRecebido[i]}`);
}

console.log(`🧨 Dano atual: ${danoTotal}`);
console.log(`🪞 Tesouros coletados durante a missão: ${tesouroColetado.length}.`);

// ==== EPÍLOGO ====
console.log(`EPÍLOGO: Ao final da batalha, dos danos de tesouros e poções coletadas ${nome} finalmente encerra sua missão com orgulho, coragem e honra a sua jornada!`);

console.log(`Resultados posteriores a batalha final:`);
console.log(` Nível conquistado: ${nivel}`);
console.log(`Experiência: ${xp}`);
console.log(`Vida: ${vidaAtual} / ${vidaMaxima}`);
console.log(`Ouro: ${ouro}`);
console.log(`Lista inventário: ${inventario.length}`);
console.log(`Aliados: ${aliados.length}`);
console.log(`Tesouros coletados: ${tesouroColetado.length}`);


console.log(` A primeira missão chega ao fim...`);
console.log(`Depois de obter total sucessoe sua missão, a única que falatava era retornar a sua cidade natal, constando que a missão foi um sucesso, desse modo ela poderia ter o que lhe fora permitido, o prêmio prometido se conseguisse completar o que lhe foi destinado.`);
console.log(`Seus aliados ${aliados} queriam acompanha-lá para mostrar seu prestígio, assim que chegaram foram recebidos com uma grande comemoração, com músicas, danças, pratos grandiosos e etc...Dessa forma prosseguiu, no final da festa o mesmo que havia recitado a profecia destinada a ${classe}, levantou para dizer algumas palvras`);
console.log(`Após o discurso o general dirigiu a palavra para ${nome} e tirando o elmo da cabeça e a espada da cintura cedeu seu cargo a ela.`);
console.log(`AS ${classe} nem exitou e aceitou com emoção sua recompensa merecida. Aproveitou o momento para agradecer toda ajuda que teve durante a batalha e como forma de sua graditão convidou seu amigos (aliados) a se juntarem ao exercíto, dando a cada um cargos especiais e importantes. Sem demora todos aceitaram imediatamente o convite!`);
console.log(`Aquela tinha sido o melhor dia de todos, sentiu a calmaria pousando naquele espaço e por mais que sabia que era passageira e uma nova missão estava por vir, decidiu aproveitar o momento saborendo a paz que não estavam presentes antesem sua vida.`);

console.log(`🎉NÍVEL 3 ENCERRADO COM SUCESSO! Aguarde a próxima missão!`);