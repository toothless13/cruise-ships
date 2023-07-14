class Ship {
    constructor(startingPort) {
        this.startingPort = startingPort;
    }

    set setSail(newPort) {
        this.startingPort = newPort;
    }
}

module.exports = Ship;