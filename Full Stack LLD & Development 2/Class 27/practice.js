var arr = ["gfl", "gf2", "gf3", "gf4"];
// Output: ["GF_1","GF_1,"GF_1,"GF_1"]

const output = [];
arr.forEach((element) => {
  output.push(element.replace("gf", "GF_"));
});
console.log(output);

if (!Array.prototype.myFilter) {
  Array.prototype.myFilter = function (callback, ch) {
    const output = [];
    for (let i = 0; i < this.length; i++) {
      const isTrue = callback(this[i], ch, this);
      if (isTrue) {
        output.push(this[i]);
      }
    }
  };
}
