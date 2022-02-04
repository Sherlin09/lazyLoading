const isIntersecting = (entry) => {
    return entry.isIntersecting //true si esta dentro de la pantalla
}

const loadImage = (entry) => {
    const container = entry.target; //container
    const imagen = container.firstChild;
    const url = imagen.dataset.src;

    //cargar img
    imagen.src = url;

    observer.unobserve(container);
}
const observer = new IntersectionObserver((entries) => {
    entries
        .filter(isIntersecting)
        .forEach(loadImage);
})

export const registerImage = (imagen) => {

    observer.observe(imagen);
}