let allImage = 0;
let cargarImage = 0;

const isIntersecting = (entry) => {
    return entry.isIntersecting //true si esta dentro de la pantalla
}

const loadImage = (entry) => {
    const container = entry.target; //container
    const imagen = container.firstChild;
    const url = imagen.dataset.src;

    //cargar img
    imagen.src = url;
    cargarImage += 1;
    showData();
    observer.unobserve(container);
}
const observer = new IntersectionObserver((entries) => {
    entries
        .filter(isIntersecting)
        .forEach(loadImage)
});

export const registerImage = (imagen) => {
    observer.observe(imagen);
    allImage += 1;
    showData();

}

function showData() {
    console.log(`Total Imágenes: ${allImage}`);
    console.log(`Imágenes cargadas: ${cargarImage}`);
    console.log("_____________________________");

}