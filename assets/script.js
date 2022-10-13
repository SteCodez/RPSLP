
const rule = {
    Lizard: ["Spock", "Paper"],

    Paper: ["Rock", "Spock"],

    Rock: ["Lizard", "Scissor"],

    Scissor: ["Paper", "Lizard"],

    Spock: ["Scissor", "Rock"],

}

const imageFolderPath = "assets/images"

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

const player1Score = document.querySelector("#player1-score");
const player2Score = document.querySelector("#player2-score");

const roundMessage = document.querySelector("#round-message");

player1Options.forEach((e) => {
    e.addEventListener("click", () => {
        play(e);
    });
});

const play = (e) => {
    const player1 = e.getAttribute("data-index");

    const length = arr.length;

    const player2 = Math.floor(Math.random() * length);

    showPlayerOption(player1, playerShowArea);
    highlightSelectedOption(player1, player1Options);

    showPlayerOption(player2, botShowArea);
    highlightSelectedOption(player2, botOptions);

    calculateScore(player1, player2);
};

const generateImgElement = (index) => {
    const { image, name } = arr[index];
    const imgElement = document.createElement("img");
    imgElement.src = `${imageFolderPath}/${image}`;
    imgElement.alt = name;
    imgElement.title = name;
    return imgElement;
};

const showPlayerOption = (index, showArea) => {
    const imgElement = generateImgElement(index);
    showArea.innerHTML = "";
    showArea.append(imgElement);
};
