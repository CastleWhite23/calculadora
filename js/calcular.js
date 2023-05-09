export function calcular() {
    var value = document.querySelector(".input-number").value;
    var input = document.querySelector(".input-number")
    var ultimaLetra = value.slice((value.length) - 1);

    if (ultimaLetra == "+" || ultimaLetra == "-" || ultimaLetra == "*" || ultimaLetra == "/") {
        alert("Adicione mais um número");
    }
    else {
        value += "+0"
        var numeros = [],  sinais = [];
        var resultado = 0, r = 0, x = 0;
        var numero = "", nFormado = ""

        for (var i = 0; i <= value.length; i++) {
            let char = value.charAt(i);
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
        const sinalExtra = sinais.pop()

        const soma = (n1, n2) => {
            return n1 + n2
        }

        const div = (n1, n2) => {
            return n1 / n2;
        }

        const multi = (n1, n2) => {
            return n1 * n2;
        }

        const sub = (n1, n2) => {
            return n1 - n2;
        }

        var firstCalc = false
        sinais.forEach(sinal => {
            if (sinal == "+"){
                //x=0 x=1 x =2 x=3
                if(!firstCalc){
                      resultado = soma(parseInt(numeros[x]), parseInt(numeros[x + 1]))
                      firstCalc = true
                }else{
                    resultado = soma(resultado, parseInt(numeros[x + 1]))
                }
            }
            else if (sinal == "-") {
                if(!firstCalc){
                   resultado =  sub(parseInt(numeros[x]), parseInt(numeros[x + 1]))
                   firstCalc = true
                }else{
                    resultado = sub(resultado, parseInt(numeros[x + 1]))
                }
            }
            else if (sinal == "*") {
                if(!firstCalc){
                   resultado =  multi(parseInt(numeros[x]), parseInt(numeros[x + 1]))
                   firstCalc = true
                }else{
                    resultado = multi(resultado, parseInt(numeros[x + 1]))
                }
            }
            if (sinal == "/"){
                //x=0 x=1 x =2 x=3
                if(!firstCalc){
                      resultado = multi(parseInt(numeros[x]), parseInt(numeros[x + 1]))
                      firstCalc = true
                }else{
                    resultado = multi(resultado, parseInt(numeros[x + 1]))
                }
            }
            x += 1
        });

        input.value = resultado
    }
}

//pegar os dois primeiros numero e fazer o calculo,
// pra cada sinal que eu encontrar eu quero pegar dois numero da lista n1  e n2 = n1 + 1
// e depois a variavel de encontrar valor na lista tem somado em seu valor mais 2 pra desconsiderar os dois números

