const outerGrid = document.querySelector('.outer-grid');
const widthOfOuterGrid = outerGrid.offsetWidth;
const heightOfOuterGrid =outerGrid.offsetHeight;
const rangeSlider = document.querySelector('#range-slider');
const gridSizeValue = document.querySelector('.grid-size-value');

//By default
function byDefault(){
  createGrids(16);  
}

byDefault();

rangeSlider.addEventListener('input', (e)=>{
    let value = e.target.value;
    gridSizeValue.innerHTML = `${value} x ${value}`;
    createGrids(value);
})


function createGrids(numberOfRowsAndColumns){

    const totalGrids = Math.pow(numberOfRowsAndColumns,2);
    const newGridwidth = widthOfOuterGrid/numberOfRowsAndColumns;
    const newGridHeight = heightOfOuterGrid/numberOfRowsAndColumns;

    // Create new divs whose classname are inner-grid inside outer-grid
    for(let i=0;i<totalGrids;i++){
        const newGrid = document.createElement('div');
        newGrid.classList.add('inner-grid');
        outerGrid.append(newGrid);
    }
    outerGrid.style.gridTemplateColumns = `repeat(${numberOfRowsAndColumns}, ${newGridwidth}px)`;
    
    // change grid color
    innerGrid = document.querySelectorAll('.inner-grid');
    innerGrid.forEach(element => {
        element.addEventListener('mouseenter', changeColor2Black)
    });
}

function changeColor2Black(){
    this.style.backgroundColor = 'black';
}

// Click Erazer
const erazerIcon = document.querySelector('.erazer');
erazerIcon.addEventListener('click', resetGrid);
function resetGrid(){
    innerGrid.forEach(element =>{
        element.addEventListener('mouseenter', changeColor2White)
    })
}

function changeColor2White(){
    this.style.backgroundColor = 'white';
}

// Reset button
const resetButton = document.querySelector('.reset-button');
resetButton.addEventListener('click', clearGridColor);
function clearGridColor(){
    innerGrid.forEach(element => {
        element.style.backgroundColor = 'white';
    })
}
