function createBoard(size) {
    let board = document.querySelector('.board');
    board.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    board.style.gridTemplateRows = `repeat(${size}, 1fr)`;
    let squares = board.querySelectorAll('div')
    squares.forEach((div) => div.remove())

    let amount = size * size
    for(let i = 0; i < amount; i++){
        let square = document.createElement('div');
        square.style.backgroundColor = 'blue';
        board.insertAdjacentElement('beforeend', square);
    }
}

createBoard(16);

function changeSize(input){
    if( input < 1 || input > 100){
        alert("Please input a number less than 100, and more than 1")
    } else{
    createBoard(input)};
};