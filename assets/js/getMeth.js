document.getElementById("getMeth").addEventListener("click", getMeth);

let clickLoop1 = window.setInterval(function() {
	gameData.clicked = 0;
    document.getElementById("getMeth").disabled=false;
}, 1000 / 10)

//Function to get Money (maximum 10 clicks per second)
function getMeth(){
    gameData.clicked++; //increment
    if (gameData.clicked > gameData.clickLimit){
        document.getElementById("getMeth").disabled=true;
    } else {
    	gameData.meth += gameData.methPerClick;
    	gameData.clicked++;
    }
}