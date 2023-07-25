(function exportController() {
    class Controller {
        constructor() {
            this.initialiseSea();
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
            let portsElementWidth = 0;
            portsElement.style.width = portsElementWidth + 'px';
            ports.forEach((port) => {
                console.log(port);
                const div = document.createElement('div');
                div.setAttribute('class', 'port');
                div.setAttribute('data-portIndex', ports.indexOf(port));
                portsElementWidth += 256;
                portsElement.style.width = portsElementWidth + 'px';
                portsElement.appendChild(div);
            });
        }
    }

    if(typeof module !== 'undefined' && module.exports) {
        module.exports = Controller;
    } else {
        window.Controller = Controller;
    }
}());