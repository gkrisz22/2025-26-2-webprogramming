let state = {
    gridWidth: 10,
    gridHeight: 10,
    pixels: [], // 2D array: pixels[row][col] = "#rrggbb"
    currentColor: '#ff0000',
    
    pixelArts: []
};

function renderAll() {
    renderGrid();
}

function renderGrid() {
    console.log("Pixels: ", state.pixels)
    const rows = state.pixels.map((row, rowIndex) => {
        return `<tr>` +
        row.map((color, colIndex) => {
            return `
                <td data-row="${rowIndex}" data-col="${colIndex}" style="${ color ? 'background-color:' + color : '' }">
                
                </td>
            `
        }).join("") + `</tr>`
    }).join("");

    const gridContainer = document.querySelector("#grid-container");
    gridContainer.innerHTML = `
        <table class="edit">
            <tbody>
                ${rows}
            </tbody>
        </table>
    `
    attachGridEvents();
}

function createEmptyPixels(cols, rows) {
    
    return Array.from({ length: rows }, () => Array(cols).fill(null));
    //Array.from(document.querySelectorAll("li")) => NodeList[] -> [<li>1</li>,]
}

const generateBtn = document.querySelector("#generate-btn");
generateBtn.addEventListener("click", function() {
    const gridWidth = Number(document.querySelector("#grid-width").value);
    const gridHeight = Number(document.querySelector("#grid-height").value);

    console.log(`Grid size is: width: ${gridWidth} x height: ${gridHeight}`);
    state.gridHeight = gridHeight;
    state.gridWidth = gridWidth;
    state.pixels = createEmptyPixels(gridWidth, gridHeight);

    renderAll();
});

function attachGridEvents () {
    const table = document.querySelector('table.edit');
    console.log(table);
    table.addEventListener('click', function (event) {
        if(!event.target.matches("td")) {
           return; 
        }
        console.log("I'm here")

        // If it was a cell...
        const rowIndex = Number(event.target.dataset.row);
        const colIndex = Number(event.target.dataset.col);
        state.pixels[rowIndex][colIndex] = state.currentColor;
        renderGrid();
    });
}

const colorPicker = document.querySelector("#color-picker");
const colorPickerPreview = document.querySelector("#current-color-display");
colorPicker.addEventListener("input", function() {
    state.currentColor = this.value;
    colorPickerPreview.style.backgroundColor = this.value;
});

renderAll();

/*
const arr = Array.from({ length: 10}, () => Array(5).fill(2));
arr[0,1].fill(3);
console.log(arr);*/