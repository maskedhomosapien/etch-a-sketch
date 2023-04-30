const board = document.querySelector(".board");
const black = document.querySelector(".black-button");
const white = document.querySelector(".white-button");
const random = document.querySelector(".random-button");
const reset = document.querySelector(".reset-button"); 

for (let i = 0; i < 256; i++) {
    board.style.gridTemplateColumns = "repeat(16, 1fr";board.style.gridTemplateRows = "repeat(16, 1fr";
    let square = document.createElement("div");
    square.style.background = "blue";
    board.insertAdjacentElement("beforeend", square)
}