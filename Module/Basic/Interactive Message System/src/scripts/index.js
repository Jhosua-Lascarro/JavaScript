// index.js

// imports
import { getUserMessage } from "./message.js";

const userForm = document.getElementById("userForm");
const nameInput = document.getElementById("name");
const ageInput = document.getElementById("age");
const result = document.getElementById("result");

// Event listener for form submission
userForm.addEventListener("submit", (event) => {
  event.preventDefault(); // Prevent form submission

  const userName = nameInput.value.trim();
  const userAge = parseInt(ageInput.value, 10);

  if (userName && !isNaN(userAge)) {
    const message = getUserMessage(userName, userAge);
    result.innerHTML = `<h2>${message}</h2>`;
  } else {
    result.innerHTML = "<h2>Please enter a valid name and age.</h2>";
  }
});
