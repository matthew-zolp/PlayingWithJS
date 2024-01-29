
function logger(str) {
    console.log("Logger" + ": " + str);
}

let intervalId;
function clear(){
    clearInterval(intervalId);
};

function connectToServer(){
    const myPromise = new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve("foo");
        }, 2000);
      });
      return myPromise;
}

async function getData() {
    await connectToServer().then(() => console.log("Connected to server")); //Code in function will await 2s for the return of the promise
    intervalId = setInterval(logger, 1501, 'interval');//logger: interval will be run on an interval of 1501ms starting in 1501ms
    setTimeout(logger, 1500, 'timeout');//logger: timeout will run before interval and print one statement to the console after 1500ms
    setTimeout(clear, 5000);//logger : interval will run an additional two times, clearing after 5000ms
}

getData();

