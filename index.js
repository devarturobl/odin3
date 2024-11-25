const container = document.querySelector(".container");
const totalCells = document.querySelector("button");

const renderGrid = (number) => {
  for (let i = 1; i <= number; i++) {
    container.innerHTML += "<div class='row'></div>";
  }
  const rows = document.querySelectorAll(".row");
  rows.forEach((row) => {
    for (let j = 1; j <= number; j++) {
      row.innerHTML += `<div class='cell' style='height: ${
        600 / number
      }px; width: ${600 / number}px;'></div>`;
    }
  });
  const cells = document.querySelectorAll(".cell");
  cells.forEach((cell) => {
    cell.addEventListener("mouseenter", (e) => {
      e.target.style.backgroundColor = "black";
    });
  });
};

const removeGrid = () => {
  container.innerHTML = "";
};

totalCells.addEventListener("click", () => {
  const userInput = prompt("enter a number between 1 and 40");
  if (userInput >= 1 && userInput <= 40) {
    removeGrid();
    renderGrid(userInput);
  } else {
    alert("Enter a valid number.");
  }
});

renderGrid(16);
