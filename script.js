const gridContainer = document.querySelector('#grid-container');
let rowCount = 16;
let colCount = 16;
let containerWidth = 500;
gridContainer.style.width = containerWidth + 'px';
gridContainer.style.height = gridContainer.style.width;
//create grid of pink squares, size default 16x16
function makeGrid() {
    for (let i = 0; i < rowCount; i++) {
        for (let j = 0; j < colCount; j++) {
            let div = document.createElement('div');
            div.classList.add('gridDiv');
            //turn squares red on hover
            div.addEventListener(('mouseover'), () => {
                div.style.backgroundColor = 'red';
            });
            gridContainer.appendChild(div);
        }
        let breakLine = document.createElement('br');
        gridContainer.appendChild(breakLine);
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
    let currentSize = colCount;
    let newSize = prompt('dimensions? (max 100)', currentSize);
    if (!isNaN(newSize) && newSize >= 0 && newSize <= 100) {
        colCount = newSize;
        rowCount = newSize;
        deleteGrid();
        makeGrid();
    }
    else {
        prompt('Invalid input!');
    }
});