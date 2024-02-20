const starsRef = document.querySelectorAll(".fa-star");
const resultRef = document.querySelector(".result a");

let stars = 0;
starsRef.forEach((item) => {
  item.addEventListener("click", function (e) {
    stars = Number(e.target.getAttribute("data-id"));
    resultRef.innerText = stars;
    setValue(stars);
  });
  item.addEventListener("mouseover", function (e) {
    setValue(Number(e.target.getAttribute("data-id")));
  });
  item.addEventListener("mouseleave", function (e) {
    setValue(stars);
  });
});

function setValue(stars) {
  starsRef.forEach((item) => {
    if (Number(item.getAttribute("data-id")) <= stars)
      item.classList.replace("fa-regular", "fa-solid");
    else {
      item.classList.replace("fa-solid", "fa-regular");
    }
  });
}
