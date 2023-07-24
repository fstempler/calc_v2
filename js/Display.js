class Display{
    constructor(displayPrevValue, displayCurrentValue){
        this.displayCurrentValue = displayCurrentValue;
        this.displayPrevValue = displayPrevValue;
        this.calculate = new Calculator();
        this.operation = undefined;
        this.currentValue = '';
        this.prevValue = '';
        
    }

    addNumber(number){
        if(number === '.' && this.currentValue.includes('.')) return
        this.currentValue = this.currentValue.toString() + number.toString();
        this.showValue();
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

    showValue(){
        this.displayCurrentValue.textContent = this.currentValue;
        this.displayPrevValue.textContent = this.prevValue;
    }
}