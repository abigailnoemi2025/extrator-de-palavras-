const botaoMostrsPalavras = document.querySelector("#botao-palavrachave");

botaoMostraPalavra.addEvebListener("click" =, mostrapalavraschave);

function mostrapalavraschave(){
    const texto = document.querySelector("#entradA-de-texto").previousElementSibling;

    const campoResultado = document.querySelector("#resultado-palavrachave");

    const palavra = texto.split(" ");

    campoResultado.textContent = botaoMostrsPalavras; 
}