const buttonAll = document.getElementById("all-tab");
const buttonComp = document.getElementById("compl-tab");
const buttonUncomp = document.getElementById("uncompl-tab");

buttonComp.onclick = () => {
  const tasks = document.querySelectorAll(".list-group-item");
  console.log("Ебать");

  tasks.forEach(function (task) {
    const checkbox = task.querySelector('input[type="checkbox"]');
    if (checkbox.checked) {
      task.style.display = "none !important";
      console.log("Ебать 2");
    } else {
      task.style.display = "block";
    }
  });
};
//функция работает но не ставиться именно task.style.display = "none !important";
// надо понять почему и дописать
console.log("Button All:", buttonAll);
console.log("Button Completed:", buttonComp);
console.log("Button Uncompleted:", buttonUncomp);
