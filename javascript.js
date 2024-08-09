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
        square.setAttribute("style", "background:black;");
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

document.querySelector(".init").addEventListener("click", initializeGrid);
