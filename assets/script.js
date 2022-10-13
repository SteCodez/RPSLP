
const rule = {
    Lizard: ["Spock", "Paper"],

    Paper: ["Rock", "Spock"],

    Rock: ["Lizard", "Scissor"],

    Scissor: ["Paper", "Lizard"],

    Spock: ["Scissor", "Rock"],

}

const player1Options = document.querySelectorAll(
    "player1 . available-options . option"
);

const botOptions = document.querySelectorAll(
    "#player2 .available-options .option"
);

const playerShowArea = document.querySelector(
    "#player1 .selected-option .option"
);

const botShowArea = document.querySelector(
    "#player2 .selected-option .option"
);