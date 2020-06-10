import { renderNavBar } from "./nav_bar";
import { renderMain } from "./main_page";
import { renderMenu } from "./menu_page";

export const content = document.getElementById("content");

renderNavBar();
renderMain();

// const logobutton = document.getElementById("logo");
// logobutton.addEventListener("click", () => {
//   content.innerHTML = "";
//   renderNavBar();
//   renderMain();
// });

// const menuButton = document.getElementById("menu");
// menuButton.addEventListener("click", () => {
//   content.innerHTML = "";
//   renderNavBar();
//   renderMenu();
// });

console.log("Webpack is working correctly!");
