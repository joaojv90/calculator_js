const displayValorAnterior = document.getElementById('valorAnterior');
const displayValorActual = document.getElementById('valorActual');
const numbersButtons = document.querySelectorAll('.number');
const operatorsButtons = document.querySelectorAll('.operators');

const display = new Display(displayValorAnterior, displayValorActual);

numbersButtons.forEach(button => {
    button.addEventListener('click', () => display.addNum(button.innerHTML));
})

operatorsButtons.forEach(button => {
    button.addEventListener('click', () => display.computar(button.value));
})