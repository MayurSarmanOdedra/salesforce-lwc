import { LightningElement, track } from 'lwc';

export default class SimpleLWCCalculator extends LightningElement {
    @track result = 0;
    @track previousResults = [];
    @track showAllResults = false;

    firstNumber;
    secondNumber;


    numberChangeHandler(event){
        const inputBoxName = event.target.name;
        if(inputBoxName === 'firstNumber'){
            this.firstNumber = event.target.value;
        }else if(inputBoxName === 'secondNumber'){
            this.secondNumber = event.target.value;
        }
    }

    addHandler(event){
        const firstN = parseInt(this.firstNumber);
        const secondN = parseInt(this.secondNumber);

        this.result = `Result of ${firstN}+${secondN} is ${firstN+secondN}`;

        this.previousResults.push(this.result);
    }

    substractHandler(event){
        const firstN = parseInt(this.firstNumber);
        const secondN = parseInt(this.secondNumber);

        this.result = `Result of ${firstN}-${secondN} is ${firstN-secondN}`;

        this.previousResults.push(this.result);
    }

    multiplyHandler(event){
        const firstN = parseInt(this.firstNumber);
        const secondN = parseInt(this.secondNumber);

        this.result = `Result of ${firstN}x${secondN} is ${firstN*secondN}`;

        this.previousResults.push(this.result);
    }

    divideHandler(event){
        const firstN = parseInt(this.firstNumber);
        const secondN = parseInt(this.secondNumber);

        this.result = `Result of ${firstN}/${secondN} is ${firstN/secondN}`;

        this.previousResults.push(this.result);
    }

    showAllResultsHandler(event){
        this.showAllResults = event.target.checked;
    }
}