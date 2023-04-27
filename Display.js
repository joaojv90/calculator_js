class Display{
    constructor(displayValorAnterior, displayValorActual){
        this.displayValorActual = displayValorActual;
        this.displayValorAnterior = displayValorAnterior;
        this.calculator = new Calculator();
        this.operationType = undefined;
        this.valorAnterior = '';
        this.valorActual = '';
        this.simbols ={
            sumar : '+',
            restar : '-',
            multiplicar : 'x',
            dividir : '%'
        }
    }

    delete(){
        this.valorActual = this.valorActual.toString().slice(0,-1);
        this.print();
    }

    allDelete(){
        this.valorActual = '';
        this.valorAnterior = '';
        this.operationType = undefined;
        this.print();
    }

    computar(type){
        this.operationType !== 'igual' && this.calculate();
        this.operationType = type;
        this.valorAnterior = this.valorActual || this.valorAnterior;
        this.valorActual = '';
        this.print();
    }

    addNum(number) {
        if(number === '.' && this.valorActual.includes('.')) return
        this.valorActual = this.valorActual.toString() + number.toString();
        this.print();
    }

    print() {
        this.displayValorActual.textContent = this.valorActual;
        this.displayValorAnterior.textContent = `${this.valorAnterior} ${this.simbols[this.operationType] || ''}`;
    }

    calculate(){
        const valorAnterior = parseFloat(this.valorAnterior);
        const valorActual = parseFloat(this.valorActual);
        if (isNaN(valorActual) || isNaN(valorAnterior)) return
        this.valorActual = this.calculator[this.operationType](valorAnterior, valorActual);
    }

}