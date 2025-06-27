# Discount Systems

A modern, minimalist web application for calculating customer discounts based on client type and purchase amount.

## Description

This is a client-side discount calculator that applies different discount rates based on customer classification. The application features a clean, modern interface with smooth animations and responsive design.

### Features

- **Customer Classification**: Support for New, Regular, and VIP customers
- **Dynamic Discount Calculation**: Automatic discount application based on customer type and purchase amount
- **Modern UI**: Clean, minimalist design with smooth animations
- **Responsive Design**: Works perfectly on desktop and mobile devices
- **Real-time Results**: Instant calculation display without page refresh

## Project Structure

```text
Discount Systems/
├── README.md
├── src/
│   ├── index.html          # Main HTML file
│   ├── scripts/
│   │   ├── main.js         # Entry point and initialization
│   │   └── modules/
│   │       ├── logic.js    # Form handling and event management
│   │       └── process.js  # Discount calculation logic
│   └── styles/
│       └── global.css      # All styling and responsive design
```

## How to Run

Simply open `src/index.html` directly in your web browser.

## How It Works

### Discount Rules

The application applies discounts based on the following criteria:

| Customer Type | Condition | Discount Rate |
|---------------|-----------|---------------|
| **New** | Any purchase | 0% |
| **Regular** | Purchase ≥ $100,000 | 5% |
| **Regular** | Purchase < $100,000 | 0% |
| **VIP** | Any purchase | 15% |

### Application Flow

1. **User Input**: Customer enters their name, selects client type, and inputs purchase amount
2. **Form Validation**: HTML5 validation ensures all fields are completed
3. **Discount Calculation**: JavaScript processes the data using the discount rules
4. **Result Display**: The application shows a detailed summary including:
   - Customer name and type
   - Original purchase amount
   - Applied discount percentage
   - Final amount after discount

#### Code Organization

- **Modular Architecture**: Separation of concerns with dedicated modules
- **Event-Driven**: Form submission handled with modern event listeners
- **Functional Programming**: Pure functions for calculations
- **Error Handling**: Graceful handling of invalid inputs

#### Key Functions

```javascript
// Main form processing
processForm() // Handles form submission and data extraction

// Discount calculation
resultForm(userName, clientType, cost) // Calculates and displays results
```

## License

This project is open source and available under the [MIT License](LICENSE).
