// Funcion con parametro Name, para saludar con el nombre que se le pase como argumento
/*
function hello(name) {
  return 'Hola ' + name;
}
  
console.log(hello('Mauro'));
console.log(hello('Pedro'));
console.log(hello('Roberto'));
*/

// const { createElement } = require("react");

// function Sumar(x ,y) {
//   if (x === undefined || y === undefined) {
//     return 'Error: Debes ingresar dos numeros';
//   }  
//   else if (typeof x !== 'number' || typeof y !== 'number') {
//     return 'Error: Debes ingresar dos numeros validos';
//   }
//   else {
//     return x + y;
//   }
// }   

// Funcion que recibe dos numeros y devuelve su suma

// console.log(Sumar(100, 200));

// const user = {
//     name: 'Mauro',
//     age: 21,
//     email: 'maurogarciachunga@gmail.com',
//     address: {
//         street: 'Calle Falsa 123',
//         city: 'Ciudad Ficticia',
//         country: 'Pais Imaginario'
//     },
//     friends: ['Pedro', 'Roberto', 'Ana'],
//     active : true,
//     sendEmail: function() {
//         return `Enviando email a ${this.email}`;
//     },
// }

// console.log(user.name);
// console.log(user.age);
// console.log(user.address);
// console.log(user.sendEmail());

// const name = 'Laptop';
// const price = 1880;

// const product = {
//     name,
//     price
// }
// console.log(product);

// console.log(document.title);

// const title = document.createElement('h1');
// title.innerText = 'Hola mundo desde JavaScript';

// const button = document.createElement('button');
// button.innerText = 'Haz click aqui';
// button.addEventListener('click', function() {
//     button.innerText = 'Has hecho click en el boton';
//     alert('Has hecho click en el boton');
// });

// document.body.append(title);
// document.body.append(button);

const user = {
    name: 'Mauro',
    age: 21
};


function SaludarAUsuario(user) {
    const h1 = document.createElement('h1');
    h1.innerText = `Hola ${user.name}, que bueno verte de nuevo!`;
    return h1;
}

// Agrega el saludo al body sin reemplazar el contenido
document.body.append(SaludarAUsuario(user));

// Funciones anonimas

console.log(function() {
    return 'Hola desde una funcion anonima';
}())

const button0 = document.createElement('button');
button0.innerText = 'Primer boton';

button0.addEventListener('click', () => {
    alert('Has hecho click en el boton');
});
document.body.append(button0);


const ShowText = () => "Hola, este es un texto generado por una funcion flecha, sin colocar las llaves y el return, lo que permite una sintaxis mas concisa.";
const p = document.createElement('p');
p.innerText = ShowText();
document.body.append(p);

const ShowNumber = () => 42;
const ShowBoolean = () => true;
const showArray = () => [1, 2, 3, 4, 5];

// Mostrar un objeto con una funcion flecha
const ShowObject = () => ({ name: 'Mauro', age: 21, email: 'mauro@gmail.com' });
//Mostrar un objeto en la consola
console.log(ShowObject());



// Segundo boton 
const button2 = document.createElement('button');
button2.innerText = 'Segundo boton';
// button1.style = 'background-color: blue; color: white; padding: 10px; border-radius: 5px; border: none; cursor: pointer;';
// Coloquemos los estilos concatenando una cadena de texto
const background = 'green';
const color = 'white';
const isAuthorized = true;
button2.style.cssText = `background-color: ${isAuthorized ? background : 'red'}; color: ${color}; padding: 10px; border-radius: 5px; border: none; cursor: pointer;`;
// Agregar un evento al boton para mostrar un mensaje de acceso autorizado o denegado  



button2.addEventListener('click', () => {
    if (isAuthorized) {
        return alert('Acceso autorizado');
    } 
    alert('Acceso denegado');
    
});

document.body.append(button2);


import {add, multiply} from './add.js';
console.log(add(10, 90));
console.log(multiply(10, 90));

const person = {
    name: 'Mauro',
    address: {
        City: 'London'
    }
}

console.log(person.address?.City)


const ul = document.createElement('ul');


// data = fetch('https://jsonplaceholder.typicode.com/posts')
//     .then(function (response) {
//         return response.json()
//     }).then(function (data) {
//         console.log(data);
//     //     data.forEach(function (post){
//     //         const li = document.createElement('li');
//     //         li.innerText = post.title;
//     //         ul.appendChild(li);
//     //     })
//     //     document.body.append(ul);
//     // 
//     })

async function loadData() {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts')
    const data = await response.json()
    data.forEach(function (post){
            const li = document.createElement('li');
            li.innerText = post.title;
            ul.appendChild(li);
        })
        document.body.append(ul);
}

loadData();
console.log('Linea 2');