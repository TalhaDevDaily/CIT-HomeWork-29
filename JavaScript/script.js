// DOM list
const taskInput = document.querySelector(".task-input");
const toDoList = document.querySelector(".to-do-list");
const assignNull = document.querySelector(".assign-null");

const handleAddTask = function () {
  if (!taskInput.value) {
    assignNull.innerHTML = `You can't do nothing. There's always something to do`;
  } else {
    assignNull.innerHTML = ``;
    console.log(taskInput.value);
  }
};
