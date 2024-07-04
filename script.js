var numberToFind = 0;
var attemps = 0;

function refresh () {
//gera um número aleatório
attemps = 0;
//zera a quantidade de tentativas

    numberToFind = parseInt(Math.random() * 100);

    console.log(numberToFind)
    //serve para vizualizarmos o numero gerado para testar se o codigo esta funcionando corretamente
}

function verifyNumber() {

    var bet = document.getElementById ('bet').value;
    
    if (bet > 100 || bet < 1)
    { 
        alert('Aposta Inválida :(')
        return;
    }

    if (bet > numberToFind)
    {
        attemps++;
        alert ('🚨 O NUMERO MISTERIOSO É MENOR');
    }
    else if (bet < numberToFind)
        {
            attemps++;
            alert ('🚨 O NUMERO MISTERIOSO É MAIOR');
        } 

        else {
            alert ('🎉 PARABÉNS, VOCÊ ACERTOU! VOCÊ FEZ '+attemps+' TENTATIVAS.');
            refresh();
            //para voltar a gerar um número aleatório sem precisar atualizar a página
        }

}

refresh();