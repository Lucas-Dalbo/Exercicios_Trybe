const btnSend = document.getElementById("send");

btnSend.addEventListener("click", noReset);

function noReset(event) {
    event.preventDefault()
}

const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const respostaInput = document.getElementById("resposta");
const requerimento = document.getElementById("check2");

function valido() {
    if (requerimento.validity["valueMissing"] === false) {
        if (nameInput.value <= 10 || nameInput.value > 40) {
            alert("Dados Inválidos");
        }
        else if (emailInput.value <= 10 || emailInput.value > 50) {
            alert("Dados Inválidos");
        }
        else {
            alert("Dados enviados com sucesso! Obrigado por participar do concurso TrybeTrip");
        }
    }
    else {
        alert("Só é possivel participar se concordar que imagens das suas férias poderão ser usadas na divulgação de concursos futuros.")
    }
}

btnSend.addEventListener("click", valido);