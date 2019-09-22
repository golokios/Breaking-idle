function Upgrade(name, id, type, description, cost, level, perClick, perSecond, val) {
    this.name = name;
    this.id = id;
    this.description = description;
    this.cost = cost;
    this.saveCost = JSON.parse(localStorage.getItem(`${this.id}cost`));
    if (this.saveCost > this.cost) {
        this.cost = this.saveCost;
    }
    this.level = level;
    this.saveLevel = JSON.parse(localStorage.getItem(`${this.id}level`));
    if (this.saveLevel > this.level) {
        this.level = this.saveLevel;
    }
    this.perClick = perClick;
    this.savePerClick = JSON.parse(localStorage.getItem(`${this.id}perClick`));
    if (this.savePerClick > this.perClick) {
        this.perClick = this.savePerClick;
    }
    this.perSecond = perSecond;
    this.savePerSecond = JSON.parse(localStorage.getItem(`${this.id}perSecond`));
    if (this.savePerSecond > this.perSecond) {
        this.perSecond = this.savePerSecond;
    }
    this.drawn = false;
    this.type = type;
    this.increased = false;
    this.increaseBy = val;
    this.draw();
}

Upgrade.prototype.buy = function() {
    if (this.type === "money") {
        if (gameData.money >= this.cost) {
            gameData.money -= this.cost;
            if (this.perSecond > 0) {
                gameData.moneyPerSecond += this.perSecond;
            } else {
                gameData.moneyPerSecond -= this.perSecond;
            }
            if (this.perClick > 0) {
                gameData.moneyPerClick += this.perClick;
            } else {
                gameData.moneyPerClick -= this.perClick;
            }
            this.perClick *= 1.05;
            this.perSecond *= 1.01;
            this.level++;
            this.cost *= 1.1;
            this.drawMps = this.perSecond;
            this.increaseMethValue(this.increaseBy);
            this.update();
        }
    } else if (this.type === "meth") {
        if (gameData.money >= this.cost) {
            gameData.money -= this.cost;
            if (this.perSecond > 0) {
                gameData.methPerSecond += this.perSecond;
            } else {
                gameData.methPerSecond -= this.perSecond;
            }
            if (this.perClick > 0) {
                gameData.methPerClick += this.perClick;
            } else {
                gameData.methPerClick -= this.perClick;
            }
            this.perClick *= 1.05;
            this.perSecond *= 1.01;
            this.level++;
            this.cost *= 1.1;
            this.drawMps = this.perSecond;
            this.increaseMethValue(this.increaseBy);
            this.update();
        }
    } else if (this.type === "sellMeth") {
        if (gameData.money >= this.cost) {
            gameData.money -= this.cost;
            if (gameData.methPerSecond >= this.perSecond) {
                gameData.moneyPerSecond += this.perSecond * gameData.methPrice;
                gameData.methPerSecond -= this.perSecond;
                this.perClick *= 1;
                this.perSecond *= 1;
                this.level++;
                this.cost *= 1.07;
                this.drawMps = this.perSecond * gameData.methPrice;
                this.increaseMethValue(this.increaseBy);
                this.update();
            } else {
                alert(`You need ${r(this.perSecond, 2)}G meth per second for this. You currently have ${r(gameData.methPerSecond, 2)}G`);
            }
        }
    }
    this.save();
}

Upgrade.prototype.draw = function() {
    if (this.drawn === false) {
        if (this.type === "money") {
            this.container = "moneyUpgradeContainer";
            this.btnColor = "primary";
            this.drawMps = this.perSecond;
        } else if (this.type === "meth") {
            this.container = "methUpgradeContainer";
            this.btnColor = "info";
            this.drawMps = this.perSecond;
        } else if (this.type === "sellMeth") {
            this.container = "sellMethUpgradeContainer";
            this.btnColor = "success";
            this.drawMps = this.perSecond;
        }
        document.getElementById(this.container).innerHTML += `
            <div class="card shadow border-left-primary py-2" style="margin-bottom: 10px;">
                <div class="card-body">
                    <div class="row align-items-center no-gutters">
                        <div class="col mr-2">
                            <div class="text-uppercase text-primary d-xl-flex justify-content-between font-weight-bold text-xs mb-1"><span>${this.name}</span><span id="${this.id}levelMpsMpc">Level: ${this.level} | MPS: ${r(this.drawMps, 2)}$ | MPC: ${r(this.perClick, 2)}$<br></span></div>
                            <div class="text-dark font-weight-bold h5 mb-0"><span id="${this.id}cost">${r(this.cost, 2)}$</span>
                                <p id="description" class="m-0" style="font-size: 16px;color: rgb(136,136,136);font-weight: normal;">${this.description}</p>
                            </div>
                        </div>
                        <div class="col-auto d-xl-flex align-items-xl-center"><button class="btn btn-${this.btnColor}" type="button" style="margin-right: 20px;margin-left: 10px;" onclick="${this.id}.buy()">Buy this shit</button><i class="fas fa-dollar-sign fa-2x text-gray-300"></i></div>
                    </div>
                </div>
            </div>
        `
        this.drawn = true;
        console.log(`Succesfully drawn ${this.name} to the HTML with the following properties:
	   		Name: ${this.name}
	   		ID: ${this.id}
	   		Type: ${this.type}
	   		Description: ${this.description}
	   		Cost: ${this.cost}
	   		Level: ${this.level}
	   		Per Click: ${this.perClick}
	   		Per Second: ${this.perSecond}
   		`);
    } else {
        this.update();
    }
}

Upgrade.prototype.increaseMethValue = function(val) {
    if(this.increased === false){
        if (val > 0){
            gameData.methPrice += val;
            this.increased = true;
        } else {
            gameData.methPrice -= val;
            this.increased = true;
        }      
    }
}

Upgrade.prototype.update = function() {
    document.getElementById(`${this.id}levelMpsMpc`).innerHTML = `Level: ${this.level} | MPS: ${r(this.drawMps, 2)}$ | MPC: ${r(this.perClick, 2)}$<br>`
    document.getElementById(`${this.id}cost`).innerHTML = `${r(this.cost, 2)}$`
}

Upgrade.prototype.save = function() {
    localStorage.setItem(`${this.id}perSecond`, JSON.stringify(this.perSecond));
    localStorage.setItem(`${this.id}perClick`, JSON.stringify(this.perClick));
    localStorage.setItem(`${this.id}cost`, JSON.stringify(this.cost));
    localStorage.setItem(`${this.id}level`, JSON.stringify(this.level));
    localStorage.setItem(`idlejsSave`, JSON.stringify(gameData))
}