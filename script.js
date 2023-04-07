let nCartas = 0;
const imgs = ["bobrossparrot.gif","explodyparrot.gif","fiestaparrot.gif","metalparrot.gif","revertitparrot.gif","tripletsparrot.gif","unicornparrot.gif"];
jogoNovo();

function jogoNovo(){
    while(nCartas > 14 || nCartas < 4 || nCartas%2 === 1 ){
        nCartas = prompt("Quantas cartas? (numero par entre 4 - 14)");
    }
    imgs.sort(comparador);
    let listaImagens = [];
    for (let i = 0; i < (nCartas/2); i++) {
        listaImagens.push(imgs[i]);
        listaImagens.push(imgs[i]);          
    }
    listaImagens.sort(comparador); 
    const container = document.querySelector(".container");
    for (let i = 0; i < nCartas; i++){
        container.innerHTML += `
        <div class="card" onclick="selecionaCarta(this)">
            <div class="front-face face">
                <img src="imagens/back.png" alt=""/>
            </div>
            <div class="back-face face">
                <img src="imagens/${listaImagens[i]}" alt=""/>
            </div>
        </div>`
    }
}
function selecionaCarta(carta){
    carta.classList.add("selecionada");
}
//----//
function comparador() { 
	return Math.random() - 0.5; 
}