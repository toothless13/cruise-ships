(function exportController() {
    class Controller {
        constructor(ship) {
            this.initialiseSea();
            this.ship = ship;
            document.querySelector('#sailbutton').addEventListener('click', () => {
                this.setSail();
            });
        }

        initialiseSea() {
            const backgrounds = [
                '../images/water0.png',
                '../images/water1.png'
            ];
            let backgroundIndex = 0;
            window.setInterval(() => {
                document.querySelector('#viewport').style.backgroundImage = `url('${backgrounds[backgroundIndex % backgrounds.length]}')`;
                backgroundIndex += 1;
            }, 1000);
        }

        renderPorts(ports) {
            const portsElement = document.querySelector('#ports');
            portsElement.style.width = '0px';
            ports.forEach((port, index) => {
                const newPortElement = document.createElement('div');
                newPortElement.className = 'port';
                newPortElement.dataset.portName = port.name;
                newPortElement.dataset.portIndex = index;
                portsElement.appendChild(newPortElement);
                const portsElementWidth = parseInt(portsElement.style.width, 10);
                portsElement.style.width = `${portsElementWidth + 256}px`;
            });
        }

        renderShip() {
            const ship = this.ship;
            const currentPortIndex = ship.itinerary.ports.indexOf(ship.currentPort);
            const port = document.querySelector(`[data-port-index="${currentPortIndex}"]`);
            const shipElement = document.querySelector('#ship');
            shipElement.style.top = `${port.offsetTop + 32}px`;
            shipElement.style.left = `${port.offsetLeft - 32}px`;
        }

        setSail() {
            const ship = this.ship;
            const nextPortIndex = ship.itinerary.ports.indexOf(ship.currentPort) + 1;
            const nextPort = document.querySelector(`[data-port-index="${nextPortIndex}"]`);

            if(!nextPort) {
                return alert('End of the line!');
            }

            const shipElement = document.querySelector('#ship');
            const sailInterval = setInterval(() => {
                const shipLeft = parseInt(shipElement.style.left, 10);
                if(shipLeft === (nextPort.offsetLeft - 32)) {
                    ship.setSail();
                    ship.dock();
                    clearInterval(sailInterval);
                }

                shipElement.style.left = `${shipLeft + 1}px`;
            }, 10);
        }
    }

    if(typeof module !== 'undefined' && module.exports) {
        module.exports = Controller;
    } else {
        window.Controller = Controller;
    }
}());