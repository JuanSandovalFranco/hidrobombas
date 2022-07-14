

const imagen = document.getElementById("imagen")


document.addEventListener("mousemove", (e) => {

        imagen.style.transform = `translate(${e.clientX * 0.80 * 0.01}px , ${e.clientY * 0.80 *  0.01}px )`
})