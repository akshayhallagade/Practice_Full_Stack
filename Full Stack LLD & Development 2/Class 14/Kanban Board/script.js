const categoryRef = document.querySelector(".category");
const addRef = document.querySelector(".add");
const crossRef = document.querySelector(".cross");
const cardsCollectionRef = document.querySelector(".cardsCollection");
const modalRef = document.querySelector(".modal");
const modalTextRef = document.querySelector(".modal .modal-left textarea");
const cardDetailesRef = document.querySelectorAll(".card-detailes");

function toggleModal() {
  if (modalRef.classList.contains("hide")) {
    modalRef.classList.remove("hide");
  } else {
    modalRef.classList.add("hide");
  }
}

addRef.addEventListener("click", function () {
  toggleModal();
});

// Creating New Card.
function createCard(taskCategory, taskId, taskDetails) {
  const newCard = document.createElement("div");
  newCard.className = "card";
  newCard.innerHTML = `<div class="card-category ${taskCategory}"></div> <div class="card-id">${taskId}</div><div class="card-detailes">${taskDetails}</div>.`;
  return newCard;
}

// Add Card
modalTextRef.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    const taskCategory = "c1";
    const taskId = Math.random();
    const taskDetails = event.target.value;
    cardsCollectionRef.append(createCard(taskCategory, taskId, taskDetails));
    console.log("Enter is hitted.");
    toggleModal();
    event.target.value = "";
  }
});
