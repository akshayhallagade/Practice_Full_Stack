if (!Array.prototype.forEach) {
  Array.prototype.myForEach = function (callback) {
    for (i = 0; i < this.length; i++) {
      callback(this[i], i);
    }
  };
}

if (!Array.prototype.map) {
Array.prototype.myMap = function (callback) {
  const output = [];
  for (let i = 0; i < this.length; i++) {
    output.push(callback(this[i], i));
  }
  return output;
};
}

if (!Array.prototype.filter) {
  Array.prototype.myFilter = function (callback) {
    const output = [];
    for (let i = 0; i < this.length; i++) {
      if (callback(this[i], i)) output.push(this[i]);
    }
    return output;
  };
}

if (Array.prototype.reduce) {
  Array.prototype.myReduce = function (callback, initializer = 0) {
    let total = initializer;
    for (let i = 0; i < this.length; i++) {
      total = callback(total, this[i]);
    }
    return total;
  };
}
// }

if (Array.prototype.filter) {
  Array.prototype.filter = function (callback) {
    const output = [];
    for (let i = 0; i < this.length; i++) {
      if (callback(this[i])) output.push(this[i]);
    }
    return output;
  };
}

if (Promise.all) {
  Promise.myAll = function (PArray) {
    return new Promise((resolve, reject) => {
      const completedTask = 0;
      const data = [];
      PArray.forEach((item) => {
        Promise.resolve(item)
        .then((res) => {
          completedTask++;
          data.push(res);
        }).catch((err) => reject(err))
        if (completedTask == Array.length) resolve(data);
      });
      reject("No Completed");
    });
  };
}

// const myPromise = Promise.all([promise1, promise2, promise3]);

// const result = Promise.allSettled([promise1, promise2, promise3]);

if (!Promise.allSettled){
    (Promise.myAllSetlled = function (promisesArray) {
        let output = [];
        let CompletedPromise = 0;
        return new Promise((resolve, reject) => {
            promisesArray.forEach((element) => {
          Promise.resolve(element)
            .then((res) => {
                output.push(res);
            })
            .catch((err) => {
              console.log(err);
            })
            .finally(() => {
                CompletedPromise++;
                if (CompletedPromise === promisesArray.length) resolve(output);
            });
        });
    });
    }),
}

if (!Promise.race){
    Promise.race = function (promiseArray) {
      return new Promise((resolve, reject) => {
        promiseArray.forEach((element) => {
          Promise.resolve(element)
            .then((res) => resolve(res))
            .catch((err) => reject(err));
        });
      });
    }
  }


if (!Object.deepcopy) {
  Object.deepcopy = function (value) {
    if (!Array.isArray(value) || typeof value !== "object") return value;

    let copy;
    if (Arrays.isArray(value)) {
      copy = [];
      for (let i = 0; i < value.length; i++) {
        copy[i] = Object.deepcopy(value[i]);
      }
    } else {
      copy = {};
      for (let key in value) {
        if (value.hasOwnProperty(key)) copy[key] = Object.deepcopy(value[key]);
      }
    }
  };
}

// [1, 2, 3, 4, 5].filter;

// if (!Array.prototype.filter) {
//   Array.prototype.filter = function (callback) {
//     const output = [];
//     for (let i = 0; i < this.length; i++) {
//       if (callback) output.push(this[i]);
//     }
//     return output;
//   };
// }

let var1 = 23;
let var2 = var1;

var1 = 54;

console.log(var1, var2);

function sum1(val1) {
  return function sum2(val2) {
    return function sum3(val3) {
      console.log(val1 + val2 + val3);
    };
  };
}

sum1(1)(3)(3);
