function createGridSquares(row, col) {
  const container = document.querySelector(".container");
  while (container.firstChild) {
    container.removeChild(container.lastChild);
  }
  for (let i = 0; i < row; i++) {
    let row = document.createElement("div");
    row.classList.add("row");
    for (let j = 0; j < col; j++) {
      let square = document.createElement("div");
      square.classList.add("square");
      square.addEventListener("mouseover", (event) => {
        let color = getRandomColor();
        square.setAttribute("style", `background:${color};`);
      });
      row.appendChild(square);
    }
    container.appendChild(row);
  }
}

function initializeGrid() {
  let squarePerSide = prompt("How many square should be the grid?");
  if (squarePerSide) {
    if (isNaN(squarePerSide) || squarePerSide < 1 || squarePerSide > 100) {
      alert("Please use a number from 1 to 100");
      return;
    }
    createGridSquares(squarePerSide, squarePerSide);
  }
}

function getRandomColor() {
  return "#" + Math.floor(Math.random() * 16777215).toString(16);
}
document.querySelector(".init").addEventListener("click", initializeGrid);
