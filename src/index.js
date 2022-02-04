/**
 * This file is just a silly example to show everything working in the browser.
 * When you're ready to start on your site, clear the file. Happy hacking!
 **/
import { registerImage } from './lazy';

const minimum = 1;
const maximum = 123;
const random = () => Math.floor(Math.random() * (maximum - minimum)) + minimum;

//crear una img
const createImage = () => {

    const container = document.createElement('div');
    container.className = 'p-4';

    const image = document.createElement('img');

    image.className = 'mx-auto rounded-md bg-gray-320';
    image.width = '320'
    image.dataset.src = `https://randomfox.ca/images/${random()}.jpg`; //TODO

    container.appendChild(image);

    return container;
};

const nuevaImagen = createImage()
const mountNode = document.getElementById('images');

const addButton = document.getElementById('agregarImage');

//accion
const addImage = () => {
    const newImage = createImage();
    mountNode.append(newImage);
    registerImage(newImage);
};


addButton.addEventListener('click', addImage);

// button limpiar
const clean = document.getElementById('limpiar');
clean.addEventListener('click', () => {
    mountNode.innerHTML = '';
    console.clear();
});