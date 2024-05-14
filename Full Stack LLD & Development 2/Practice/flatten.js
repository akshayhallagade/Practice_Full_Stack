// # Sample Input:
const obj = {
  newObj: {
    obj2: {
      obj5: {
        one: 1,
      },
    },
  },
  obj3: {
    obj4: {
      two: 2,
    },
  },
  details: {
    akshay: {
      age: 20,
    },
  },
  somedetails: {
    money: 30,
  },
};

function flatten(obj, newStr = "") {
  const resultObject = {};

  for (let key in obj) {
    str = newStr ? `${str},${key}` : key;
    if (typeof obj[key] === "object") {
      Object.assign(resultObject, flatten(obj[key], str));
    } else {
      //   str = `${str},${key}`;
      resultObject[str] = obj[key];
    }
  }
  return resultObject;
}

console.log(flatten(obj));
