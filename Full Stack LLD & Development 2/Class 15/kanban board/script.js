const addRef = document.querySelector(".add");
const crossRef = document.querySelector(".cross");
const cardsCollectionRef = document.querySelector(".cardsCollection");
const modalRef = document.querySelector(".modal");
const modalTextRef = document.querySelector(".modal .modal-left textarea");
const selectCategoryRef = document.querySelectorAll(".modal-right .category");

const tasks = [];

// ............................................................
// ..........................Home..............................
// ............................................................
// Toggle Modal View
function toggleModal() {
  if (modalRef.classList.contains("hide")) {
    modalRef.classList.remove("hide");
    categoryEvents();
    defaultSelectCategory();
  } else {
    modalRef.classList.add("hide");
  }
}
// Working of Create task Button
addRef.addEventListener("click", function () {
  toggleModal();
});

// Creating New Card.
function createCard(newTask) {
  const newCard = document.createElement("div");
  newCard.className = "card";
  newCard.innerHTML = `<div class="card-category ${newTask.Category}"></div><div class="card-id">${newTask.Id}</div><div class="card-detailes">${newTask.Details}</div><div class="card-delete"><i class="fa-solid fa-trash"></i></div>`;
  cardsCollectionRef.appendChild(newCard); // Adding newcard to DOM.
  tasks.push(newTask); // Adding newTask to Array.
  console.log(tasks); //
  deleteCard(newCard, newTask);
}
// Delete Card
function deleteCard(newCard, newTask) {
  const deleteCardIconRef = newCard.querySelector(".fa-solid");
  deleteCardIconRef.addEventListener("click", function (event) {
    deleteCardIconRef.parentElement.parentElement.remove(); //removing Card from DOM
    const selectedTaskRef = tasks.findIndex((task) => task.Id === newTask.Id);
    tasks.splice(selectedTaskRef, 1); //removing Card from Array
    console.log(tasks); //
  });
}
// .........................................................

// Add Card
modalTextRef.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    const selectedRef = document.querySelector(
      ".modal-right .category.selected"
    );
    const dataAttributeRef = selectedRef.getAttribute("data-attribute");
    // Creating Object
    const newTask = {
      Id: Math.random(),
      Details: event.target.value,
      Category: dataAttributeRef,
    };
    createCard(newTask); //based on the newTask object data CreateCard will create Card
    toggleModal(); // hide the modal again
    event.target.value = ""; //Setting value back to null for next Card Appear
  }
});

//.................................................................
// ...........................Modal................................
//.................................................................
// Select Category
function categoryEvents() {
  selectCategoryRef.forEach(function (category) {
    category.addEventListener("click", function (event) {
      removeSelectedFromALL(); //removing selected categories
      event.target.classList.add("selected");
    });
  });
}
// remove all selected categories
function removeSelectedFromALL() {
  selectCategoryRef.forEach(function (category) {
    category.classList.remove("selected");
  });
}
// Select Default Category
function defaultSelectCategory() {
  removeSelectedFromALL();
  const defaultSelectRef = document.querySelector(".modal-right .c1.category");
  defaultSelectRef.classList.add("selected");
}
