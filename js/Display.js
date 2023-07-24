class Display{
    constructor(displayPrevValue, displayCurrentValue){
        this.displayCurrentValue = displayCurrentValue;
        this.displayPrevValue = displayPrevValue;
        this.calculate = new Calculator();
        this.operation = undefined;
        this.currentValue = '';
        this.prevValue = '';
        this.symbols = {
            plus: "+",
            divide: "/",
            multiply: "*",
            substract: "-",
            equal: "=",
        }
        
    }

   
    delete(){
        this.currentValue = this.currentValue.toString().slice(0,-1);
        this.showValue();
     }

    deleteAll(){
        this.currentValue = '';
        this.prevValue = '';
        this.operation = undefined;
        this.showValue();
    }

    compute(type){
        this.operation !== 'equal' && this.calculation();
        this.operation = type;
        this.prevValue = this.currentValue || this.prevValue;
        this.currentValue = '';
        this.showValue();
    }

    addNumber(number){
        if(number === '.' && this.currentValue.includes('.')) return
        this.currentValue = this.currentValue.toString() + number.toString();
        this.showValue();
    }

    showValue(){
        this.displayCurrentValue.textContent = this.currentValue;
        this.displayPrevValue.textContent = `${this.prevValue} ${this.symbols[this.operation] || ''}`;
    }

   

    calculation(){
        const prevValue = parseFloat(this.prevValue);
        const currentValue = parseFloat(this.currentValue);

        if(isNaN (currentValue) || isNaN(prevValue)) return
        this.currentValue = this.calculate[this.operation](prevValue, currentValue);
    }
}