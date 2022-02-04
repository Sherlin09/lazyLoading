const isIntersecting = (entry) => {
    return entry.isIntersecting //true si esta dentro de la pantalla
}

const action = (entry) => {
    const nodo = entry.target;
    console.log("STP");

    observer.unobserve(nodo);
}
const observer = new IntersectionObserver((entries) => {
    entries
        .filter(isIntersecting)
        .forEach(action);
})

export const registerImage = (imagen) => {

    observer.observe(imagen);
}