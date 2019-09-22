let gameData = {
    money: 0,
    moneyPerSecond: 0,
    moneyPerClick: 0.01,
    meth: 0,
    methPerSecond: 0,
    methPerClick: 0,
    methPrice: 0,
    clicked: 0,
    clickLimit: 1,
}
loadSave();
document.getElementById("deleteSave").addEventListener("click", deleteSave);

let mainGameLoop = window.setInterval(function() {
    idle();
    updater();
}, 1000 / 10)

function idle() {
    gameData.money += gameData.moneyPerSecond / 10;
    gameData.meth += gameData.methPerSecond / 10;
}

function updater() {
    document.getElementById("money").innerHTML = `${r(gameData.money, 2)}$`;
    document.getElementById("meth").innerHTML = `${r(gameData.meth, 2)}G`;
    document.getElementById("moneyPerClick").innerHTML = `${r(gameData.moneyPerClick, 2)}$`;
    document.getElementById("moneyPerSecond").innerHTML = `${r(gameData.moneyPerSecond, 2)}$`;
    document.getElementById("methPrice").innerHTML = `${r(gameData.methPrice, 2)}$ per G`;
    document.getElementById("methPerSecond").innerHTML = `${r(gameData.methPerSecond, 2)}G`;
}

function save() {
    localStorage.setItem(`idlejsSave`, JSON.stringify(gameData));
}

function loadSave() {
    let savegameGameData = JSON.parse(localStorage.getItem(`idlejsSave`))
    if (savegameGameData !== null) {
        gameData = savegameGameData;
    }
}

function deleteSave() {
    localStorage.clear();
    location.reload();
}

let saveGameLoop = window.setInterval(function() {
    save();
}, 15000)