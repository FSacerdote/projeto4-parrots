let nCartas;
jogoNovo();

function jogoNovo(){
    nCartas = prompt("Quantas cartas? (numero par entre 4 - 14)");
    const container = document.querySelector(".container");
    for (let i = 0; i < nCartas; i++){
        container.innerHTML += '<div class="cartas"><img src="imagens/back.png" alt=""/></div>'
    }
}