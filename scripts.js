const container = document.querySelector("#container");

for (let i = 0; i < 16; i++) {
    const row = document.createElement("div");
    row.setAttribute("class", "row");
    container.appendChild(row);
    for (let j = 0; j < 16; j++) {
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