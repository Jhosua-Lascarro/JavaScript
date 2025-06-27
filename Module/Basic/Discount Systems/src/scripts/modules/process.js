// process.js

export function resultForm(userName, TypeClient, costItem, discount = 0) {
  // Convert costItem to number
  const cost = parseFloat(costItem);

  // Calculate discount based on client type and cost
  switch (TypeClient) {
    case "new":
      discount = 0; // No discount for new clients
      break;
    case "regular":
      if (cost >= 100000) {
        discount = 0.05; // 5% discount for regular clients with purchases >= 100,000
      }
      break;
    case "vip":
      discount = 0.15; // 15% discount for VIP clients
      break;
    default:
      console.error("Unknown client type:", TypeClient);
      return;
  }

  // Calculate final cost after applying the discount
  const finalCost = cost * (1 - discount);
  const discountPercent = discount * 100;
  // Display the result
  return (document.getElementById("result").innerHTML = `
    <h2>Discount Summary</h2>
    <p>User: ${userName}</p>
    <p>Client Type: ${TypeClient}</p>
    <p>Original Cost: $${cost.toFixed(2)}</p>
    <p>Discount Applied: ${discountPercent}%</p>
    <p>Final Cost: $${finalCost.toFixed(2)}</p>
  `);
}
