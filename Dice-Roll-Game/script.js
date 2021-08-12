const images = [
    "dice-01.svg",
    "dice-02.svg",
    "dice-03.svg",
    "dice-04.svg",
    "dice-05.svg",
    "dice-06.svg",
];

const dice = document.querySelectorAll("img");

const rollButton = document.querySelector("#RollButton").addEventListener("click", roll);

function roll(){
    dice.forEach((dice)=>{
        dice.classList.add("shake")
    });
    setTimeout(() => {
        dice.forEach(dice=>{
            dice.classList.remove("shake")
        });
        let diceOneVal = Math.floor((Math.random()*6));
        let diceTwoVal = Math.floor((Math.random()*6));

        document.querySelector("#dice1").setAttribute("src",images[diceOneVal]);
        document.querySelector("#dice2").setAttribute("src",images[diceTwoVal]);

    }, 1000);
};