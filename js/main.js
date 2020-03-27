document.addEventListener("DOMContentLoaded", function() {
  const appMenu = document.querySelector("#app-menu");
  const appMenuPopup = document.querySelector("#appMenuPopup");
  let isMenuOpen = false;

  appMenu.addEventListener("click", function() {
    if (isMenuOpen) {
      appMenuPopup.classList.add("d-none");
      isMenuOpen = false;
    } else {
      appMenuPopup.classList.remove("d-none");
      isMenuOpen = true;
    }
  });
});
