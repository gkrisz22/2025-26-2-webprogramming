let state = {
    gridWidth: 10,
    gridHeight: 10,
    pixels: [], // 2D array: pixels[row][col] = "#rrggbb"
    currentColor: '#ff0000',
    // TODO
};

function renderAll() {
    renderGrid();
}

function renderGrid() {
    const rows = state.pixels.map((row, rowIndex) => {
        return `<tr>` +
        row.map((color, colIndex) => {
            return `
                <td data-row=${rowIndex} data-col=${colIndex} style="${ color ? 'background-color:' + color : '' }>
                
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
}

renderAll();