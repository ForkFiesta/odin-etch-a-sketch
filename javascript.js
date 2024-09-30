const container = document.querySelector(".container");
// const row = document.createElement("div");


for (let i = 0; i<16; i++)
    {
        const row =document.createElement("div");
        row.classList.add("row");
        container.appendChild(row);
        for (let i = 0; i<16; i++)
            {
                const square = document.createElement("div");
                square.classList.add("square");
                row.appendChild(square);
            }
    }




