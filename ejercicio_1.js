/*
Crea un archivo ejercicio1.js que tenga un objeto llamado usuario con los siguientes campos:
-Nombre
-Apellidos
-Una lista con los temas del bootcamp Node.js, Git y react con sus nombres y fechas de inicio de cada módulo. Fecha y formato
"YYYY-MM-DD"
-Si estas en búsqueda activa con un valor de verdadero o falso

En este archivo queremos mostrar por pantalla la fecha de inicio del módulo de react del objeto que hemos creado anteriormente
*/

const objetoUsuario = {
    nombre: 'Aida',
    apellidos: 'Fuentes de la Fuente',
    temario: [
        {
            nombre: 'Node.js',
            fechaInicio: '2024-03-12',
        },
        {
            nombre: 'Git',
            fechaInicio: '2025-04-13'
        },
        {
            nombre: 'React',
            fechaInicio: '2025-06-23'
        },
    ],
    busquedaActiva: true
}

console.log(objetoUsuario.temario[2].fechaInicio);