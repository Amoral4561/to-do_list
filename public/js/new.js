const addTaskForm = document.getElementById("add-task-form");
const taskInput = document.getElementById("task-input");
const activeTasksList = document.getElementById("active-tasks");
const completedTasksList = document.getElementById("completed-tasks");
const uncompletedTasksList = document.getElementById("uncompleted-tasks");

addTaskForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const taskText = taskInput.value.trim();

  if (taskText !== "") {
    const taskItem = document.createElement("li");
    taskItem.classList.add(
      "list-group-item",
      "d-flex",
      "align-items-center",
      "border-0",
      "mb-2",
      "rounded"
    );
    taskItem.style.backgroundColor = "#f4f6f7";
    // переписать от сюда

    const checkbox = document.createElement("input");
    checkbox.classList.add("form-check-input", "me-2");
    checkbox.type = "checkbox";
    checkbox.value = taskText;
    checkbox.setAttribute("aria-label", "...");
    checkbox.addEventListener("change", () => {
      taskItem.style.textDecoration = checkbox.checked
        ? "line-through"
        : "none";
    });

    const taskTextElement = document.createElement("span");
    taskTextElement.innerText = taskText;
    taskTextElement.style.flex = "1";

    const deleteButton = document.createElement("button");
    deleteButton.classList.add("btn", "btn-danger", "btn-sm", "delete-task");
    deleteButton.innerHTML = '<i class="fas fa-times"></i>';
    deleteButton.addEventListener("click", () => {
      taskItem.remove();
    });

    taskItem.appendChild(checkbox);
    taskItem.appendChild(taskTextElement);
    taskItem.appendChild(deleteButton);

    activeTasksList.appendChild(taskItem);
    taskInput.value = "";
  }
});
