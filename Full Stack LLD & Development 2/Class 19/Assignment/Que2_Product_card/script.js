const containerRef = document.querySelector("#container");

function newElement(title, category, rate, count) {
  const newEleRef = document.createElement("div");
  newEleRef.classList.add("card");
  newEleRef.innerHTML = `
    <div class="details">
    <span class="product__name"
      >${title}</span
    >
    <br />
    <span class="product__category">${category}</span>
    <div class="all__star">
      <span class="star__notfilled">&#9734;</span>
      <span class="star__notfilled">&#9734;</span>
      <span class="star__notfilled">&#9734;</span>
      <span class="star__notfilled">&#9734;</span>
      <span class="star__notfilled">&#9734;</span>
    </div>
    <div class="rating__count">Rating Count : <span>${count}</span></div>
  </div>
  <div class="btn">
    <button class="btn__buy">Buy Now</button>
  </div>`;
  const ratingRef = newEleRef.querySelectorAll(".star__notfilled");
  fillRating(ratingRef, rate);
  containerRef.appendChild(newEleRef);
}

function fillRating(ratingRef, rate) {
  let val = 1;
  ratingRef.forEach((ele) => {
    if (val <= Number(rate)) {
      ele.classList.replace("star__notfilled", "star__filled");
      ele.innerHTML = `&#9733`;
      val++;
    }
  });
  console.log(rate);
}

data.forEach((ele) => {
  const title = ele.title;
  const category = ele.category;
  const rate = ele.rating.rate;
  const count = ele.rating.count;
  newElement(title, category, rate, count);
});
