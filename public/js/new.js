document
  .getElementById("add-task-form")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // в дальнейшим убрать для отправки на локальный сервер
    const taskInput = document.getElementById("task-input").value;
    if (taskInput.trim() !== "") {
      const newTask = document.createElement("li");
      newTask.classList.add(
        "list-group-item",
        "d-flex",
        "align-items-center",
        "border-0",
        "mb-2",
        "rounded",
        "noneActiv",
        "my-between"
      );
      newTask.style.backgroundColor = "rgb(244, 246, 247)";
      newTask.innerHTML = `
        <input class="form-check-input me-2" type="checkbox" value="${taskInput}" aria-label="..."><span style="flex: 1 1 0%;">${taskInput}</span>
        <button class="btn btn-danger btn-sm delete-task"></button>
      `;

      document.querySelector(".list-group").appendChild(newTask);
      document.getElementById("task-input").value = "";
    }
  });
