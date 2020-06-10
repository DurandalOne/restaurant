import { content } from "./index";

export function renderContact() {
  let wrapper = document.createElement("div");
  wrapper.id = "wrapper";

  let contact = document.createElement("div");
  contact.id = "contactContent";
  contact.innerHTML = `Telephone: 020 7946 0303<br><br>

Opening Hours: <br><br>

Monday: 11:00 - 22:00<br>
Tuesday: 11:00 - 22:00<br>
Wednesday: 11:00 - 22:00<br>
Thursday: 11:00 - 22:00<br>
Friday: 11:00 - 22:00<br>
Saturday: 10:00 - 23:00<br>
Sunday: 10:00 - 23:00<br>`;

  content.appendChild(wrapper);
  wrapper.appendChild(contact);
}
