const deleteButtons = document.querySelectorAll(".delete-task");
deleteButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const taskItem = button.closest(".list-group-item");
    taskItem.remove();
  });
});
