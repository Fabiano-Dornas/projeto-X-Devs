/*
Objetivo 1 - quando clicamos na seta de avamçar temos que mostrar o próximo cartão da lista
-passo 1 - dar um jeito de pegar o elemento HTML da seta avançar
-passo 2 - dar um jeito de identificar o clique do usuário na seta avançar
-passo 3 - fazer aparecer o primeiro cartão da lista
-passo 4 - buscar o cartão que está selecionado e esconder

Objetivo 2 - quando clicarmos na seta de voltar temos que mostrar o cartão anterior da lista
-passo 1 - dar um jeito de pegar o elemento HTML da seta voltar
-passo 2 - dar um jeito de identificar o clique do usuário na seta voltar
-passo 3 - fazer aparecer o cartão anterior da lista
-passo 4 - buscar o cartão que está selecionado e esconder */

const btnAvancar = document.getElementById("btn-avancar");
const btnVoltar = document.getElementById("btn-voltar");
let cartaoAtual = 0;
const cartoes = document.querySelectorAll(".cartao");

btnAvancar.addEventListener("click", function (){
    if (cartaoAtual === cartoes.length - 1) return;


    escondercartaoSelecionado();


   cartaoAtual++;
   mostrarCartao();

});



btnVoltar.addEventListener("click", function (){

    if(cartaoAtual === 0) return;
  
    const cartaoSelecionado = document.querySelector(".selecionado");
    cartaoSelecionado.classList.remove("selecionado");


   cartaoAtual--;
   mostrarCartao();

});
function mostrarCartao() {
    cartoes[cartaoAtual].classList.add("selecionado");
}

function mostrarCartao() {
    cartoes[cartaoAtual].classList.add("selecionado");
}

function escondercartaoSelecionado() {
    const cartaoSelecionado = document.querySelector(".selecionado");
    cartaoSelecionado.classList.remove("selecionado");
}

