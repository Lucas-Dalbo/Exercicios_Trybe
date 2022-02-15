const texto = document.getElementsByClassName("text");
const paragrafo = document.getElementsByTagName("p");
const corpo = document.querySelector("main");

// Alterar cor do fundo
const btnBackColor = document.getElementById("btnBackColor");
let color = 1;

btnBackColor.addEventListener("click", function () {
    if (color === 1) {
        corpo.style.backgroundColor = "rgb(180,180,180)";
        color = 2;
    }
    else if (color === 2) {
        corpo.style.backgroundColor = "rgb(10,10,10)";
        color = 3;
    }
    else {
        corpo.style.backgroundColor = "";
        color = 1;
    }
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
});
textColor.addEventListener("click", function () {
    textColor.style.display = "none";
});

function showInput () {
    if (btnTextColor.nextElementSibling.style.display === "none")
    btnTextColor.nextElementSibling.style.display = "";
    else {
        btnTextColor.nextElementSibling.style.display = "none";
    }
};


