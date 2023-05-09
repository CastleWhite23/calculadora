import {addNumbersEvents} from './eventos.js'
import {addOperatorsEvents} from './eventos.js'
import {calcular} from './calcular.js'

var btn_igual = document.querySelector(".igual");

addNumbersEvents();
addOperatorsEvents();
btn_igual.addEventListener('click', calcular)

