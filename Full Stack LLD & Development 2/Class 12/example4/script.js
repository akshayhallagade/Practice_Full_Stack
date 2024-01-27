const section1Ref = document.querySelector("#s1");
const section2Ref = document.querySelector("#s2");
const section3Ref = document.querySelector("#s3");
const bodyref = document.querySelector("body");
document.addEventListener("keyup", function (event) {
  // Go to section 1
  if (event.key === "1") {
    section1Ref.scrollIntoView();
  }
  // Go to section 2
  else if (event.key === "2") {
    section2Ref.scrollIntoView();
  }
  // Go to section 3
  else if (event.key === "3") {
    section3Ref.scrollIntoView();
  }
  // Go to top
  else if (event.key === "t") {
    window.scrollBy(
      0,
      -getComputedStyle(bodyref)["height"].split("px")[0] //This find the height of HTML page.
    );
  }

  //   Go to last
  else if (event.key == "b") {
    window.scrollBy(
      0,
      document.querySelector("html").getBoundingClientRect().height //This find the height of HTML page.
    );
  }
});
