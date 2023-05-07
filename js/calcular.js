export function calcular() {
    var value = document.querySelector(".input-number").value;
    var ultimaLetra = value.slice((value.length) - 1);

    if (ultimaLetra == "+" || ultimaLetra == "-" || ultimaLetra == "*" || ultimaLetra == "/") {
        alert("Adicione mais um número");
    }
    else {
        var numeros = [];
        var sinais = [];
        var numero = ""
        var nFormado = ""
        for (var i = 0; i <= value.length; i++) {
            let char = value.charAt(i);

            console.log(char)
            switch (char) {
                case '+':
                case '-':
                case '*':
                case '/':
                    sinais.push(char)
                    nFormado = numero
                    numeros.push(nFormado)
                    numero = ""
                    break;
                default:
                    numero += char;
                    break;
            }
        }
        console.log(numeros)
        console.log(sinais)
        console.log(nFormado)
    }
}