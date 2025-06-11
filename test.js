// Vulnerable to reflected XSSdddhh
const userInput = location.hash.slice(1);  // Takes untrusted input from URL fragment
document.write(userInput);                  // Writes input directly to the page without sanitization
