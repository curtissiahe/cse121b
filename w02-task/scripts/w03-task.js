/* LESSON 3 - Programming Tasks */

/* FUNCTIONS */
/* Function Definition - Add Numbers */

function add(number1,number2){
    return number1+number2;
};

function addNumbers(){
    let addNumber1=  Number(document.querySelector('#add1').value);
    let addNumber2=  Number(document.querySelector('#add2').value);
    document.querySelector('#sum').value= add(addNumber1,addNumber2);
    

};
document.querySelector('#addNumbers').addEventListener('click', addNumbers);




/* Function Expression - Subtract Numbers */

function Subtract(Subtract1,Subtract2){
    return Subtract1-Subtract2;
}

function SubtractNumbers(){
    let SubtractNumber1=  Number(document.querySelector('#subtract1').value);
    let SubtractNumber2=  Number(document.querySelector('#subtract2').value);
    document.querySelector('#difference').value= Subtract(SubtractNumber1,SubtractNumber2);


};

document.querySelector('#subtractNumbers').addEventListener('click', SubtractNumbers);



/* Arrow Function - Multiply Numbers */

 const multiply=(factor1, factor2)=>factor1*factor2;
 

 const multiplyNumbers= ()=>{
    let multiplyNumber1=  Number(document.querySelector('#factor1').value);
    let multiplyNumber2=  Number(document.querySelector('#factor2').value);
    document.querySelector('#product').value= multiply(multiplyNumber1,multiplyNumber2);

 };
 document.querySelector('#multiplyNumbers').addEventListener('click', multiplyNumbers);


/* Open Function Use - Divide Numbers */
const divide =(x,y)=> x/y;



const divideNumbers =()=>{
    let dividend = parseFloat(document.getElementById("dividend").value);
    let divisor = parseFloat(document.getElementById("divisor").value);
    let quotient = divide (dividend,divisor);
    document.getElementById("quotient").value= quotient.toFixed(2);

};
document.getElementById("divideNumbers").addEventListener('click',divideNumbers);


/* Decision Structure */


function getTotal(){


    let subtotal= parseFloat(document.getElementById("subtotal").value);

    if(document.getElementById("member").checked){
        subtotal=subtotal-subtotal*0.2;
} 



document.getElementById("total").textContent= subtotal.toFixed(2);
}

document.getElementById("getTotal").addEventListener('click',getTotal);

/* ARRAY METHODS - Functional Programming */
/* Output Source Array */

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];


    let array_source=document.getElementById('array');

    array_source.innerHTML=`${numbers}`;





/* Output Odds Only Array */

const oddNumbers = numbers.filter(number => number % 2 !== 0);

const oddNumbersString = oddNumbers.join(', ');



document.getElementById('odds').innerHTML =`${oddNumbersString}`;


/* Output Evens Only Array */


const EvenNumbers=numbers.filter(number=> number%2===0);

const EvenNumbersString = EvenNumbers.join(', ');

document.getElementById('evens').innerHTML =`${EvenNumbersString}`;





/* Output Sum of Org. Array */


const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

document.getElementById('sumOfArray').innerHTML =`${sum}`;





/* Output Multiplied by 2 Array */

const multipl=numbers.map(number=> number*2);


document.getElementById('multiplied').innerHTML =`${multipl}`;




/* Output Sum of Multiplied by 2 Array */


summultiplied=sum*2;

document.getElementById('sumOfMultiplied').innerHTML =`${summultiplied}`;




