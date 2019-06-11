'use strict';

const itemInput = document.querySelector("#inputNewToDo");
const inputButton = document.querySelector(".save");
const ul = document.querySelector(".todo-list");

function sanitizeString(str) {
  str = str.replace(/[^a-z0-9áéíóúñü \.,_-]/gim, "");
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
    } else { alert("A todo item can not be blank!") };
    this.displayList(); // refreshes list
    itemInput.value = ""; // clears out input box
  },
  displayList: function() {
    this.todos.forEach(item => {
      // for each to do item, display it as a li
      let text = `<li><i id="checkbox" class="far fa-circle"></i> ${sanitizeString(item.content)}</li>`;
      ul.insertAdjacentHTML("beforeend", text)
    });
  },
  markComplete: function() {
    
  }
}

document.addEventListener('click', function (e) {
  if (e.target && e.target.id == 'checkbox') {
    e.target.classList.toggle('fa-check-circle');
    e.target.classList.toggle('fa-circle');
  }
});

ul.addEventListener('click',function(event) {
  console.log(event.target);
});


inputButton.addEventListener('click', function () {
  app.addItem(itemInput.value); //adds whatever is in input box
});

document.addEventListener("keyup", function (event) {
  if (event.keyCode == 13) {
    app.addItem(itemInput.value)
  }
});