// index.js

// imports
import { processDataUser } from "./process.js";

const form = document.getElementById("userForm");
const resultContainer = document.getElementById("result");

// Add an event listener to the form to handle submission
form.addEventListener("submit", (event) => {
  event.preventDefault(); // Prevent the default form submission behavior

  const name = document.getElementById("name").value;
  const age = parseInt(document.getElementById("age").value);

  resultContainer.innerHTML = processDataUser(name, age);
});
