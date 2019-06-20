'use strict';

//variables & elements
const itemInput = document.querySelector("#inputNewToDo");
const clearButton = document.querySelector('.clear');
const inputButton = document.querySelector(".save");
const ul = document.querySelector(".todo-list");
const input = document.getElementById('inputNewToDo');
const addIcon = '<i class="fas fa-plus" style="color: white;"></i> ';

const checked = "fa-check-circle";
const unchecked = "fa-circle";

function sanitizeString(str) {
  str = str.replace(/[^a-z0-9áéíóúñü \.,_-]/gim, "");
  return str.trim();
}

//insert icon before input
input.insertAdjacentHTML('beforebegin', addIcon);

function sanitizeString(str){
  str = str.replace(/[^a-z0-9áéíóúñü \.,_-]/gim,"");
  return str.trim();
}

let app = {
  todos: [],
  todoItem: {
    content: "", id: 0, done: false
  },
  addItem: function(item) {    
    ul.innerHTML = "";
    let task = Object.create(this.todoItem);
    task.content = item;
    task.id = this.todoItem.id++;
    task.done = false;
    if (item) { //makes sure input is not blank
      this.todos.push(task);
      this.displayList(); // refreshes list
    } else { alert("A todo item can not be blank!") };
    itemInput.value = ""; // clears out input box
  },
  displayList: function() {
    this.todos.forEach(item => {
      let returnChecked = () => {
        if (!item.done) {
          return unchecked;
        } else return checked;
      };
      // for each to do item, display it as a li
      let text = `<li><i id="${item.id}" class="checkbox far ${returnChecked()}"></i><span> ${sanitizeString(item.content)}</span></li>`;
      ul.insertAdjacentHTML("beforeend", text)
    });
  },
  clearList: function() {
    ul.innerHTML = '';
    this.todos = [];
  }
}

document.addEventListener('click', function(event) {
  const element = event.target;
  if (element && element.classList.contains("checkbox")) {
    element.classList.toggle(checked);
    element.classList.toggle(unchecked);
    app.todos[element.id].done = false ? false : true;
  }
});


clearButton.addEventListener('click', function() {
  app.clearList();
});


document.addEventListener("keyup", function (event) {
  if (event.keyCode == 13) {
    app.addItem(itemInput.value)
  }
});