class Port {
    constructor(name) {
        this.name = name;
        this.ships = [];
    }

    addShip(ship) {
        this.ships.push(ship);
    }

    removeShip(ship) {
        if(this.ships.indexOf(ship) > -1) {
            this.ships.splice(this.ships.indexOf(ship), 1);
            return this.ships;
        }
        // this.ships.splice(this.ships.indexOf(ship), 1);
    }
}

module.exports = Port;