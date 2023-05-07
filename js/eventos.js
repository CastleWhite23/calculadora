var numero = document.querySelector(".input-number");
export function addNumbersEvents() {

    var one = document.querySelector(".one");
    var two = document.querySelector(".two");
    var three = document.querySelector(".three");
    var four = document.querySelector(".four");
    var five = document.querySelector(".five");
    var six = document.querySelector(".six");
    var seven = document.querySelector(".seven");
    var eight = document.querySelector(".eight");
    var nine = document.querySelector(".nine");
    var zero = document.querySelector(".zero");
    //numero digitado

    one.addEventListener('click', () => {
        numero.value += one.innerText;
    })
    two.addEventListener('click', () => {
        numero.value += two.innerText;
    })

    three.addEventListener('click', () => {
        numero.value += three.innerText;
    })

    four.addEventListener('click', () => {
        numero.value += four.innerText;
    })

    five.addEventListener('click', () => {
        numero.value += five.innerText;
    })

    six.addEventListener('click', () => {
        numero.value += six.innerText;
    })

    seven.addEventListener('click', () => {
        numero.value += seven.innerText;
    })

    eight.addEventListener('click', () => {
        numero.value += eight.innerText;
    })

    nine.addEventListener('click', () => {
        numero.value += nine.innerText;
    })

    zero.addEventListener('click', () => {
        numero.value += zero.innerText;
    })
}


export function addOperatorsEvents(){
    var soma = document.querySelector(".soma");
    var multi = document.querySelector(".multi");
    var subtr = document.querySelector(".subtr");
    var divisor = document.querySelector(".divisor");

    soma.addEventListener('click', () => {
        var n = numero.value
        var lastChar =  n.slice((n.length) -1);

        if(lastChar != "+" && lastChar != "-" && lastChar != "/" && lastChar != "*"){
            numero.value += soma.innerText;
        }
        
    })
    multi.addEventListener('click', () => {
        var n = numero.value
        var lastChar = (numero.value).slice((n.length) -1);

        if(lastChar != "+" && lastChar != "-" && lastChar != "/" && lastChar != "*"){
            numero.value += "*";
        }
        
    })
    subtr.addEventListener('click', () => {
        var n = numero.value
        var lastChar = (n).slice((n.length) -1);

        if(lastChar != "+" && lastChar != "-" && lastChar != "/" && lastChar != "*"){
         numero.value+= subtr.innerText;
        }
        
    })
    divisor.addEventListener('click', () => {
        var n = numero.value
        var lastChar = n.slice((n.length) -1);

        if(lastChar != "+" && lastChar != "-" && lastChar != "/" && lastChar != "*"){
            numero.value += divisor.innerText;
        }
        
    })

}
