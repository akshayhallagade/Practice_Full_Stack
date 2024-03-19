// Paraller Promise

// const list = [{}, {}, {}];

// const myFetch = function (limit, delay, name) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (limit > 10) reject("Not of Limit");
//       else resolve(name);
//     }, delay);
//   });
// };

// const promise1 = myFetch(1, 1000, "Promise1");
// const promise2 = myFetch(3, 2000, "Promise2");
// const promise3 = myFetch(5, 5000, "Promise3");

// promise1.then((res) => console.log(res)).catch((err) => console.log(err));
// promise2.then((res) => console.log(res)).catch((err) => console.log(err));
// promise3.then((res) => console.log(res)).catch((err) => console.log(err));

// myFetch(1, 1000, "Promise1")
//   .then((data) => {
//     console.log(data);
//     return myFetch(2, 2000, "Promise2");
//   })
//   .then((data) => {
//     console.log(data);
//     return myFetch(3, 5000, "Promise3");
//   })
//   .then((data) => {
//     console.log(data);
//   });

const POST_URL = "https://jsonplaceholder.typicode.com/posts/1";
const USER_URL = "https://jsonplaceholder.typicode.com/user/1";
const COMMENTS_URL = "https://jsonplaceholder.typicode.com/comments/1";

function fetchData(url) {
  return fetch(url)
    .then((data) => console.log(data))
    .catch((err) => console.log(err));
}

fetchData(POST_URL)
  .then((data) => {
    console.log(data);
    return fetchData(USER_URL);
  })
  .then((data) => {
    console.log(data);
    return fetchData(COMMENTS_URL);
  })
  .then((data) => console.log(data));
