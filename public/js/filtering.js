const buttonAll = document.getElementById("all-tab");
const buttonComp = document.getElementById("compl-tab");
const buttonUncomp = document.getElementById("uncompl-tab");

buttonAll.onclick = () => {
  const tasks = document.querySelectorAll(".list-group-item");
  tasks.forEach(function (task) {
    if (task.classList.contains("hide")) {
      task.classList.remove("hide");
      task.classList.add("show");
      console.log(task.classList);
    }
  });
};

buttonComp.onclick = () => {
  const tasks = document.querySelectorAll(".list-group-item");
  tasks.forEach(function (task) {
    task.classList.remove("show", "hide"); // Удаляем все существующие классы
    const checkbox = task.querySelector('input[type="checkbox"]');
    if (checkbox.checked) {
      task.classList.add("show");
    } else {
      task.classList.add("hide");
    }
  });
};

buttonUncomp.onclick = () => {
  const tasks = document.querySelectorAll(".list-group-item");
  tasks.forEach(function (task) {
    task.classList.remove("show", "hide"); // Удаляем все существующие классы
    const checkbox = task.querySelector('input[type="checkbox"]');
    if (checkbox.checked) {
      task.classList.add("hide");
    } else {
      task.classList.add("show");
    }
  });
};
