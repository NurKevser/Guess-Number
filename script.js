const btn = document.getElementById("btn");
const prompt_box = document.getElementById("prompt_box");
const promt_txt = document.getElementById("promt_txt");
const txt = document.getElementById("txt");
const num = document.getElementById("num");
let chancesTxt = document.getElementById("chancesTxt");
let tryTxt = document.getElementById("tryTxt");
let randomNumber = Math.floor(Math.random() * 100) + 1;

let number;
let counter = 0;
let chances = 10;
chancesTxt.innerHTML = "Chances: " + chances;

btn.addEventListener("click" , (e) => {
    e.preventDefault();
    console.log(num.value);
    counter++;
    chances--;
    chancesTxt.innerHTML = "Chances: " +chances;
    if(chances == 0) {
        activateBox("Loss");
    }
    number = num.value;
    checkNum(number);
    num.value = "";
});

function checkNum(number) {
    if (number == randomNumber) {
        activateBox("Win");
    }else if (number > randomNumber) {
        txt.innerHTML = "Enter Smaller Number";
    }else {
        txt.innerHTML = "Enter Larger Number"
    }
}

function activateBox(e) {
    prompt_box.classList.add("active");
    promt_txt.innerHTML = "You " + e + " The Game!";
    randomNumber = Math.floor(Math.random() * 100 +1);
}

function play(e) {
    prompt_box.classList.remove("active");
    chances = 10;
    txt.innerHTML = "";
    chancesTxt.innerHTML = "Chances: " + chances;
}