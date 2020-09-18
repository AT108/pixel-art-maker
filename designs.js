//select color input
let colorInput = document.querySelector('#colorPicker');
//select size input
let sizeInput = document.querySelector('#sizePicker');

let row = document.getElementById('inputWidth');

let column = document.getElementById('inputHeight');

let theGrid = document.querySelector('#pixelCanvas');

//submitting size by the user and calling makeGrid function
sizeInput.addEventListener('submit', function(event){
  event.preventDefault();
  makeGrid(row.value, column.value);
});

//creating a grid
function makeGrid(row, column) {
  theGrid.innerHTML = "";
  for (var x = 1; x<=row; x++){
    let newRow = theGrid.insertRow(0);
    for (var y = 1; y<=column; y++){
      let newColumn = newRow.insertCell(0);
      newColumn.addEventListener('click', function(evt){
        evt.target.style.backgroundColor = colorInput.value;
      });
    }
  }
}
