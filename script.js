let nCartas;
jogoNovo();

function jogoNovo(){
    nCartas = prompt("Quantas cartas? (numero par entre 4 - 14)");
    const container = document.querySelector(".container");
    for (let i = 0; i < nCartas; i++){
        container.innerHTML += '<div class="card" onclick="selecionaCarta(this)"><div class="front-face face"><img src="imagens/back.png" alt=""/></div><div class="back-face face">Verso</div></div>'
    }
}
function selecionaCarta(carta){
    carta.classList.add("selecionada");
}
