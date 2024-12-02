let openBur = document.querySelector("#openBur");
let closeBur = document.querySelector("#closeBur");
let navigationItems = document.querySelector("#nav_items");

// set the display of the burger menu and the nav_items
const burgerEvent = (navigation, close, open) => {
  navigationItems.style.display = navigation;
  closeBur.style.display = close;
  openBur.style.display = open;
};

openBur.addEventListener("click", () => burgerEvent("flex", "block", "none"));

closeBur.addEventListener("click", () => burgerEvent("none", "none", "block"));
