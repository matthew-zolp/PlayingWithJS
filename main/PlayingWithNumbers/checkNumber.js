export function checkNumberWithParseFloat(strNum){
    let num = Number.parseFloat(strNum);
    console.log(`Is ${strNum} a number?  ` + Number.isInteger(num));
}

checkNumberWithParseFloat(1);
checkNumberWithParseFloat(0);
checkNumberWithParseFloat('not a number');


//This will return false for zero (0)
export function checkNumberWithBoolean(strNum){
    let num = Number.parseFloat(strNum);
    console.log(`Is ${strNum} a number?  ` + Boolean(num));
}
checkNumberWithBoolean(8);
checkNumberWithBoolean(0);
checkNumberWithBoolean('not a number');