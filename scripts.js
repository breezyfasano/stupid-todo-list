'use strict';

const itemInput = document.querySelector("#inputNewToDo");
const inputButton = document.querySelector(".save");

let app = {
  todos: [],
  addItem: function (item) {
    const ul = document.querySelector(".todo-list");
    ul.innerHTML = "";
    this.todos.push(item);
  },
  displayList: function () {
    this.todos.forEach(item => {
      // for each to do item, display it as a li
      const ul = document.querySelector(".todo-list");
      let text = `<li><i id="checkbox" class="far fa-circle" onclick="app.removeItem()"></i> ${item}</li>`;
      ul.insertAdjacentHTML("beforeend", text)
    });
  },
}

document.addEventListener('click', function (e) {
  if (e.target && e.target.id == 'checkbox') {
    if (e.target.classList.contains('fa-circle')) {
      // e.target.classList.toggle('fa-circle');
      e.target.classList.toggle('fa-check-circle');
    } else if (e.target.classList.contains('fa-check-circle')) {
      // e.target.classList.toggle('fa-check-circle');
      e.target.classList.toggle('fa-circle');
    }
  }
});

inputButton.addEventListener('click', function () {
  app.addItem(itemInput.value); //adds whatever is in input box
  app.displayList(); // refreshes list
  itemInput.value = ""; // clears out input box
});