const num1 = 5, num2 = '5';

console.assert(num1 * num2 === 25, 'Numbers Multiplied.');
console.assert(num1 + num2 == 10, 'Numbers Added.');// num1 + num2 outputs '55'. When a number is added to a string, 
                                                    //it is coerced to a string
console.assert(num1 == num2, 'Numbers Equal.');
