class Display{
    constructor(displayValorAnterior, displayValorActual){
        this.displayValorActual = displayValorActual;
        this.displayValorAnterior = displayValorAnterior;
        this.calculator = new Calculator();
        this.valorAnterior = '';
        this.valorActual = '';
    }

    addNum(number) {
        this.valorActual = this.valorActual + number;
        this.print();
    }

    print() {
        this.displayValorActual.textContent = this.valorActual;
        this.displayValorAnterior.textContent = this.valorAnterior;
    }

}