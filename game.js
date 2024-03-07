console.log('Welcome to Tic-Tac-Toe! Enjoy!')

//create an array of cells (we have 9 cells):
let cells = document.getElementsByTagName('TD')
console.log(cells)

//The default starting player will be noughts, and the game should only be over when it has met the winning conditions. We'll refer to these in later code, but they need to be declared at this point.
let noughtsTurn = true
let gameIsOver

// create check for win function: if a symbol appears three times in a row in the board cells, the game is over
function checkForWin(symbol) {
  // HORIZONTAL LINES //

  if (
    cells[0].innerHTML == symbol &&
    cells[1].innerHTML == symbol &&
    cells[2].innerHTML == symbol
  )
    gameIsOver = true
  else if (
    cells[3].innerHTML == symbol &&
    cells[4].innerHTML == symbol &&
    cells[5].innerHTML == symbol
  )
    gameIsOver = true
  else if (
    cells[6].innerHTML == symbol &&
    cells[7].innerHTML == symbol &&
    cells[8].innerHTML == symbol
  )
    gameIsOver = true

  // VERTICAL LINES //
  if (
    cells[0].innerHTML == symbol &&
    cells[3].innerHTML == symbol &&
    cells[6].innerHTML == symbol
  )
    gameIsOver = true
  else if (
    cells[1].innerHTML == symbol &&
    cells[4].innerHTML == symbol &&
    cells[7].innerHTML == symbol
  )
    gameIsOver = true
  else if (
    cells[2].innerHTML == symbol &&
    cells[5].innerHTML == symbol &&
    cells[8].innerHTML == symbol
  )
    gameIsOver = true

  // DIAGONAL LINES //
  if (
    cells[0].innerHTML == symbol &&
    cells[4].innerHTML == symbol &&
    cells[8].innerHTML == symbol
  )
    gameIsOver = true
  else if (
    cells[2].innerHTML == symbol &&
    cells[4].innerHTML == symbol &&
    cells[6].innerHTML == symbol
  )
    gameIsOver = true

  // Update the subtitle if the game is over

  if (gameIsOver) {
    // update the subtitle with the winner
    document.getElementById('subtitle').innerHTML =
      'Game Over! ' + symbol + ' is the winner! Well Done'
  }
}

// function for handling clicks on cell
function cellClicked(e) {
  // Create a variable for the clicked cell so i can do stuff with ti
  let cell = e.target

  //create a variable for symble
  let symbol = ''

  // figure out which symbol to put inside the cell ("O" or "X" based on the naughtsTurn Boolean) using Ternary Operatpr
  noughtsTurn ? (symbol = 'O') : (symbol = 'X')

  //put the symbol inside the cell (by using .innerHTML)
  cell.innerHTML = symbol

  //check to see if the player won with that move
  checkForWin(symbol)

  //if the game is not  over, switch to the other player (using the naughtsTurn boolean)
  if (!gameIsOver) {
    noughtsTurn = !noughtsTurn
  }
}

//Binding the cellClicked method (aka when i click on a cell, do what i want in the function cellClick )
for (i = 0; i < cells.length; i++) {
  cells[i].onclick = cellClicked //note that you don't have the '()' after cellClicked
}
