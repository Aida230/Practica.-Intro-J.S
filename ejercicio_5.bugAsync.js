// Este programa simula una llamada asincrónica para obtener un usuario

console.log('AIDA');

/*
function obtenerUsuario(id) {
let usuario;
setTimeout(() => {
if (id === 1) {
usuario = { id: 1, nombre: 'John Doe' };
}
}, 2000);
return usuario;
};
const usuario = obtenerUsuario(1);
console.log(usuario);  
*/

function obtenerUsuario(id) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (id === 1) {
                const usuario = { id: 1, nombre: 'John Doe' };
                resolve(usuario);
            } else {
                reject('Usuario no encontrado');
            }
        }, 2000);
    });
}

obtenerUsuario(1)
    .then(usuario => {
        console.log(usuario); // { id: 1, nombre: 'John Doe' }
    })
    .catch(error => {
        console.error(error);
    });

