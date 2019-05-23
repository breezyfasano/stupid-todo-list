'use strict';

const itemInput = document.querySelector("#inputNewToDo");
const inputButton = document.querySelector(".save");

let app = {
  todos: [],
  addItem: function (item) {
    const ul = document.querySelector(".todo-list");
    ul.innerHTML = "";
    this.todos.push(item + " ");
  },
  removeItem: function(index) {
    this.todos.pop(index);
  },
  editItem: function(index, input) {
    this.todos[index] = input;
  },
  displayList: function() {
    this.todos.forEach(item => {
      // for each to do item, display it as a li
      const ul = document.querySelector(".todo-list");
      let li = document.createElement("li");
      li.innerHTML = item;
      let checkbox = document.createElement("input");
      checkbox.type = "checkbox";
      ul.appendChild(li);
      li.appendChild(checkbox);
    });
  },
}

inputButton.addEventListener("click", function () {
  app.addItem(itemInput.value); //adds whatever is in input box
  app.displayList(); // refreshes list
  itemInput.value = ""; // clears out input box
});

