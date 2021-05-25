
let num1 = 5
let num2 = 3
let result;

let operation = "*";

if (operation === "+"){
    result = num1+num2;
    console.log(`${num1} + ${num2} = ${result}`);
}
 else if (operation === "-"){
    result = num1-num2; 
    console.log(`${num1} - ${num2} = ${result}`);
 }
else if (operation === "*"){
    result = num1*num2;
    console.log(`${num1} * ${num2} = ${result}`);
}    
else if (operation === "/"){
    result = num1/num2;
    console.log(`${num1} / ${num2} = ${result}`);
}   

console.log(`Please enter the first number: ${num1}`);
console.log(`Please enter the second number: ${num2}`);
console.log(`Please choose the operation (+, -, /, *): ${operation}`);
console.log(`--------------`);
console.log(`${num1} ${operation} ${num2} = ${result}`);

