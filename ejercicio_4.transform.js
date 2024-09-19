
//Ejercicio4: Transformaciones con mapy filter

/*
Hay que crear un archivo transform.js con la solución. Este archivo tiene que tener 2 funciones que nos retornen los valores correctos.
NO USAR FOR NI WHILE. Se trata de un ejercicio para practicar el uso de map y filter.

Estos son los datos:
*/

const datos = [
    {
        id: 1,
        nombre: 'Juan',
        habilidades: ['JavaScript', 'HTML', 'CSS'],
        proyectos: [
            { id: 1, nombre: 'Proyecto 1' },
            { id: 2, nombre: 'Proyecto 2' }
        ]
    },
    {
        id: 2,
        nombre: 'Maria',
        habilidades: ['Python', 'SQL', 'Django'],
        proyectos: [
            { id: 3, nombre: 'Proyecto 3' },
            { id: 4, nombre: 'Proyecto 4' }
        ]
    },
    {
        id: 3,
        nombre: 'Pedro',
        habilidades: ['Java', 'Scring', 'Hibernate'],
        proyectos: [
            { id: 5, nombre: 'Proyecto 5' },
            { id: 6, nombre: 'Proyecto 6' }
        ]
    }
];


const desarrolladorJS = datos.filter(dato => dato.habilidades.includes('JavaScript'));
console.log(desarrolladorJS);


const nombreProyectos = datos.map(dato => dato.proyectos.map(proyecto => proyecto.nombre));

console.log(nombreProyectos.join(',').split());

//['Proyecto 1', 'Proyecto 2', 'Proyecto 3', 'Proyecto 4', 'Proyecto 5', 'Proyecto 6']