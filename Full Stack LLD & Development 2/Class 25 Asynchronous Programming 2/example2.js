// Promise

new Promise(function (resolve, reject) {
  var passingScore = 30;
  var markGet = 40;
  setTimeout(function () {
    // resolve shows successfull task.
    if (passingScore <= markGet) resolve("Passed !");
    // reject shows unsuccessfull task.
    else reject("Failed");
  }, 5000);
})
  .then(function (data) {
    // capture data
    console.log(data);
  })
  .catch(function (err) {
    // capture error
    console.log(err);
  });

// Then and Catch are ......"Try and Catch".... methods.
// then () -> method is used to handle the resolved promise value.
// If the promise is fulfilled successfully, i.e., no errors occurred during its execution.
// Catch () -> They will catch the error, if any error occurs in a promise chain and shows it.
