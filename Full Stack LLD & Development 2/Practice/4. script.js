// addEventListener keydown if (key>0 and key <10) shift the focus.
// focus shift --> nextElementSibling.
// if (backspace or delete) previsousElementSibling

const otpRef = document.querySelectorAll(".otp");

otpRef.forEach((element) => {
  element.addEventListener("keyup", function (e) {
    if (Number(e.key) > 0 && Number(e.key) < 10)
      e.target.nextElementSibling?.focus();
  });
  element.addEventListener("keyup", function (e) {
    if (e.key == "Backspace" || e.key == "Delete") {
      e.target.value = undefined;
      e.target.previousElementSibling?.focus();
    }
  });
});
