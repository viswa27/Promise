function callback(num1, num2, total) {
  let ans = num1 * num2 - num2;
  total(ans);
}

function output(ans) {
  console.log("Total is : " + ans);
}

callback(5, 6, output);

function printNumWithDelay() {
  let num = 1;

  function numPrint() {
    console.log(num);

    if (num < 7) {
      setTimeout(numPrint, num * 1000);
      num++;
    }
  }
  numPrint();
}

printNumWithDelay();

function delay(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

function printNumbersWithDelay() {
  let num = 1;

  function printNumber() {
    console.log(num);

    if (num < 7) {
      num++;
      delay(num * 1000).then(printNumber);
    }
  }

  printNumber();
}

printNumbersWithDelay();

function checkArgument(arg) {
  return new Promise((resolve, reject) => {
    if (arg === "yes") {
      resolve("Promise Resolved");
    } else {
      reject("Promise Rejected");
    }
  });
}

checkArgument("yes").then(console.log).catch(console.error);

checkArgument().then(console.log).catch(console.error);

function delay1(value, ms) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(value);
    }, ms);
  });
}

function delayExecution(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

async function executeDelayed() {
  console.log('Execute...');
  await delayExecution(2000);
  console.log('Delayed execution complete!');
}

executeDelayed();

const promise1 = delay1("Hai", 2000);
const promise2 = delay1("Caney", 1000);
const promise3 = delay1("@", 1500);

Promise.all([promise1, promise2, promise3])
  .then((results) => {
    console.log(results.join(" "));
  })
  .catch((error) => {
    console.error("Error:", error);
  });
