
const gridContainer = document.querySelector("#grid-container")


function drawGrid(squares) {
    grid = document.createElement("div");
    grid.classList.add("grid");
    gridContainer.appendChild(grid);

	//Create n rows
	for (let n = 0; n <= squares; n++) {
		const row = document.createElement("div");
		row.classList.add("row");

		grid.appendChild(row);

		//Add n cells to each row
		for (let n = 0; n <= squares; n++) {
			const cell = document.createElement("div");
			cell.style.width = '50px';
			cell.style.height = '50px';
			cell.style.borderStyle = 'solid';
			cell.classList.add("cell");

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