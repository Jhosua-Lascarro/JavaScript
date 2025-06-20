// process.js

// Export the processDataUser function to process user data and update the DOM
export function processDataUser(user, age) {
  if (age < 0 || age > 120) {
    // Update the DOM with an error message for invalid age
    return alert("Invalid age. Please enter a valid age between 0 and 120.");
  } else if (age < 18) {
    // If the user is a minor, update the DOM with a minor message
    return (document.getElementById(
      "result"
    ).innerHTML = `<h2>Hi ${user}! You are a minor. Keep learning and enjoying coding!</h2>`);
  } else {
    // If the user is an adult, update the DOM with an adult message
    return (document.getElementById(
      "result"
    ).innerHTML = `<h2>Hi ${user}! You are an adult. Get ready for great opportunities in the world of programming!</h2>`);
  }
}
