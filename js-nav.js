const buttonElement = document.querySelector('#addTrans');
// añadir listener al evento click del botón
buttonElement.addEventListener("click", () => {

    const inputElement1 = document.querySelector('#conceptoInput');
// guardamos el valor en localStorage
    localStorage.setItem("addText", inputElement1.value);
// accedemos al DOM para buscar el párrafo
const historialElement = document.querySelector('#historialDisplay');

// escribimos el texto que se ha introducido en el input dentro del parrafo
historialElement.textContent = inputElement1.value;
})