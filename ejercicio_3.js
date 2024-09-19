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
    const myFunction2 = (list) => {
        const lastElement = list.length - 1;
        const extension = list[lastElement];
        const newList = [...list];
        newList.pop();
        return `${newList.join('/')}.${extension}`;
    }
    console.log(myFunction2(input2)); // 'CodinGame/python.py'


const input3 = [
    'programming',
    'languages',
    'easy',
    'beginner',
    'useful',
    'pythonstuff',
    'py',
    ]
    const myFunction3 = (list) => {
        const lastElement = list.length - 1;
        const extension = list[lastElement];
        const newList = [...list];
        newList.pop();
        return `${newList.join('/')}.${extension}`;
    }
    console.log(myFunction3(input3));
    // 'programming/languages/easy/beginner/useful/pythonstuff.py'



    
/*
3.2. EJERCICIO
Crea una función para que con estos datos de entrada se produzca los siguientes resultados:
*/

const input = 10;
// create your function here
    const myFunction4 = (numero) => {
        const cadena = input.toString();
        const newCadena = cadena.split('');
        return newCadena.join('-'); 
    }
    console.log(myFunction4(input)); // '1-0'

  
const secondInput = 1;
    const myFunction5 = (numero) => {
        const cadena = secondInput.toString();
        return cadena
    }
    console.log(myFunction5(secondInput)); // '1'

const thirdInput = 11234;
    const myFunction6 = (numero) => {
        const cadena = thirdInput.toString();
        const newCadena = cadena.split('');
        return newCadena.join('-');
    } 

    console.log(myFunction6(input)); // '1-1-2-3-4'



/*
3.3 EJERCICIO
Crea una función para que con estos datos de entrada se produzcan los siguientes resultados:
*/

const inputA = 'string';
// create your function here
    const myfunctionA = (cadena) => {
        const alReves = cadena.split('').reverse().join('');
        const largo = inputA.length;
        return `${largo} ${alReves}`;
    }
console.log(myfunctionA(inputA)); // '6 gnirts'


const inputB = 'variable';
    const myFunctionB = (cadena) => {
        return `${inputB.length} ${cadena.split('').reverse().join('')}`;   
    }
console.log(myFunctionB(inputB)); // '8 elbairav'


const inputC = 'pointer';
    const myFunctionC = (cadena) => {
        return inputC.length + ' ' + cadena.split('').reverse().join('');
    }

console.log(myFunctionC(inputC)); // '7 retniop'
