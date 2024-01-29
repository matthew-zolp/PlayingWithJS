//Converting to milliseconds is an effective way to store dates in a database

function convertUserSuppliedDate(date){
    return Date.parse(date);
}
function convertNow(){
    return Date.now();
}

console.log('Converting User Supplied Date: ' + convertUserSuppliedDate(new Date()));
console.log('Converting Now: ' + convertNow());