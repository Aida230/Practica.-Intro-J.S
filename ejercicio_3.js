/*
3.1. EJERCICIO
Crea una función para que con estos datos de entrada se produzca los siguientes resultados:
*/
console.log('AIDA');

const input1 = [
    'Downloads',
    'Videos',
    'capture',
    'mp4',
]
// create your function here
const myFunction = (list) => {
    const lastElement = list.length - 1;
    const extension = list[lastElement];
    const newList = [...list];
    newList.pop();
    return `${newList.join('/')}.${extension}`;
};
console.log(myFunction(input1)); // 'Downloads/Videos/capture.mp4'


const input2 = [
    'CodinGame',
    'python',
    'py',
];
console.log(myFunction(input2)); // 'CodinGame/python.py'


const input3 = [
    'programming',
    'languages',
    'easy',
    'beginner',
    'useful',
    'pythonstuff',
    'py',
]
console.log(myFunction(input3)); // 'programming/languages/easy/beginner/useful/pythonstuff.py'

   
/*
3.2. EJERCICIO
Crea una función para que con estos datos de entrada se produzca los siguientes resultados:
*/

const input = 10;
// create your function here
const myFunction4 = (numero) => {
    const cadena = numero.toString();
    const newCadena = cadena.split('');
    return newCadena.join('-'); 
}
console.log(myFunction4(input)); // '1-0'

  
const secondInput = 1;
console.log(myFunction4(secondInput)); // '1'

const thirdInput = 11234;
console.log(myFunction4(thirdInput)); // '1-1-2-3-4'



/*
3.3 EJERCICIO
Crea una función para que con estos datos de entrada se produzcan los siguientes resultados:
*/

const inputA = 'string';
// create your function here
const stringReverse = (cadena) => {
    const alReves = cadena.split('').toReversed().join('');//toReversed da la vuelta a la lista sin modificar la original, haciendo una copia
    const largo = cadena.length;
    return `${largo} ${alReves}`;
}
console.log(stringReverse(inputA)); // '6 gnirts'


const inputB = 'variable';
console.log(stringReverse(inputB)); // '8 elbairav'
    


const inputC = 'pointer';
console.log(stringReverse(inputC)); // '7 retniop'
