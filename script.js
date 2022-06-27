const gridContainer = document.querySelector('#grid-container');
let containerWidth = gridContainer.offsetWidth;
console.log("cont width: " + containerWidth);
let gridSize = 16;
//create grid of pink squares, size default 16x16
function makeGrid() {
    let boxSize = (containerWidth / gridSize) + 'px';
    console.log("box width: " + boxSize);
    for (let i = 0; i < gridSize * gridSize; i++) {
        let div = document.createElement('div');
        div.classList.add('gridDiv');
        div.style.width = boxSize;
        div.style.height = boxSize;
        //turn squares red on hover
        div.addEventListener(('mouseover'), () => {
            div.style.backgroundColor = 'red';
        });
        gridContainer.appendChild(div);
    }
}
function deleteGrid() {
    while (gridContainer.firstChild) {
        gridContainer.removeChild(gridContainer.firstChild);
    }
}
makeGrid();
const resizeButton = document.querySelector('#resize-button');
resizeButton.addEventListener(('click'), () => {
    let currentSize = gridSize;
    let newSize = prompt('dimensions? (max 100)', currentSize);
    if (!isNaN(newSize) && newSize >= 0 && newSize <= 100) {
        gridSize = newSize;
        deleteGrid();
        makeGrid();
    }
    else {
        prompt('Invalid input!');
    }
});