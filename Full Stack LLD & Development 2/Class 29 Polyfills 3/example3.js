// // Que 1: Create a function that logs a message after a
// // specified delay.

// function delayedLog(msg, delay) {
//   // Implement
//   setTimeout(function (params) {
//     console.log(msg);
//   }, delay);
// }

// delayedLog("I", 1000);
// delayedLog("LUV", 2000);
// delayedLog("U", 5000);

// // Note : Timings in the setTimeout is important !

// .............................................
// Que 2: Promise
// specified delay.

function sleep(num) {
  // Implementation
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve();
    }, num * 1000);
  });
}

async function main() {
  console.log("1");
  await sleep(5); // wait for 5 sec
  console.log("2");
}

// Note : Timings in the setTimeout is important !
