const gridContainer = document.querySelector(".grid");
// const row = document.createElement("div");


function createGrid(n)
{   gridContainer.innerHTML = '';
    for (let i = 0; i<n; i++)
        {
            const row =document.createElement("div");
            row.classList.add("row");
            gridContainer.appendChild(row);
            for (let i = 0; i<n; i++)
                {
                    const square = document.createElement("div");
                    square.classList.add("square", "highlight");
                    let newDimension = (960/n)+'px';
                    console.log(newDimension);
                    square.style.height = newDimension;
                    square.style.width = newDimension;

                    row.appendChild(square);
                }
        }

        const squares = document.querySelectorAll(".square");
        console.log(squares);
        
        function addHoverEffect(squares){
            squares.forEach(square => square.addEventListener('mouseover', ()=>{
                square.classList.add('permahover');
                square.style.backgroundColor = getRandomColor();
            }));
        
        }

        addHoverEffect(squares);



}

for (let i = 0; i<16; i++)
    {
        const row =document.createElement("div");
        row.classList.add("row");
        gridContainer.appendChild(row);
        for (let i = 0; i<16; i++)
            {
                const square = document.createElement("div");
                square.classList.add("square");
                row.appendChild(square);
            }
    }


const gridButton = document.querySelector(".new-grid");

function getGridSize()
    {
        let text;
        let person = prompt("Please Enter Number of Squares Per Side. \nNumber must be less than or equal to 100")
        if (person == null || person == '' || typeof(person)!= Number)
            {
                text = "User inputted invalid response.";
            }
        else if (person > 100)
            {
                text = "Number must be less than 100"
            }
        return person;


    }

gridButton.addEventListener('click', () =>{
    let gridSize = getGridSize();
    createGrid(gridSize);
})

const squares = document.querySelectorAll(".square");
console.log(squares);

function addHoverEffect(squares){
    squares.forEach(square => square.addEventListener('mouseover', ()=>{

        square.classList.add('permahover');
        square.style.backgroundColor = getRandomColor();

    }));

}

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
  
addHoverEffect(squares);


// function addColor(element)
// {
//     element.classList.add('permhover')
// }







