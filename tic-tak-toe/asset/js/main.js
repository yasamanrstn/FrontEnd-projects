const cells = document.querySelectorAll(".cell");

const winningCombination = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

let currentPlayer = "X";

const handleClick = (e) => {
  const cell = e.target;

  if (cell.textContent === "") {
    cell.textContent = currentPlayer;

    cell.classList.add(currentPlayer.toLowerCase());

    if (checkWin()) {
      alert(`${currentPlayer} wins!`);
      resetGame();
    } else if (isDraw()) {
      alert("The game is a draw!");
      resetGame();
    } else {
      currentPlayer = currentPlayer === "X" ? "O" : "X";
    }
  }
};

const checkWin = () => {
  return winningCombination.some((combination) => {
    return combination.every((index) => {
      return cells[index].textContent === currentPlayer;
    });
  });
};

const isDraw = () => {
  return [...cells].every((cell) => cell.textContent !== "");
};

const resetGame = () => {
  cells.forEach((cell) => {
    cell.textContent = "";
    cell.classList.remove("x", "o");
  });
  currentPlayer = "X";
};

cells.forEach((cell) => cell.addEventListener("click", handleClick));

document.getElementById("reset").addEventListener("click", resetGame);
