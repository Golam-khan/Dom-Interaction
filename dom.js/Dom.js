const username= "Golam";
const welcomeMsg = document.getElementById("welcome-msg");
welcomeMsg.textContent += username === "" ? 'Guest' : username;
