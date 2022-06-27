const gridContainer = document.querySelector("#grid-container")

let rowCount = 16;
let colCount = 16; 
for (let i = 0; i < rowCount; i++) {
    for (let j = 0; j < colCount; j++) {
        let div = document.createElement('div');
        let divSquareSize = '20px'
        div.style.minWidth = divSquareSize;
        div.style.minHeight = divSquareSize;
        div.style.display = 'inline-block';
        div.style.border = 'solid';
        div.style.backgroundColor = 'pink';
        div.style.marginRight = '4px';
        gridContainer.appendChild(div);
    }
    let breakLine = document.createElement('br');
    gridContainer.appendChild(breakLine);
}