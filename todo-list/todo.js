let acao = prompt('O que você gostaria de fazer?');
const itens = ['Acordar', 'Trabalho'];

while (acao !== 'sair' && acao !== 'q') {
    if (acao === 'lista') {
        console.log('***************');
        for (let i = 0; i < itens.length; i++) {
            console.log(`${i}: ${itens[i]}`);
        }
        console.log('***************');
    } else if (acao === 'novo') {
        const novoItem = prompt('Qual item você deseja adicionar?');
        itens.push(novoItem);
        console.log(`${novoItem} adicionado à lista`);
    } else if (acao === 'delete') {
        const indice = parseInt(prompt('Ok, digite o índice do item que deseja apagar:'));
        if (!Number.isNaN(indice) && indice < itens.length) {
            const deletado = itens.splice(indice, 1);
            console.log(`Item ${deletado[0]} removido!`)
        } else {
            console.log('Índice desconhecido');
        }
    }
    acao = prompt('O que você gostaria de fazer?');
}

console.log('Você saiu!');