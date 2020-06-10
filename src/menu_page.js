import { content } from "./index";

export function renderMenu() {
  let wrapper = document.createElement("div");
  wrapper.id = "wrapper";
  let menu1 = document.createElement("div");
  menu1.id = "menuGrid";
  let menu2 = document.createElement("div");
  menu2.id = "menuGrid";
  menu1.innerHTML = `Git Push - £8.95<br>
  Beef, cheese, bacon, grilled onions, ketchup and mustard <br><br>

  Git Pull - £9.95<br>
  Beef, cheese, bacon, onion rings and BBQ sauce<br><br>

  Git Merge - £10.95<br>
  Crispy chicken, grilled onions, pickles, ranch dressing on sourdough bread<br><br>

  Git rm -r -f -q - £12.95<br>
  Beef, cheese, lettuce, grilled onion, grilled chilli's and flamethrower sauce<br><br>`;

  menu2.innerHTML = `Soft Drinks<br><br>

  Coca Cola - £2.60<br><br>

  Coke Zero - £2.60<br><br>

  Sprite - £2.60<br><br>

  Spring Water - £2.10`;

  content.appendChild(wrapper);
  wrapper.appendChild(menu1);
  wrapper.appendChild(menu2);
}
