// Get all the cells
const cells = document.querySelectorAll('.cell');

// Add click event listener to each cell
cells.forEach(cell => {
  cell.addEventListener('click', () => {
    // Remove highlight class from all cells
    cells.forEach(cell => {
      cell.classList.remove('highlight');
    });

    // Add highlight class to clicked cell
    cell.classList.add('highlight');

    // Get the parent square of the clicked cell
    const square = cell.parentNode;

    // Get all the cells in the parent square
    const squareCells = square.querySelectorAll('.cell');

    // Add highlight class to all cells in the parent square
    squareCells.forEach(squareCell => {
      squareCell.classList.add('highlight');
    });

    // Get the index of the clicked cell within its parent square
    const cellIndex = Array.from(squareCells).indexOf(cell);

    // Get the index of the parent square within the grille
    const squareIndex = Array.from(document.querySelectorAll('.square')).indexOf(square);

    // Get the index of the row and column within the square
    const rowIndex = Math.floor(cellIndex / 3);
    const columnIndex = cellIndex % 3;

    // Calculate the index of the row and column within the grille
    const grilleRowIndex = Math.floor(squareIndex / 3) * 3 + rowIndex;
    const grilleColumnIndex = (squareIndex % 3) * 3 + columnIndex;

    // Get all the cells in the same row and column
    const grilleRowCells = document.querySelectorAll(`.grille .square:nth-child(${grilleRowIndex + 1}) .cell`);
    const grilleColumnCells = document.querySelectorAll(`.grille .square .cell:nth-child(${grilleColumnIndex + 1})`);

    // Add highlight class to all cells in the same row and column
    grilleRowCells.forEach(rowCell => {
      rowCell.classList.add('highlight');
    });

    grilleColumnCells.forEach(columnCell => {
      columnCell.classList.add('highlight');
    });
  });
});
