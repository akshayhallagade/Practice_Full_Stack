const inputRef = document.querySelectorAll(".input");

inputRef.forEach((ele) => {
  ele.addEventListener("keyup", (e) => {
    if (Number(e.key) >= 0 && Number(e.key) <= 9) {
      console.log("backspace");
      const val = e.target.nextElementSibling;
      if (val !== null) val.focus();
    }
  });
  ele.addEventListener("keydown", (e) => {
    if (e.key === "Backspace" || e.key === "Delete") {
      e.target.value = "";
      if (!e.target.value) {
        const val = e.target.previousElementSibling;
        if (val !== null) val.focus();
      }
    }
  });
});
