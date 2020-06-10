import { content } from "./index";

export function renderAbout() {
  let wrapper = document.createElement("div");
  wrapper.id = "wrapper";

  let about = document.createElement("div");
  about.id = "aboutContent";
  about.innerHTML = `GitBurger was born in 2007, when owner Deon Chapman took his concept of good basic burgers using quality ingredients and made it a reality. 
  Using only locally sourced local ingredients, you can taste the passion in every burger.
  Every burger is properly tested before they are committed and pushed to the menu.`;

  content.appendChild(wrapper);
  wrapper.appendChild(about);
}
