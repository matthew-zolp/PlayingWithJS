function convertToArray(value){
    return Array.from(value);
}
export function multiplyAllNumbers(){
    let numbers = convertToArray(arguments);
    let result = 1;
    numbers.forEach(num => result *= num);
    return result;
}