function calcularMedia() {
    var nota1 = parseFloat(document.getElementById("input1").value);
    var nota2 = parseFloat(document.getElementById("input2").value);
    var nota3 = parseFloat(document.getElementById("input3").value);

    if (isNaN(nota1) || isNaN(nota2) || isNaN(nota3)) {
        alert("Por favor, insira valores válidos para as notas.");
    } else {
        var media = (nota1 + nota2 + nota3) / 3;
        document.getElementById("resultado").innerHTML = "Média: " + media.toFixed(2);
    }
}
