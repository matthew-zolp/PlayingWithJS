//Generator functions are declared with the * asterisk after the word function. They execute until the yield keyword is encountered.
//If the yield keyword is not encountered, the generator function will terminate.
function* createRangeOfNumbers(start = 0, end = Infinity, step = 1) {
    let count = 0;
    for (let i = start; i < end; i += step) {
        count ++;
        yield i;
    }
}
let range = createRangeOfNumbers(1,20,2);
console.log(range.next());
console.log(range.next());
console.log(range.next());
console.log(range.next());
console.log(range.next());
console.log(range.next());
console.log(range.next());
console.log(range.next());
console.log(range.next());
console.log(range.next());
console.log(range.next());


const makeRandomNum = function*(upperLimit, howMany) {
    let cnt = 1;
    while (cnt <= howMany) {
      let rand = Math.floor(Math.random() * upperLimit) + 1;
      cnt++;
      yield rand;
    };
  };
  let rand100 = makeRandomNum(1000000000000000000, 5);
  console.log(rand100.next());
  console.log(rand100.next());
  console.log(rand100.next());
  console.log(rand100.next());
  console.log(rand100.next());
  console.log(rand100.next());


//Find the first occurrence of a restricted character
const findNumber = function*(string) {
    for(let i = 0; i < string.length; i++) {
        if(string[i] === 'a' || string[i] === 'b' || string[i] === 'c') {
            yield string[i];
        }
        else{
            break;
        }
    }
    return 'Character not allowed';
}
let findNum = findNumber('aaaabbbbdcccc');
console.log(findNum.next());  
console.log(findNum.next());  
console.log(findNum.next());  
console.log(findNum.next());  
console.log(findNum.next());  
console.log(findNum.next());  
console.log(findNum.next());  
console.log(findNum.next());  
console.log(findNum.next());  
console.log(findNum.next());  
