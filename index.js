// add task
let form = document.querySelector("#add-task");
let input = document.querySelector("#todo-input");
let todoBox = document.querySelector("#to-do");
let clearBtn = document.querySelector("#clear-btn");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const newInput = input.value;

  if (!newInput) return;
  const newTask = document.createElement("p");
  newTask.classList.add("task");
  newTask.setAttribute("draggable", "true");
  newTask.innerHTML = newInput;
  newTask.addEventListener("dragstart", () => {
    newTask.classList.add("inprogress");
  });
  newTask.addEventListener("dragend", () => {
    newTask.classList.remove("inprogress");
  });

  todoBox.appendChild(newTask);
  input.value = "";
});

clearBtn.addEventListener("click", () => {
  let removeTask = document.querySelectorAll(".task");
  removeTask.forEach((task) => {
    task.remove();
  });
});

let boxes = document.querySelectorAll(".box");
let tasks = document.querySelectorAll(".task");

tasks.forEach((task) => {
  task.addEventListener("dragstart", () => {
    task.classList.add("inprogress");
  });
  task.addEventListener("dragend", () => {
    task.classList.remove("inprogress");
  });
});

boxes.forEach((box) => {
  box.addEventListener("dragover", (e) => {
    e.preventDefault();
    let drag = document.querySelector(".inprogress");
    box.appendChild(drag);
  });
});
