// process.js

// imports
import { capitalize } from "./capitalize";

// Function to handle the form
export function handleForm() {

  // Get the values from the form fields
  const user = document.getElementById("name").value;
  const client = document.getElementById("client").value;
  const cost = parseFloat(document.getElementById("cost").value);
  let discount = 0;

  console.log(`User: ${user}, Client: ${client}, Cost: ${cost}`);

  if (isNaN(cost) || cost <= 0) {
    // Cost validation
    document.getElementById("result").innerHTML = `
                        <h2>Error</h2>
                        <p>Please enter a valid cost greater than zero.</p>
                `;
    return;

  } else if (client === "vip") {
    // Apply discount for VIP clients
    console.log("VIP client detected");
    discount = 0.15;

  } else if (client === "regular" && cost >= 200_000) {
    // Apply discount for regular clients with high cost
    console.log("Regular client with high cost detected");
    discount = 0.1;

  } else if (client === "new" && cost >= 100_000) {
    // Apply discount for new clients with high cost
    console.log("New client with high cost detected");
    discount = 0.05;

  }

  // Show the calculation results
  document.getElementById("items").innerHTML = `
                <h2>Discount Calculation Result</h2>
                <p>User: ${capitalize(user)}</p> 
                <p>Client: ${client}</p>
                <p>Price: $${cost}</p>
                <p>Discounted: ${discount * 100}%</p>
                <p>Final Price: $${(cost * (1 - discount)).toFixed(2)}</p>
        `;
}
