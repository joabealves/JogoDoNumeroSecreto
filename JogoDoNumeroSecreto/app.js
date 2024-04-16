// let titulo = document.querySelector('h1');
// titulo.innerHTML = 'Jogo do número secreto';

// let paragrafo = document.querySelector('p');
// paragrafo.innerHTML = 'Escolha um número entre 1 e 10 !';
let listaDeNumerosSorteados = [];
let limiteNumber = 10;
let numeroSecreto = gerarNumeroAleatorio();
let tentativa = 1;


function exibirTextoSelectorTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto,'Brazilian Portuguese Female', {rate:1.2});
   
};
exibirMensagemInicial() ;

function exibirMensagemInicial() {
    
    exibirTextoSelectorTela('h1', 'Jogo do número secreto');
    exibirTextoSelectorTela('p', 'Escolha um número entre 1 e 10 !');
};



function verificarChute() {
    let chute = document.querySelector('input').value;

    if (chute == numeroSecreto) {
        let palavraTentativa = tentativa > 1 ? 'tentativas' : 'tentativa';
        exibirTextoSelectorTela('h1', 'Acertou !');
        exibirTextoSelectorTela('p', 'Parabéns !!!, você descobriu o número secreto com' + ' ' + tentativa + ' ' + ' ' + palavraTentativa + ' ' + ' :)');
        document.getElementById('reiniciar').removeAttribute('disabled');


    } else {
        if (chute > numeroSecreto) {
            exibirTextoSelectorTela('p', 'o número secreto é menor');
        } else {
            exibirTextoSelectorTela('p', 'o número secreto é maior');
        }
        tentativa++;
        limparCampo();
    }
    //  console.log(numeroSecreto == chute);

};


function gerarNumeroAleatorio() {

    let numeroEscolhido = parseInt(Math.random() * limiteNumber + 1);
    let qtdElementoNaLista = listaDeNumerosSorteados.length;
    if(qtdElementoNaLista == limiteNumber){
        listaDeNumerosSorteados = [];
    };

    if(listaDeNumerosSorteados.includes(numeroEscolhido)){

        return gerarNumeroAleatorio();

    }else{
        listaDeNumerosSorteados.push(numeroEscolhido);
        console.log(listaDeNumerosSorteados);
        return numeroEscolhido;
    }

};
function limparCampo() {
    chute = document.querySelector('input');
    chute.value = '';

};
function reiniciarJogo(){
    exibirMensagemInicial() ;
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativa = 1;
    document.getElementById('reiniciar').setAttribute('disabled',true);
   

};