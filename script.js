const gridContainer = document.querySelector("#grid-container");


let squares = 16;
let rows = 16;

//Create n rows
for (let n=0; n <= rows; n++){ 
    const row = document.createElement("div");
    row.classList.add("row");

    gridContainer.appendChild(row); 

    //Add n cells to each row
    for (let n = 0; n <= squares; n++){
        const cell = document.createElement("div");
        cell.style.width = '50px';
        cell.style.height = '50px';
        cell.style.borderStyle = 'solid';
        cell.classList.add("cell");
        
        row.appendChild(cell); 
    };
};

let cells = document.querySelectorAll(".cell");

cells.forEach(cell =>
    cell.addEventListener('mouseover', (e) => {
        e.target.style.backgroundColor = 'red';
    })
    );




