let container = document.getElementsByClassName('grid-container')[0];
let gridItemDivArray = [];
//const changeColor = e => {
  //  e.target.style.backgroundColor = 'red';
//}


for(let i = 1; i <= 256; i++){
    let gridItemDiv = document.createElement('div');
    gridItemDiv.id = 'grid-itemid';
    container.appendChild(gridItemDiv);
    
}

let gridItemId = document.getElementById('grid-itemid');
let gridItems = document.querySelectorAll('#grid-itemid');
let btn = document.querySelector('#btn');

gridItems.forEach(gridItem => {
    gridItem.addEventListener('click', () => changeColorBackground(gridItem));
    gridItem.addEventListener('click', function (e) {
        console.log(e);
      });

      let mouseType;
      gridItem.addEventListener('click', function(e){mouseType = e.type});
      if(mouseType === 'mousedown'){
        gridItem.addEventListener('mouseover', () => changeColorBackground(gridItem));
      }
      
});

btn.addEventListener('click', function (e) {
    console.log(e);
  });

function changeColorBackground(gridItem){
    gridItem.style.backgroundColor = 'red';
}


