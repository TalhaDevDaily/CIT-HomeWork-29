// DOM list
const assignNull = document.querySelector(".assign-null");
const assignTask = document.querySelector(".assign-task");
const taskInput = document.querySelector(".task-input");
const toDoList = document.querySelector(".to-do-list");

const handleAddTask = function () {
  if (!taskInput.value) {
    assignNull.innerHTML = `You can't do nothing. There's always something to do`;
    assignTask.style = "outline: 0.2rem solid red; border-radius: 1rem;";
  } else {
    assignNull.innerHTML = ``;
    assignTask.style = "outline: none;";
    // Creating Single To Do
    const createSingleToDo = document.createElement("div"); // Create Tags
    toDoList.appendChild(createSingleToDo); // Append Child element
    createSingleToDo.classList.add("single-to-do"); // Adding Class Name

    // Creating Input
    const showInput = document.querySelector("input"); // Create Tags
    createSingleToDo.appendChild(showInput); // Append Child element
  }
};
