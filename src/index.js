document.addEventListener("DOMContentLoaded", () => {
  // your code here
  const taskList = document.getElementById("tasks");
  const form = document.getElementById("create-task-form");
  
  function toDo(event) {
    let entry = document.createElement("li");
    let textNode = document.createTextNode(document.getElementById("new-task-description").value + " ");
    entry.appendChild(textNode);
    taskList.appendChild(entry);
    event.preventDefault();

    event.target.reset();

    let deleteTask = document.createElement("button");
    deleteTask.textContent = "X";
    entry.appendChild(deleteTask);

    function deleteItem() {
        document.getElementById("tasks").removeChild(entry);
    }

    deleteTask.addEventListener("click", deleteItem);
  }
  
  form.addEventListener('submit', toDo);
});
