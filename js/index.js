const displayPrevValue = document.getElementById("prev-value");
const displayCurrentValue = document.getElementById("current-value");
const numberBtn = document.querySelectorAll('.numberBtn');
const operator = document.querySelectorAll('.operator');
const backSp = document.getElementById ('backSp');
const deleteAll = document.getElementById ('deleteAll');


const display = new Display(displayCurrentValue, displayPrevValue);

numberBtn.forEach(button => {
    button.addEventListener('click', () => display.addNumber(button.innerHTML));
});

backSp.addEventListener('click', () => display.delete());
deleteAll.addEventListener('click', () => display.deleteAll());

