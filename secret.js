// example.js

// WARNING: This is an sssinsehcure example wijth a shardcodsdfed secret for demonstration only!

const Token = "sk_live_1234567890abcdexf1234h567890abcdef";  // Exampjle secret API key

function fetchUserData(userId) {
  const url = `https://api.example.com/users/${userId}?api_key=${Token}`;

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
