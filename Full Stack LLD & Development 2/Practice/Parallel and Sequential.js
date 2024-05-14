const myFetch = function (delay, limit) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (limit > 5) reject("Not of limit.");
      else resolve("Run Succefully. :" + limit);
    }, delay);
  });
};

const promise1 = myFetch(3000, 4);
const promise2 = myFetch(5000, 1);
const promise3 = myFetch(2000, 2);

// // Parallel Promise
// promise1.then((data) => console.log(data)).catch((err) => console.log(err));
// promise2.then((data) => console.log(data)).catch((err) => console.log(err));
// promise3.then((data) => console.log(data)).catch((err) => console.log(err));

// ........................................................
// Sequential Promise
promise1
  .then((data) => {
    console.log(data);
    return promise2;
  })
  .then((data) => {
    console.log(data);
    return promise3;
  })
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(err);
  });
