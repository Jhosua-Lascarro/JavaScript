// process.js

// Returns the message string based on user and age
export function getUserMessage(user, age) {
  if (age < 0 || age > 120) {
    // If the age is invalid, return an error message
    return "Invalid age. Please enter a valid age between 0 and 120.";

  } else if (age < 18) {
    // If the age is under 18, return a different message
    return `Hi ${user}! You are a minor. Keep learning and enjoying coding!`;

  } else {
    // If the age is 18 or older, return a different message
    return `Hi ${user}! You are an adult. Get ready for great opportunities in the world of programming!`;

  }
}
