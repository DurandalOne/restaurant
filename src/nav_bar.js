import { content } from "./index";
import { renderMain } from "./main_page";
import { renderMenu } from "./menu_page";
import { renderAbout } from "./about_page";
import { renderContact } from "./contact_page";

export function renderNavBar() {
  //adding color overlay to backgroud image
  let overlay = document.createElement("div");
  overlay.classList = "overlay";

  //creating menu bar
  let topnav = document.createElement("div");
  topnav.classList = "topnav";

  //creating logo
  let logo = document.createElement("a");

  logo.id = "logo";
  logo.innerHTML = '<img src="git.png" id="burger">GitBurger';

  //creating navigation
  let about = document.createElement("a");
  let menu = document.createElement("a");
  let contact = document.createElement("a");

  about.id = "about";
  about.innerHTML = "About";
  menu.id = "menu";
  menu.innerHTML = "Menu";
  contact.id = "contact";
  contact.innerHTML = "Contact";

  content.appendChild(overlay);
  overlay.appendChild(topnav);
  topnav.appendChild(logo);
  topnav.appendChild(about);
  topnav.appendChild(menu);
  topnav.appendChild(contact);

  const logobutton = document.getElementById("logo");
  logobutton.addEventListener("click", () => {
    content.innerHTML = "";
    renderNavBar();
    renderMain();
  });

  const menuButton = document.getElementById("menu");
  menuButton.addEventListener("click", () => {
    content.innerHTML = "";
    renderNavBar();
    renderMenu();
  });

  const aboutButton = document.getElementById("about");
  aboutButton.addEventListener("click", () => {
    content.innerHTML = "";
    renderNavBar();
    renderAbout();
  });

  const contactButton = document.getElementById("contact");
  contactButton.addEventListener("click", () => {
    content.innerHTML = "";
    renderNavBar();
    renderContact();
  });
}
