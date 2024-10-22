function suma(){
    let valor1 = parseInt(document.getElementById("n1").value);
    let valor2 = parseInt(document.getElementById("n2").value)
    let resultado;
    resultado = valor1 + valor2;
    document.getElementById("n3").value = resultado;
}