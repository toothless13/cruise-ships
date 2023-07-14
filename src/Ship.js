class Ship {
    constructor(currentPort) {
        this.currentPort = currentPort;
        this.previousPort = null;
    }

    setSail() {
        this.previousPort = this.currentPort;
        this.currentPort = '';
    }

    dock(port) {
        this.currentPort = port;
    }
}

module.exports = Ship;