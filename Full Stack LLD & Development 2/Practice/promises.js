new Promise((resolve, reject) => {
  var passingScore = 30;
  var markGet = 35;
  if (passingScore <= markGet) resolve("passed !");
  else reject("Failed !");
})
  .then((data) => console.log(data))
  .catch((err) => console.log(err));
