let container = document.getElementsByClassName('grid-container')[0];
let gridItemDivArray = [];
//const changeColor = e => {
  //  e.target.style.backgroundColor = 'red';
//}

for(let i = 1; i <= 256; i++){
    let gridItemDiv = document.createElement('div');
    gridItemDiv.id = 'grid-itemid';
    gridItemDiv.textContent = `${i}`;
    container.appendChild(gridItemDiv);
    
}

let gridItemId = document.getElementById('grid-itemid');
let gridItems = document.querySelectorAll('#grid-itemid');

gridItems.forEach(gridItem => {
    gridItem.addEventListener('click', () => changeColorBackground(gridItem));
});

function changeColorBackground(gridItem){
    gridItem.style.backgroundColor = 'red'
}