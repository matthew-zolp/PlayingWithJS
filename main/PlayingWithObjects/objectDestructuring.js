obj = {
    firstParam: 10,
    secondParam: 2
}

function addNumbers({firstParam, secondParam}){
    console.log(firstParam * secondParam);
}

addNumbers(obj);