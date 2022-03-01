const texto = document.getElementsByClassName("text");
const paragrafo = document.getElementsByTagName("p");
const corpo = document.querySelector("main");

window.onload = function () {
    corpo.style.backgroundColor = localStorage.getItem("corFundo");
    color = JSON.parse(localStorage.getItem("valorfundo"));
    textColor.value = localStorage.getItem('corTexto');
    for ( let text of texto) {
        text.style.color = localStorage.getItem('corTexto');
    }
    fontSize.value = localStorage.getItem('tamValor');
    for ( let text of texto) {
        text.style.fontSize = localStorage.getItem('tamanhoTexto');
    }
}

// Alterar cor do fundo
const btnBackColor = document.getElementById("btnBackColor");
let color = 1;

btnBackColor.addEventListener("click", function () {
    if (color === 1) {
        corpo.style.backgroundColor = "rgb(180,180,180)";
        color += 1;
    }
    else if (color === 2) {
        corpo.style.backgroundColor = "rgb(10,10,10)";
        color += 1;
    }
    else {
        corpo.style.backgroundColor = "";
        color = 1;
    }
    localStorage.setItem("corFundo", corpo.style.backgroundColor)
    localStorage.setItem("valorfundo", JSON.stringify(color));
});

// Alterar cor do Texto
const btnTextColor = document.querySelector("#btnTextColor");
const textColor = document.getElementById("textColor");
textColor.style.display = "none";

btnTextColor.addEventListener("click", showInput);
textColor.addEventListener ("input", function () {
    for ( let text of texto) {
        text.style.color = textColor.value;
    }
    localStorage.setItem("corTexto", textColor.value)
});
textColor.addEventListener("click", function () {
    textColor.style.display = "none";
});

function showInput (event) {
    if (event.target.nextElementSibling.style.display === "none")
    event.target.nextElementSibling.style.display = "";
    else {
        event.target.nextElementSibling.style.display = "none";
    }
};

// Alterar tamanho da fonte
const btnFontsize = document.getElementById('btnFontSize');
const fontSize = document.getElementById('font-size');
fontSize.style.display = 'none';

btnFontsize.addEventListener('click', showInput);

fontSize.addEventListener('input', function() {
    for ( let text of texto) {
        text.style.fontSize = `${fontSize.value}px`;
    }
    localStorage.setItem("tamanhoTexto", `${fontSize.value}px`)
    localStorage.setItem("tamValor", fontSize.value)
});
