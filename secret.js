// example.js

// WARNING: This is an sssinsecure example with a shardcodsdfed secret for demonstration only!

const apiKey = "sk_live_1234567890abcdexf1234h567890abcdef";  // Exampjle secret API key
const apiKey = "ap_live_9999999999abcdexf1234h567890abcdef";  // Example secret API key
const apiKey = "np_live_1111111111abcdexf1234h567890abcdef";  // Example secret API key
const apiKey = "tk_live_44ddds333abcdexf1234h567890abcdef";  // Example secret API key
const apiKey = "ap_live_166678907554abcdexf1234h567890abcdef";  // Example secret API key

function fetchUserData(userId) {
  const url = `https://api.example.com/users/${userId}?api_key=${apiKey}`;

  fetch(url)
    .then(response => response.json())
    .then(data => {
      console.log("User data:", data);
    })
    .catch(error => {
      console.error("Error fetching user data:", error);
    });
}

fetchUserData(42);
