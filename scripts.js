// creates a grid of n x n brown boxes
function createGrid(n){
    const container = document.querySelector("#container");
    // clearing the container for next render
    container.innerHTML = "";

    for (let i = 0; i < n; i++) {
        const row = document.createElement("div");
        row.setAttribute("class", "row");
        container.appendChild(row);
        for (let j = 0; j < n; j++) {
            const box = document.createElement("div");
            box.setAttribute("class", "box");
            row.appendChild(box);
    
            // Changes the color of the box first to white
            // then to black after 1.5 seconds
            box.addEventListener("mouseenter", function(){
                this.style.backgroundColor = "white";
                setTimeout(() => {
                    this.style.backgroundColor = "black";
                }, 1.5 * 1000);
            });
        }
    }
}

// default first render is 16 x 16
createGrid(16);

// button that changes the dimensions of the grid
const changeButton = document.querySelector("#changeGridButton");
changeButton.addEventListener("click", function(){
    let number = prompt("Enter grid size:");
    number = +number;
    if (number > 0 && number <= 100) {
        console.log(number + ":" + typeof(number));
        createGrid(number);
    }
});