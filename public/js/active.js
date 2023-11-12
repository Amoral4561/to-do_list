function active(button) {
  const parentNavItem = button.closest(".nav-item");
  const allNavItem = document.querySelectorAll(".nav-item");
  allNavItem.forEach(function (item) {
    if (item.classList.contains("my-active")) {
      item.classList.remove("my-active");
    }
  });
  parentNavItem.classList.add("my-active");
}
export { active };
