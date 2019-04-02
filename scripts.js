let todos = [];

function addItem(item) {
  const ul = document.querySelector(".todo");
  ul.innerHTML = "";
  todos.push(item);
}

function removeItem(index) {
  todos.pop(index);
}

function editItem(index, input) {
  todos[index] = input;
}

function displayList() {
  todos.forEach(item => {
    // for each to do item, display it as a li
    const ul = document.querySelector(".todo");
    let li = document.createElement("li");
    li.textContent = item;
    ul.appendChild(li);
  });
}

const itemInput = document.querySelector("#inputNewToDo");
const inputButton = document.querySelector(".save");

inputButton.addEventListener("click", function() {
  addItem(itemInput.value);
  displayList();
  itemInput.value = '';
});
