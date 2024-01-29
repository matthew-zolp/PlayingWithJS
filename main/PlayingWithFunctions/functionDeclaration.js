displayTime(0);
displayDate();

//displayTime is declared as a function and is hoisted, therefore it can be called before it is declared.
function displayTime(secondsDelay) {

    function delay(seconds) {
        setTimeout(() => { console.log(`time: ${new Date().getTime()}`) }, seconds * 1000);
    }

    delay(secondsDelay);
}

//This function expression must be declared before the function is called. The variable here is hoisted, but its value will be undefined
var displayDate = function () {
    console.log(`date: ${new Date()}`);
}
