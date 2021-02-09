// let grid = [16, 16];
let size = 16;

for (let i = 0; i < size; i++) {
    let row = document.createElement('row');
    row.id = "row";
    for (let j = 0; j < size; j++) {
        let div = document.createElement('div');
        div.innerHTML = i + ", " + j;
        div.id = "cell";
        row.appendChild(div);
    }
    document.body.appendChild(row);
}


// grid[1, 3] = "red";

