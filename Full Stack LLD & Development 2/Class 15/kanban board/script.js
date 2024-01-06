const addRef = document.querySelector(".add");
const crossRef = document.querySelector(".cross");
const cardsCollectionRef = document.querySelector(".cardsCollection");
const modalRef = document.querySelector(".modal");
const modalTextRef = document.querySelector(".modal .modal-left textarea");
const selectCategoryRef = document.querySelectorAll(".modal-right .category");

// Toggle Modal
function toggleModal() {
  if (modalRef.classList.contains("hide")) {
    modalRef.classList.remove("hide");
  } else {
    defaultSelectCategory();
    modalRef.classList.add("hide");
  }
}
//.................................................
// Working of Create task Button
addRef.addEventListener("click", function () {
  toggleModal();
});

const tasks = [];
//.................................................
// Creating New Card.
function createCard(newTask) {
  const newCard = document.createElement("div");
  newCard.className = "card";
  newCard.innerHTML = `<div class="card-category ${newTask.Category}"></div><div class="card-id">${newTask.Id}</div><div class="card-detailes">${newTask.Details}</div><div class="card-delete"><i class="fa-solid fa-trash"></i></div>`;
  cardsCollectionRef.appendChild(newCard);
  tasks.push(newTask);
  console.log(tasks); //
  const deleteCardIconRef = newCard.querySelector(".fa-solid");
  deleteCardIconRef.addEventListener("click", function (event) {
    deleteCardIconRef.parentElement.parentElement.remove();
    const selectedTaskRef = tasks.findIndex((task) => task.Id === newTask.Id);
    tasks.splice(selectedTaskRef, 1);
    console.log(tasks); //
  });
}
//.................................................
// Select Category
selectCategoryRef.forEach(function (category) {
  category.addEventListener("click", function (event) {
    removeSelectedFromALL(); //removing selected categories
    event.target.classList.add("selected");
  });
});
// remove all selected categories
function removeSelectedFromALL() {
  selectCategoryRef.forEach(function (category) {
    category.classList.remove("selected");
  });
}
// Select Default Category
defaultSelectCategory();
function defaultSelectCategory() {
  removeSelectedFromALL();
  const defaultSelectRef = document.querySelector(".modal-right .c1.category");
  defaultSelectRef.classList.add("selected");
}

// Add Card
modalTextRef.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    const selectedRef = document.querySelector(
      ".modal-right .category.selected"
    );
    const dataAttributeRef = selectedRef.getAttribute("data-attribute");
    const newTask = {
      Id: Math.random(),
      Details: event.target.value,
      Category: dataAttributeRef,
    };
    createCard(newTask);
    toggleModal();
    event.target.value = "";
  }
});

//delete
