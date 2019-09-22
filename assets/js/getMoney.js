document.getElementById("getMoney").addEventListener("click", getMoney);

let clickLoop = window.setInterval(function() {
	gameData.clicked = 0;
    document.getElementById("getMoney").disabled=false;
}, 1000 / 10)

//Function to get Money (maximum 10 clicks per second)
function getMoney(){
    gameData.clicked++; //increment
    if (gameData.clicked > gameData.clickLimit){
        document.getElementById("getMoney").disabled=true;
    } else {
    	gameData.money += gameData.moneyPerClick;
    	gameData.clicked++;
    }
}