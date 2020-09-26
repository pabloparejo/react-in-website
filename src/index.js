import './title.js';

window.onload = () => {
	console.log('Window is loaded!');
}

// h1
// const element = document.getElementById('title');
// element.innerHTML = 'Hello world';

// description
const getDescription = name => `My name is ${name}`;

const description = document.createElement('p');
description.innerHTML = getDescription('Fran');
document.body.appendChild(description);

// Input
const input = document.createElement('input');
input.type = 'text';
input.name = 'name';
document.body.appendChild(input);

// Button
const button = document.createElement('button');
button.innerHTML = 'Click here!';
document.body.appendChild(button);


// Event handlers
button.onclick = () => {
	// 1. Coger el elemento input
	const element = document.getElementsByTagName('input')[0];
	// 2. Obtener el valor del input
	const name = element.value;
	// 3. Asignar ese valor al description
	description.innerHTML = getDescription(name);
}
