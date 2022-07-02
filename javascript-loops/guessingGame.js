let maximum = parseInt(prompt('Digite o numero maximo'));

while (!maximum) {
    maximum = parseInt(prompt('Digite o numero maximo'));
}

const numeroAlvo = Math.floor(Math.random() * maximum) + 1;
console.log(numeroAlvo);

let chute = parseInt(prompt("Digite seu primeiro chute!"));
let tentativas = 1;

while (parseInt(chute) !== numeroAlvo) {
    if (chute === 'q') break;
    tentativas++;
    if (chute > numeroAlvo) {
        chute = (prompt("Tá pra baixo! Digite um novo chute: "));
    } else {
        chute = (prompt("Tá pra cima! Digite um novo chute: "));
    }
}

if (chute === 'q') {
    console.log("VOCE DESISTIU! HAHHAAHA");
} else {
    console.log('VOCÊ VENCEU!');
    console.log(`Você precisou de ${tentativas} tentativa(s).`);
}

