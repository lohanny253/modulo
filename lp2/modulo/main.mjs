// Importando as funções dos módulos import { somar } from './somar.mjs'; import { multiplicar } from './multiplicar.mjs';
// Utilizando as funções importadas
import { somar } from "./somar.mjs";
import { multiplicar } from "./multiplicar.mjs";
import { exponeciar} from "./exponeciação.mjs";
import { subtração} from "./subtração.mjs";
import { dividir } from "./divisão.mjs";
const numero1 = 5;
const numero2 = 3;
const resultadoSoma = somar (numero1, numero2);
const resultadoMultiplicacao = multiplicar(numero1, numero2);
const resultadoDivisão = dividir(numero1, numero2);
const resultadoSubtração = subtração(numero1, numero2);
const resultadoExponeciação = exponeciar (numero1, numero2);
console.log(`${numero1} + ${numero2} = ${resultadoSoma}`);
console.log(`${numero1} * ${numero2} = ${resultadoMultiplicacao}`);
console.log(`${numero1} / ${numero2} = ${resultadoDivisão}`);
console.log(`${numero1} - ${numero2} = ${resultadoSubtração}`);
console.log(`${numero1} ^ ${numero2} = ${resultadoExponeciação}`);
