class Ship {
    constructor(startingPort) {
        this.startingPort = startingPort;
    }

    setSail() {
        this.startingPort = '';
    }

    dock(dock) {
        this.dockedAt = dock;
    }
}

module.exports = Ship;