function closure() {
  let val = 0;
  return function () {
    val++;
    console.log(val);
  };
}

const akshaysClosure = closure;
console.log(akshaysClosure());
