let numerosecreto;
let vidas;

let txtstatus = document.getElementById("status");
let btniniciar = document.getElementById("btiniciar");
let numerochute = document.getElementById("num1");
let btnchutar = document.getElementById("btchutar");
let resultado = document.getElementById("txtresultado");

btniniciar.addEventListener("click", novojogo);
btnchutar.addEventListener("click", chutar);

numerochute.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        chutar();
    }
});

numerochute.disabled = true;
btnchutar.disabled = true;

function novojogo() {
    numerochute.disabled = false;
    btnchutar.disabled = false;

    numerosecreto = parseInt(Math.random() * 100) + 1;
    vidas = 10;
    numvidas();
    numerochute.value = "";
    resultado.innerHTML = "";
    numerochute.focus();



}

function numvidas() {
    txtstatus.innerHTML = "";
    for (let i = 1; i <= vidas; i++) {
        txtstatus.innerHTML += '+ ';
    }
}



function chutar() {
    let num = numerochute.value;
    if (num < 1 || num > 100) {
        alert("Digite um número entre 1 e 100! Perdeu uma vida!");
        vidas--;

    } else if (num == numerosecreto) {
        resultado.innerHTML = "Parabéns! Você acertou!";
        numerochute.disabled = true;
        btnchutar.disabled = true;

    } else if (num > numerosecreto) {
        resultado.innerHTML += "palpite: " + num;
        resultado.innerHTML += " - O número secreto é menor! <br>";
        vidas--;

    } else if (num < numerosecreto) {
        resultado.innerHTML += "palpite: " + num;
        resultado.innerHTML += " - O número secreto é maior! <br>";
        vidas--;
    }
    numerochute.value = "";
    numvidas();

    if (vidas == 0) {
        resultado.innerHTML = "Você perdeu!";
        numerochute.disabled = true;
        btnchutar.disabled = true;
        numerochute.focus();

    }


}
