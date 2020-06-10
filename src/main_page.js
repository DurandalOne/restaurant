import { content } from "./index";

export function renderMain() {
  //creating landing page text
  let centerText = document.createElement("div");
  centerText.id = "center-text";
  centerText.innerHTML = "Open sourced burgers. Pushed to you.";

  content.appendChild(centerText);
}
