//Throws an error 'arguments is not defined'
const arrowFunctionWithArguments = (args) => {
    console.log(JSON.stringify(arguments));
};

arrowFunctionWithArguments(1,2, 'third argument');

//arguments object is only defined in non arrow functions. Note how the function does not need to declare any 
//arguments in order for it to accept arguments

function regularFunctionWithArguments(){
    console.log(JSON.stringify(arguments));
}

regularFunctionWithArguments(1,2, 'third argument');