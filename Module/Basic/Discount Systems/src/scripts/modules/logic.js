// logic.js

// imports
import { resultForm } from "./process.js";

export function processForm() {
  const form = document.getElementById("discountForm");

  form.addEventListener("submit", (event) => {
    event.preventDefault(); // Prevent form submission

    const userName = new FormData(form).get("user");
    const TypeClient = new FormData(form).get("client");
    const costItem = new FormData(form).get("cost");

    return resultForm(userName, TypeClient, costItem);
  });
}
