
const gridContainer = document.querySelector("#grid-container")


function drawGrid(gridSize) {
    grid = document.createElement("div");
    grid.classList.add("grid");
    gridContainer.appendChild(grid);

    let gridWidth = parseInt(getComputedStyle(gridContainer).height);
    let gridHeight = parseInt(getComputedStyle(gridContainer).width);
    let celSize = gridWidth / gridSize;

    console.log(celSize);


	//Create n rows
	for (let y = 0; y < gridSize; y++) {
		const row = document.createElement("div");
		row.classList.add("row");
		grid.appendChild(row);

		//Add n cells to each row
		for (let x = 0; x < gridSize; x++) {
			const cell = document.createElement("div");
			cell.flex = '1';
			cell.style.borderStyle = 'solid';
            cell.style.borderWidth = '1px';
			cell.classList.add("cell");
            cell.style.width = celSize-2+'px';
            cell.style.height = celSize-2+'px';
			row.appendChild(cell);
		};
	};
    activateCells();
    return;
};

function removeGrid(){
    console.log(gridContainer)
    Array.from(gridContainer.children).forEach(child => {
        gridContainer.removeChild(child);
    })
};

function activateCells(){
    let cells = document.querySelectorAll(".cell");
    cells.forEach(cell =>
        cell.addEventListener('mouseover', (e) => {
            e.target.classList.add("hovered");
        })
    );
    return;
}


let resetButton = document.querySelector("#reset")
resetButton.addEventListener('click', (e) => {
    removeGrid();
	squares = prompt("Enter a number", "16");
    drawGrid(squares);
});



drawGrid(16);