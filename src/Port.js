(function exportPort() {
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
        }
    }

    if(typeof module !== 'undefined' && module.exports) {
        module.exports = Port;
    } else {
        window.Port = Port;
    }
}());