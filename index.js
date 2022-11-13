let container = document.getElementsByClassName('grid-container')[0];

for(let i = 1; i <= 256; i++){
    let gridItem = document.createElement('div');
    gridItem.className = 'grid-item';
    //gridItem.textContent = `${i}`;
    container.appendChild(gridItem);
}

