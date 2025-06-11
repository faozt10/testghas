// Vulnerable to reflected XSS
const userInput = location.hash.slice(1);  // Takes untrusted input from URL fragment
const outputElement = document.getElementById('output');  // Assume an element with ID 'output' exists
outputElement.textContent = userInput;                    // Safely display input as plain text
