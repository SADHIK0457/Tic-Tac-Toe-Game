/* Tic-Tac-Toe game logic */
const boardEl = document.getElementById('board');
const cells = Array.from(document.querySelectorAll('.cell'));
const turnIndicator = document.getElementById('turnText');
const turnDot = document.querySelector('.turn-dot');
const restartBtn = document.getElementById('restartBtn');
const resultBanner = document.getElementById('resultBanner');
const resultText = document.getElementById('resultText');
const nextBtn = document.getElementById('nextBtn');
const scoreXEl = document.getElementById('scoreX');
const scoreOEl = document.getElementById('scoreO');
const scoreTiesEl = document.getElementById('scoreTies');

let board = Array(9).fill('');
let currentPlayer = 'X';
let isGameOver = false;

/* Win combos */
const WIN_COMBOS = [
  [0,1,2],[3,4,5],[6,7,8], // rows
  [0,3,6],[1,4,7],[2,5,8], // cols
  [0,4,8],[2,4,6]          // diagonals
];

/* Score storage */
const scoresKey = 'tic_scores_v1';
let scores = loadScores();
scores = { X: 0, O: 0, TIE: 0 };
 renderScores();
;


/* initialize UI */
function init(){
  cells.forEach(cell => {
    cell.addEventListener('click', onCellClick);
    cell.textContent = '';
    cell.classList.remove('mark-x','mark-o');
    cell.disabled = false;
  });
  board = Array(9).fill('');
  isGameOver = false;
  currentPlayer = 'X';
  updateTurnUI();
  hideResult();
  renderScores();
}

/* handle cell click */
function onCellClick(e){
  const index = Number(e.currentTarget.dataset.index);
  if(isGameOver || board[index]) return;

  placeMark(index, currentPlayer);
  animateCell(e.currentTarget, currentPlayer);

  const winnerCombo = checkWin(currentPlayer);
  if(winnerCombo){
    endGame(currentPlayer, winnerCombo);
    return;
  }

  if(board.every(Boolean)){
    endGame(null, null); // draw
    return;
  }

  swapTurn();
}

/* place mark */
function placeMark(index, player){
  board[index] = player;
  const cell = cells[index];
  cell.textContent = player;
  cell.classList.add(player === 'X' ? 'mark-x' : 'mark-o');
  cell.disabled = true;
}

/* simple animation */
function animateCell(cellEl, player){
  cellEl.animate([
    { transform: 'scale(0.6)', opacity:0 },
    { transform: 'scale(1.05)', opacity:1 },
    { transform: 'scale(1)', opacity:1 }
  ], { duration: 220, easing: 'cubic-bezier(.2,.8,.2,1)' });
}

/* swap turn */
function swapTurn(){
  currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
  updateTurnUI();
}

/* update the turn indicator UI */
function updateTurnUI(){
  turnIndicator.textContent = `${currentPlayer}'s TURN`;
  turnDot.style.background = currentPlayer === 'X' ? getComputedStyle(document.documentElement).getPropertyValue('--accent-x') : getComputedStyle(document.documentElement).getPropertyValue('--accent-o');
  // set slight color inline for dot to pick up css variables
  turnDot.style.background = currentPlayer === 'X' ? '#30d5c8' : '#f6c24b';
}

/* check for win - returns winning combo or null */
function checkWin(player){
  for(const combo of WIN_COMBOS){
    if(combo.every(i => board[i] === player)){
      return combo;
    }
  }
  return null;
}

/* highlight winning cells and show result */
function endGame(winner, combo){
  isGameOver = true;
  if(winner){
    // highlight
    combo.forEach(i => {
      cells[i].style.boxShadow = `0 8px 30px ${winner === 'X' ? 'rgba(48,213,200,0.12)' : 'rgba(246,194,75,0.12)' } inset`;
    });
    showResult(`${winner} WINS!`);
    updateScore(winner);
  } else {
    showResult(`It's a TIE`);
    updateScore('TIE');
  }
}

/* show result banner */
function showResult(msg){
  resultText.textContent = msg;
  resultBanner.hidden = false;
}

/* hide result */
function hideResult(){
  resultBanner.hidden = true;
}

/* score functions */
function loadScores(){
  try {
    const raw = localStorage.getItem(scoresKey);
    if(raw) return JSON.parse(raw);
  } catch(e){/* ignore */}
  return { X: 0, O: 0, TIE: 0 };
}
function saveScores(){
  try { localStorage.setItem(scoresKey, JSON.stringify(scores)); } catch(e){}
}
function updateScore(winner){
  if(winner === 'X') scores.X++;
  else if(winner === 'O') scores.O++;
  else scores.TIE++;
  saveScores();
  renderScores();
}
function renderScores(){
  scoreXEl.textContent = scores.X;
  scoreOEl.textContent = scores.O;
  scoreTiesEl.textContent = scores.TIE;
}

/* Restart board but keep scores */
function restartBoard(){
  cells.forEach(el => {
    el.textContent = '';
    el.classList.remove('mark-x','mark-o');
    el.disabled = false;
    el.style.boxShadow = '';
  });
  board = Array(9).fill('');
  isGameOver = false;
  currentPlayer = 'X';
  updateTurnUI();
  hideResult();
}

/* Hard reset all (scores too) */
function hardResetAll(){
  scores = { X:0, O:0, TIE:0 };
  saveScores();
  renderScores();
  restartBoard();
}

/* Reset button */
restartBtn.addEventListener('click', () => {
  restartBoard();
});

/* Next game button (in banner) */
nextBtn.addEventListener('click', restartBoard);

/* Right click to clear scores (convenience) */
restartBtn.addEventListener('contextmenu', (e) => {
  e.preventDefault();
  if(confirm('Reset scores and board?')) hardResetAll();
});

/* init app */
init();
