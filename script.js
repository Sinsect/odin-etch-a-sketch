const gridContainer = document.querySelector("#grid-container")

let rowCount = 16;
let colCount = 16; 
gridContainer.style.lineHeight = '0px';
for (let i = 0; i < rowCount; i++) {
    for (let j = 0; j < colCount; j++) {
        let div = document.createElement('div');
        div.classList.add('gridDiv');
        let divSquareSize = '20px'
        div.style.minWidth = divSquareSize;
        div.style.minHeight = divSquareSize;
        div.style.display = 'inline-block';
        div.style.backgroundColor = 'pink';
        div.style.border = 'solid';
        div.style.borderWidth = '1px';
        div.addEventListener(('mouseover'), () => {
            div.style.backgroundColor = 'red';
        });
        gridContainer.appendChild(div);
    }
    let breakLine = document.createElement('br');
    gridContainer.appendChild(breakLine);
}