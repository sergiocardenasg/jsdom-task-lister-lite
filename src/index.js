document.addEventListener("DOMContentLoaded", () => {
  // your code here
  const taskList = document.getElementById("tasks");
  const form = document.getElementsByTagName("form");
  let entry = document.createElement("li");

  function toDo(event) {
    taskList.appendChild(entry);
    event.preventDefault();
  }
  
  form.addEventListener('submit', toDo);
});
