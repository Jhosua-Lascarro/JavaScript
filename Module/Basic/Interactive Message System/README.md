<!-- README.md -->

# Interactive Message System

A JavaScript application that asks the user for their **name** and **age**, displaying personalized messages based on the entered age.

## How it works

1. The user enters their name and age in the web form.
2. The system validates the age:
   - If under 18, it shows an encouraging message for students.
   - If 18 or older, it shows a message for adults.
   - If the age is invalid, it displays an error message.
3. The result is shown on the web page.

## Project Structure

```plaintext
Interactive Message System/
├── README.md
└── src/
    ├── pages/
    │   ├── form.html
    │   └── index.html
    ├── scripts/
    │   ├── index.js
    │   └── process.js
    └── styles/
        └── index.css
```

- `index.html` and `form.html`: User interface.
- `index.js`: Main interaction logic.
- `process.js`: Processes and displays messages based on age.
- `styles/`: CSS styles for the application.

## Requirements

- Good programming practices and commented code.
- Clear structure and documentation.
- Manual tests with different inputs (under 18, 18 or older, invalid age).

## Usage

1. Open `src/pages/index.html` in your browser.
2. Enter the requested data and check the displayed message.
