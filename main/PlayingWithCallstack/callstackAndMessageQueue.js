var cnt = 1;
console.log(cnt);
var id = setInterval(function() {
  cnt++
  if (cnt > 5) {
    clearInterval(id);
  }
  console.log(cnt);
}, 0);
console.log(cnt);
while (cnt < 5) {
  cnt++;
}
//The code runs as follows: The 'cnt' variable is initialized to 1 and then logged to the console. 
//This is the first 1 that is displayed. The 'setInterval' is called and is handled by the browser. 
//After the time expiration, the function is added to the message queue. However, 
//before it is picked up by the call stack, the remaining code must finish running. 
//Therefore, another console log statement prints another 1, and then the while loop increments 'cnt' to 5. 
//Now the stack is empty so the function added to the message queue is picked up.  
//The 'cnt' variable is incremented to 6. It is now greater than 5 so 'clearInterval' is executed, 
//which stops the 'setInterval' from running. And then the final value of 'cnt' (6) is logged to the console.