let nCartas = 0;
let cartasSelecionadas = 0;
let listaImagens = [];
let njogadas;
let contador;
let idContador;
const imgs = ["bobrossparrot.gif","explodyparrot.gif","fiestaparrot.gif","metalparrot.gif","revertitparrot.gif","tripletsparrot.gif","unicornparrot.gif"];
jogoNovo();

function jogoNovo(){
    contador = 0;
    njogadas = 0;
    nCartas = 0;
    while(nCartas > 14 || nCartas < 4 || nCartas%2 === 1 ){
        nCartas = prompt("Quantas cartas? (numero par entre 4 - 14)");
    }
    imgs.sort(comparador);
    listaImagens = [];
    for (let i = 0; i < (nCartas/2); i++) {
        listaImagens.push(imgs[i]);
        listaImagens.push(imgs[i]);
    }
    listaImagens.sort(comparador);
    const container = document.querySelector(".container");
    container.innerHTML = "";
    for (let i = 0; i < nCartas; i++){
        container.innerHTML += `
        <div id="${i}" data-test="card" class="card" onclick="selecionaCarta(this)">
            <div class="front-face face" >
                <img data-test="face-down-image" src="imagens/back.png" alt=""/>
            </div>
            <div class="back-face face">
                <img data-test="face-up-image" src="imagens/${listaImagens[i]}" alt=""/>
            </div>
        </div>`;
    }
    const marcador = document.querySelector(".contador");
    marcador.innerHTML = contador;
    idContador = setInterval(cronometro, 1000);
}
function selecionaCarta(carta){
    if(carta.classList.contains("selecionada")){
        return;
    }
    cartasSelecionadas++;
    if (cartasSelecionadas > 2){
        return;
    }
    njogadas++;
    carta.classList.add("selecionada");
    carta.classList.add("virada");
    if(cartasSelecionadas === 2){
        const viradas = document.querySelectorAll(".selecionada");
        const id1 = viradas[0].id;
        const id2 = viradas[1].id;
        if (listaImagens[id1] === listaImagens[id2]) {
            for(let i = 0; i < 2; i++){
                viradas[i].classList.remove("selecionada");
            }
            cartasSelecionadas = 0;
        }else{
            setTimeout(desvira,1000);
        }
    }
    setTimeout(fimDeJogo,2000);
}
function fimDeJogo(){
    if(document.querySelectorAll(".virada").length === Number(nCartas)){
        clearInterval(idContador);
        alert(`Você ganhou em ${njogadas} jogadas! A duração do jogo foi de ${contador} segundos!`);
        let reiniciar;
        while (reiniciar !== "não" && reiniciar !== "sim"){
            reiniciar = prompt("Você gostaria de reiniciar a partida? (sim ou não)");
        }
        if (reiniciar === "sim"){
            jogoNovo();
        }else{
            nCartas = 0;
        }
    }
}
function desvira(){
    const viradas = document.querySelectorAll(".selecionada");
    cartasSelecionadas = 0;
    for(let i = 0; i < 2; i++){
        viradas[i].classList.remove("selecionada");
        viradas[i].classList.remove("virada");
    }
}
function cronometro(){
    contador++;
    const marcador = document.querySelector(".contador");
    marcador.innerHTML = contador;
}
//----//
function comparador() {
    return Math.random()-0.5; 
}