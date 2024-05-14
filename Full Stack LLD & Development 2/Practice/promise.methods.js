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

// 1. Promise All : Wait till all promise get complete
// ==> if any promise doesnt get complete it will not show data.
Promise.all([myFetch(1000, 1), myFetch(2000, 2), myFetch(4000, 5)])
  .then((data) => console.log(data))
  .catch((err) => console.log(err));

// 2. Promise AllSettled : Wait till all promise get complete.
// ==> if any promise doesnt get complete still shows data.
Promise.allSettled([myFetch(1000, 1), myFetch(2000, 2), myFetch(4000, 6)])
  .then((data) => console.log(data))
  .catch((err) => console.log(err));

// 3. Promise.race : whichever promise will execute first get returned.
Promise.race([myFetch(1000, 1), myFetch(2000, 2), myFetch(3000, 3)])
  .then((data) => console.log(data))
  .catch((err) => console.log(err));
