function oneTimeUpgrade(name, id, description, cost, methPSmult, methPriceInc, moneyPSmult, moneyPCmult) {
    this.name = name;
    this.id = id;
    this.description = description;
    this.cost = cost;
    this.methPSmult = methPSmult;
    this.methPriceInc = methPriceInc;
    this.moneyPSmult = moneyPSmult;
    this.moneyPCmult = moneyPCmult;
    this.drawn = false;
    this.saveDrawn = JSON.parse(localStorage.getItem(`${this.id}drawn`));
    if (this.saveDrawn === true) {
        this.drawn = this.saveDrawn;
    }
    this.draw();
}

oneTimeUpgrade.prototype.buy = function() {
    if (gameData.money >= this.cost) {
        gameData.money -= this.cost;
        gameData.methPerSecond *= this.methPSmult;
        gameData.methPrice += this.methPriceInc;
        gameData.moneyPerSecond *= this.moneyPSmult;
        gameData.moneyPerClick *= this.moneyPCmult;
        this.delete();
        this.save();
    }
}

oneTimeUpgrade.prototype.draw = function() {
    if (this.drawn === false) {
        document.getElementById("upgradeContainer").innerHTML += `
        <div class="card shadow border-left-primary py-2" id="${this.id}singleUpgrade" style="margin-bottom: 10px;">
            <div class="card-body">
                <div class="row d-flex d-xl-flex flex-column align-items-center justify-content-xl-center no-gutters">
                    <div class="col mr-2">
                        <div class="text-uppercase text-center text-primary d-xl-flex justify-content-between justify-content-xl-center font-weight-bold text-xs mb-1"><span>${this.name}<br></span></div>
                        <div class="text-dark font-weight-bold h5 mb-0">
                            <p id="description" class="m-0" style="font-size: 16px;color: rgb(136,136,136);font-weight: normal;">${this.description}</p><span>$${this.cost}</span></div>
                    </div>
                    <div class="col-auto d-xl-flex align-items-xl-center"><button class="btn btn-primary" type="button" style="margin-right: 0px;margin-left: 0px;" onclick="${this.id}.buy()">Buy this shit</button></div>
                </div>
            </div>
        </div>
    `
        console.log(`Succesfully drawn ${this.name} to the HTML with the following properties:
            Name: ${this.name}
            ID: ${this.id}
            Description: ${this.description}
            Cost: ${this.cost}
            Meth PS increase: ${this.methPSmult}
            Meth price increase: ${this.methPriceInc}
            MPS mult: ${this.moneyPSmult}
            MPC mult: ${this.moneyPCmult}
        `);
        this.drawn = true;
    }
}

oneTimeUpgrade.prototype.delete = function() {
    document.getElementById(`${this.id}singleUpgrade`).outerHTML = "";
}

oneTimeUpgrade.prototype.save = function() {
    localStorage.setItem(`${this.id}drawn`, JSON.stringify(this.drawn));
    localStorage.setItem(`idlejsSave`, JSON.stringify(gameData))
}