//global variables, the form itself, the button, a result element.. on click will show the possible moves within a chess board
let form = document.getElementById("chessKnight")
let knightBtn = document.getElementById("button")
let result = document.getElementById("result")
// let totalMoves = docuemnt.getElementById("totalMoves")
knightBtn.addEventListener("click", showPossibleMoves)


//this is the function tha allows the total nubmer of moves to be dsiplaed to the UI/console
function showPossibleMoves() {
  let cell = form.value
  // convert letter to number   // this is the total size of the grid  8x8
  let x = parseInt(cell.substring(0,1).charCodeAt() - 64)
  let y = parseInt(cell.substring(1,2))

  //all possible knight moves as an array of objects
  let knightMoves = [
    {x:2, y:-1},{x:2, y:1},{x:1, y:-2},{x:1, y:2},
    {x:-2, y:-1},{x:-2, y:1},{x:-1, y:-2},{x:-1, y:2}
  ]
  //possible moves will be shown here
  let possibleMoves = []
  //for loop will iterate through the total number of moves that is possible based on the value entered into the form
  for(let m of knightMoves) {
    let row = String.fromCharCode(x + m.x + 64)
    let column = y+m.y
    //this will add all moves to the array and then will return the new length (since possible moves started out at a blank value, the arrary is returned will all possible moves). 
    possibleMoves.push(row + "" + column)
  }
  //console logging the coordinates of all of those moves, as well as the total number of moves possible.
  console.log('Possible Coordinates:', possibleMoves);
  result.innerHTML = possibleMoves.toString();
  //this is what will shwo in the HTML, regarding total number of moves..  the line above will return each item in the array in the URL.
  result.innerHTML = possibleMoves.length.toString()

}