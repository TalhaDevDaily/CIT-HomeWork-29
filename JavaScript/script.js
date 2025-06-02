// DOM list
const assignNull = document.querySelector(".assign-null");
const assignTask = document.querySelector(".assign-task");
const taskInput = document.querySelector(".task-input");
const toDoList = document.querySelector(".to-do-list");
const toDoBreak = document.querySelector(".single-to-do--break");
const toDoBreak2 = document.querySelector(".single-to-do--break---2");

let i = 0;
const handleAddTask = function () {
  if (!taskInput.value) {
    assignNull.innerHTML = `You can't do nothing. There's always something to do`;
    assignTask.style = "outline: 0.2rem solid red; border-radius: 1rem;";
  } else if (taskInput.value == "string" || i < 5) {
    // for (let i = 0; i <= 5; i++) {
    //   if (i < 5) {
    //     console.log(i);
    //   } else if (i === 5) {
    //     toDoBreak.innerHTML = `Finish previous tasks first!`;
    //     toDoBreak2.innerHTML = `In order to increase your focus and accomplish your goals, you must focus on smaller chunks of tasks. And step by step we go!</span>`;
    //   }
    // }

    assignNull.innerHTML = ``;
    assignTask.style = "outline: none;";
    // Creating Single To Do
    const createSingleToDo = document.createElement("div"); // Create Tags
    toDoList.appendChild(createSingleToDo); // Append Child element
    createSingleToDo.classList.add("single-to-do"); // Adding Class Name

    // Creating Input
    const showInput = document.createElement("input"); // Create Tags
    createSingleToDo.appendChild(showInput); // Append Child element

    // set Attribute to To-Do List's Input Field
    showInput.setAttribute("readonly", "readonly");

    // Creating Edit Button
    const editButton = document.createElement("button"); // Create Tags
    createSingleToDo.appendChild(editButton); // Append Child element
    editButton.classList.add("edit"); // Adding Class Name
    editButton.innerHTML = '<ion-icon name="create-outline"></ion-icon>'; // Adding Content

    // Making Edit Button Functional
    editButton.addEventListener("click", function () {
      editButton.classList.toggle("editText");

      if (editButton.classList[1] === "editText") {
        showInput.removeAttribute("readonly", "readonly");
        showInput.style = "outline: 0.2rem solid #ffd700; border-radius: 1rem;";
        editButton.innerHTML = '<ion-icon name="save"></ion-icon>';
        deleteButton.style = "opacity: 0.2; pointer-events: none;";
        completeButton.style = "opacity: 0.2; pointer-events: none;";
      } else {
        showInput.setAttribute("readonly", "readonly");
        showInput.style = "outline: none;";
        editButton.innerHTML = '<ion-icon name="create-outline"></ion-icon>';
        deleteButton.style = "opacity: 1; pointer-events: auto;";
        completeButton.style = "opacity: 1 pointer-events: auto;";
      }
    });

    // Creating Delete Button
    const deleteButton = document.createElement("button"); // Create Tags
    createSingleToDo.appendChild(deleteButton); // Append Child element
    deleteButton.classList.add("delete"); // Adding Class Name
    deleteButton.innerHTML = '<ion-icon name="trash-outline"></ion-icon>'; // Adding Content

    // Making the Delete Button Functional
    deleteButton.addEventListener("click", function () {
      createSingleToDo.remove(); // Remove createSingleToDo that the delete button is in
    });
    // Creating Task Complete Button
    const completeButton = document.createElement("button"); // Create Tags
    createSingleToDo.appendChild(completeButton); // Append Child element
    completeButton.classList.add("done"); // Adding Class Name
    completeButton.innerHTML = `<ion-icon name="checkmark-done-outline"></ion-icon>`; // Adding Content

    showInput.value = taskInput.value;
    taskInput.value = "";
    i++;
  }
};
