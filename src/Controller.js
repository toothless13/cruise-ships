(function exportController() {
    class Controller {
        constructor(ship) {
            this.initialiseSea();
            this.ship = ship;
            document.querySelector('#sailbutton').addEventListener('click', () => {
                this.setSail();
            });
            this.renderHud();
            document.querySelector('#addPort button').addEventListener('click', () => {
                this.addPort();
            })
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

        addPort() {
            const ship = this.ship;
            const newPortName = document.querySelector('#portName').value;
            ship.itinerary.ports.push(new Port(newPortName));
            document.querySelector('#portName').value = "";
            // console.log(ship.itinerary.ports);
            this.renderPorts(ship.itinerary.ports)
            this.renderHud();
        }

        renderPorts(ports) {
            document.querySelector('#ports').innerHTML = '';
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
            shipElement.style.display = 'block';
        }

        setSail() {
            const ship = this.ship;
            const nextPortIndex = ship.itinerary.ports.indexOf(ship.currentPort) + 1;
            const nextPort = document.querySelector(`[data-port-index="${nextPortIndex}"]`);

            if(!nextPort) {
                return this.renderMessage(`This is the end of the line!`);
            }

            this.renderMessage(`Now departing ${ship.currentPort.name}`);

            const shipElement = document.querySelector('#ship');
            const sailInterval = setInterval(() => {
                const shipLeft = parseInt(shipElement.style.left, 10);
                if(shipLeft === (nextPort.offsetLeft - 32)) {
                    ship.setSail();
                    ship.dock();
                    this.renderMessage(`You have arrived at ${ship.currentPort.name}`);
                    this.renderHud();
                    clearInterval(sailInterval);
                }

                shipElement.style.left = `${shipLeft + 1}px`;
            }, 20);
        }

        renderMessage(message) {
            const messageElement = document.createElement('div');
            messageElement.id = 'message';
            messageElement.innerHTML = message;
            document.querySelector('#viewport').appendChild(messageElement);

            setTimeout(() => {
                document.querySelector('#viewport').removeChild(messageElement)
            }, 2000);
        }

        renderHud() {
            const ship = this.ship;
            const hud = document.querySelector('#hud');
            const currentPortDisplay = document.querySelector('#currentPortDisplay')
            currentPortDisplay.innerHTML = `Current Port: ${ship.currentPort.name}`;

            const nextPortIndex = ship.itinerary.ports.indexOf(ship.currentPort) + 1;

            const nextPort = ship.itinerary.ports[nextPortIndex];
            
            if(!nextPort) {
                return nextPortDisplay.innerHTML = ""; 
            } else {
                nextPortDisplay.innerHTML = `Next Port: ${ship.itinerary.ports[nextPortIndex].name}`; 
            }
        }
    }

    if(typeof module !== 'undefined' && module.exports) {
        module.exports = Controller;
    } else {
        window.Controller = Controller;
    }
}());