let array = [1,2,3,4,5,6,7,8,9,10,11,12];
let finishedArray = [];
export function arrayMethodsExample(array){
    console.log('Push : Adds item to the end' + '\n' + 'Pop : Takes item off the end' + '\n' + 'unshift : Adds item to the beginning' + '\n' + 'shift : Takes item off the beginning' + '\n');
    for (let item of array) {
        console.log('Processing item :' + item);
        if(item > 3){
            finishedArray.push(item);
            console.log('In item > 3, calling push(): ' + JSON.stringify(finishedArray));
        }
        if(item > 5){
            finishedArray.pop();
            console.log('In item > 5, calling pop(): ' + JSON.stringify(finishedArray));
        }
        if(item > 7){
            finishedArray.unshift(item);
            console.log('In item > 7, calling unshift(): ' + JSON.stringify(finishedArray));
        }
        if(item > 9){
            finishedArray.shift();
            console.log('In item > 9, calling shift(): ' + JSON.stringify(finishedArray));
        }
    }
}

arrayMethodsExample(array);
