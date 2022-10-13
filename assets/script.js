
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
