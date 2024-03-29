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
    for ( let text of texto) {
        text.style.fontFamily = localStorage.getItem('familiaTexto');
    }
    if (localStorage.getItem('familiaTexto')) {
        fontFamily.value = localStorage.getItem('familiaTexto');
    }
    for ( let text of texto) {
        text.style.lineHeight = localStorage.getItem("espacoTexto");
    }
    if (localStorage.getItem('espacoTexto')) {
        espaco.value = localStorage.getItem('espacoTexto');
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

// Família da fonte
const btnFamily = document.getElementById('btnFontFamily');
const fontFamily = document.getElementById('font-fam');
fontFamily.style.display = 'none';

btnFamily.addEventListener('click', showInput);

fontFamily.addEventListener('input', function() {
    for ( let text of texto) {
        text.style.fontFamily = fontFamily.value;
    }
    localStorage.setItem("familiaTexto", fontFamily.value)
});

// Espaçamento entre linhas
const btnEspaco = document.getElementById('btnSpace');
const espaco = document.getElementById('altura-linha');
espaco.style.display = 'none';

btnEspaco.addEventListener('click', showInput);

espaco.addEventListener('input', function() {
    for ( let text of texto) {
        text.style.lineHeight = `${espaco.value}px`;
    }
    localStorage.setItem("espacoTexto", `${espaco.value}px`)
});
