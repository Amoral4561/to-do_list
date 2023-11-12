const buttonAll = document.getElementById("all-tab");
const buttonComp = document.getElementById("compl-tab");
const buttonUncomp = document.getElementById("uncompl-tab");

import { active } from "./active.js";

buttonAll.onclick = () => {
  const tasks = document.querySelectorAll(".list-group-item");

  active(buttonAll);

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

  active(buttonComp); // вызов модульнеой функции обработки активности

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

  active(buttonUncomp);

  const parentNavItem = buttonUncomp.closest(".nav-item");
  parentNavItem.classList.add("my-active");

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
