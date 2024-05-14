function counter() {
  let init = 0; // lexical scope invi
  return function () {
    init = init + 1;
    console.log(init);
  };
}

const counter1 = counter();
counter1();
counter1();
counter1();
counter1();
counter1();
counter1();
counter1();
counter1();
counter1();

const counter2 = counter();
counter2();
counter2();
counter2();
counter2();
counter2();
