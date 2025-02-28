//definindo as variaveis
let numeroSecreto, 
    tentativas = 0,
    chute = 0,
    plural = 0,
    jaPassou = [],
    dificuldadeJogo = 100;

//função escreve na tela
function escreverTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

mensagemInicial();

function verificarChute() {
    console.log(numeroSecreto)
    let chute = document.querySelector('input').value;

    if (isNaN(chute) || chute < 1 || chute > dificuldadeJogo) {
        alert(`Digite um número entre 1 e ${dificuldadeJogo}`)
        return;
    }

    if (jaPassou.includes(chute)) {
        alert('Você já tentou esse número.')
        return;
    }

    tentativas++;
    jaPassou.push(chute);

    if (chute == numeroSecreto) {
        plural = tentativas !== 1 ? 'tentativas' : 'tentativa';
        escreverTela('h1', `PARABÉNS, Você acertou com ${tentativas} ${plural}.`);
        escreverTela('p', 'Clique em "Novo Jogo" para jogar novamente.');
        document.getElementById("reiniciar").removeAttribute('disabled');
    } else {
        escreverTela('h1', 'ERROU...');
        if (chute > numeroSecreto) {
            escreverTela('p', 'O número secreto é menor.');
        } else {
            escreverTela('p', 'O número secreto é maior.');
        }
        document.querySelector('input').value = '';
    }
}

function gerarNumero() {
    return parseInt(Math.random() * dificuldadeJogo) + 1;
}

function mensagemInicial() {
    numeroSecreto = gerarNumero();
    escreverTela('h1', 'Jogo do Secreto.');
    escreverTela('p', `Digite um número entre 1 e ${dificuldadeJogo}.`);
}

function novoJogo() {
    numeroSecreto = gerarNumero();
    tentativas = 0;
    jaPassou = [];
    document.querySelector('input').value = '';
    mensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true);
}