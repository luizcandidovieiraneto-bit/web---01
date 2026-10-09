function calcular() {
    let n1 = Number(document.getElementById("num1").value);
    let n2 = Number(document.getElementById("num2").value);
    let texto = document.getElementById("txtresultado");


    texto.innerText = "A soma dos números é: " + (n1 + n2);
    texto.innerText += "\nSubtração dos números é: " + (n1 - n2);
    texto.innerText += "\nMultiplicação dos números é: " + (n1 * n2);
    texto.innerText += "\nDivisão dos números é: " + (n1 / n2);
    texto.innerHTML += "<br> \nPotenciação dos números é: " + (n1 ** n2);
    texto.innerHTML += "<br> \nResto da divisão é: " + (n1 % n2);
}