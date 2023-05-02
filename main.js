const board = document.querySelector(".board");
const black = document.querySelector(".black-button");
const white = document.querySelector(".white-button");
const random = document.querySelector(".random-button");
const reset = document.querySelector(".reset-button"); 

function populateBoard(size) {
    board.style.gridTemplateColumns = `repeat(${size}, 1fr`;
    board.style.gridTemplateRows = `repeat(${size}, 1fr`;
    board.style.border = "solid 2px black"

    for (let i = 0; i < 256; i++) {
        let square = document.createElement("div");
        square.style.background = "white";
        board.insertAdjacentElement("beforeend", square)
    }
}

populateBoard(16);

function changeSize(input){
    populateBoard(input)
}