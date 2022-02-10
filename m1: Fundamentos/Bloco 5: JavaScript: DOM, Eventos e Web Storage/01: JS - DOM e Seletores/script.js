//         Aqui você vai modificar os elementos já existentes utilizando apenas as funções:
//         - document.getElementById()
//         - document.getElementsByClassName()
//         - document.getElementsByTagName()
//  Crie uma função que mude o texto na tag <p> para uma descrição de como você se vê daqui a 2 anos. (Não gaste tempo pensando no texto e sim realizando o exercício)
function changeText () {
    let paragraph = document.querySelectorAll("p")[1];
    paragraph.innerText = "Ganhando milhões e fazendo muito BOLO!";
};
changeText();

//  Crie uma função que mude a cor do quadrado amarelo para o verde da Trybe (rgb(76,164,109)).
function changeColor () {
    let quadrado = document.getElementsByTagName("main")[0];
    quadrado.style.backgroundColor = "rgb(76,164,109)";
}
changeColor();

//  Crie uma função que mude a cor do quadrado vermelho para branco.
function changeMid () {
    let mid = document.querySelector(".center-content");
    mid.style.backgroundColor = "white";
}
changeMid();

//  Crie uma função que corrija o texto da tag <h1>.
function fixTitle () {
    let title = document.getElementsByClassName("title")[0];
    title.innerText = "Exercício 5.1 - JavaScript";
}
fixTitle();

//  Crie uma função que modifique todo o texto da tag <p> para maiúsculo.
function upperCase () {
    let text = document.querySelectorAll("main section p")[0];
    text.style.textTransform = "uppercase";
}
upperCase();

//  Crie uma função que exiba o conteúdo de todas as tags <p> no console.
function tagsP () {
    let p = document.getElementsByTagName("p");
    for ( let index in p) {
        console.log(p[index]);
    }
}
tagsP ();
