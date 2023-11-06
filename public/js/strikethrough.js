const checkboxes = document.querySelectorAll('input[type="checkbox"]');
checkboxes.forEach(function (checkbox) {
  checkbox.addEventListener("change", function () {
    const listItem = this.closest(".list-group-item");
    if (this.checked) {
      listItem.style.textDecoration = "line-through"; // Применить перечеркивание
    } else {
      listItem.style.textDecoration = "none"; // Убрать перечеркивание
    }
  });
});
