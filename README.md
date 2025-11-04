🎮 Tic Tac Toe Game

A modern, neon-themed Tic Tac Toe game built with HTML, CSS, and JavaScript.
It’s fully responsive, lightweight, and perfect for two players to enjoy with style!

🖥️ Live Demo

https://sadhik0457.github.io/Tic-Tac-Toe-Game/

Desktop View : 

<img width="1908" height="903" alt="desktop-view" src="https://github.com/user-attachments/assets/d7a15784-7ace-414d-844d-83f4665521e5" />

Mobile View :

<img width="522" height="885" alt="mobile-view" src="https://github.com/user-attachments/assets/9d2e8447-d899-4206-96ca-c8969111b4c9" />


🧠 Project Overview

The goal of this project is to create a fun, interactive Tic Tac Toe game where:

Two players can play on the same device.

The app detects winners, draws, and restarts.

Scores are displayed and maintained until the page refreshes.

The interface is styled with a dark neon aesthetic using CSS.

⚙️ Technologies Used
Technology	Purpose
HTML5	Game layout and structure
CSS3	Styling, layout, animations, and responsiveness
JavaScript (ES6)	Game logic, scoring, and interactivity
Favicon (.jpeg)	Game icon in the browser tab
🧩 How I Built This Project (Full Step-by-Step Process)
1️⃣ Step 1 — Project Setup

Created a new folder named tic-tac-toe.

Inside it, made three files:

index.html → Game structure

style.css → Styling

script.js → Game logic

Added a favicon image Icon.jpeg for branding.

2️⃣ Step 2 — HTML Structure

In index.html, I created:

A <header> for the logo, turn indicator, and restart/menu buttons

A <main> section containing the 3×3 game grid made of buttons

A <section> for scores (X, O, and ties)

A footer for credits with © symbol

A modal popup for “How to Play” inside a dropdown menu

🧱 Structure Highlights:

<div class="board" id="board">
  <button class="cell" data-index="0"></button>
  ...
  <button class="cell" data-index="8"></button>
</div>

3️⃣ Step 3 — CSS Styling

In style.css, I:

Set a neon-dark background using an image and gradients

Styled the board using CSS Grid for the 3x3 layout

Gave each cell rounded corners, hover effects, and glowing shadows

Added styles for:

Turn indicator

Restart button

Dropdown menu

Modal “How to Play” popup

Footer with © Sadhik SK

💡 Background setup example:

body {
  background-image: url(./pngtree-abstract-gaming-neon-lines-background-image_16641427.jpg);
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}

4️⃣ Step 4 — JavaScript Logic (Game Functionality)

In script.js, I implemented:

An array to track each cell’s state (X, O, or empty)

Turn switching between players (X → O → X)

Win condition checking for all 8 possible combinations

Score updates for both players and ties

“Next Game” and “Restart” buttons

Local refresh reset for a clean restart

⚙️ Example code snippet:

const board = document.getElementById("board");
const cells = document.querySelectorAll(".cell");
let currentPlayer = "X";

function handleClick(e) {
  const cell = e.target;
  if (cell.textContent !== "") return;
  cell.textContent = currentPlayer;
  if (checkWin(currentPlayer)) {
    alert(`${currentPlayer} wins!`);
  }
  currentPlayer = currentPlayer === "X" ? "O" : "X";
}
cells.forEach(cell => cell.addEventListener("click", handleClick));

5️⃣ Step 5 — “How to Play” Dropdown

Added a Menu button with dropdown options:

🎮 “How to Play” (shows modal with steps)

↻ “Restart Game”

The dropdown and modal were created using HTML + small JS for open/close control.

6️⃣ Step 6 — Footer with Credits

Added a footer that stays fixed at the bottom:

<footer class="credits">
  © 2025 Game Designed & Developed by <span>Sadhik SK</span>
</footer>


It uses a transparent glass-style background to match the design.

7️⃣ Step 7 — Testing and Responsiveness

Tested on desktop and mobile browsers.

Verified smooth transitions, proper resizing, and accurate score logic.

Ensured restart and modal work properly.

8️⃣ Step 8 — Deploying on GitHub Pages

Create a new repository → tic-tac-toe

Upload all files (index.html, style.css, script.js, Icon.jpeg, preview.png)

Go to Settings → Pages

Under Branch, select main and / (root)

Click Save, then open the link shown (for example:
➜ https://sadhiksk.github.io/tic-tac-toe/)

🕹️ How to Play the Game

The game is played on a 3×3 grid.

Player 1 is X, Player 2 is O.

Each player clicks an empty box to place their symbol.

The first player to align 3 marks wins.

If all boxes are filled without a winner → Tie.

Click ↻ Restart to start again anytime.

Use the Menu → How to Play option to view instructions.

💻 How to Run Locally
# Clone this repo
git clone https://github.com/yourusername/tic-tac-toe.git

# Go into project folder
cd tic-tac-toe

# Open in browser
start index.html   # (Windows)
# or
open index.html    # (Mac)

✨ Features Summary
Feature	Description
🎨 Neon theme	Stylish glowing UI
👥 Two-player mode	X vs O
🧮 Score tracking	Saves until refresh
🔄 Restart option	Clears the board instantly
💬 Modal popup	Step-by-step "How to Play" guide
🧠 Smart logic	Checks for win or tie automatically
📱 Responsive	Works on mobile and desktop
👨‍💻 Developer

© 2025 Game Designed & Developed by Sadhik SK

“Every small project is a step towards mastery.”

👨‍💻 Developer

Name: Shaik Sadhik SK
Role: Front-End Developer / Web Enthusiast
Built With: ❤️ Passion for coding and creativity

🪄 License

This project is open-source — feel free to fork, modify, and improve it!
