
class Cars {
    constructor(model, color, wheels) {
        this.model = model;
        this.color = color;
        this.wheels = wheels;
    }

    start() {
        console.log('Машина заведена');
    }
}

class Truck extends Cars {
    constructor(model, color, wheels, loadCapacity) {
        super(model, color, wheels);
        this.loadCapacity = loadCapacity;
    }
}

class SportsCar extends Cars {
    constructor(model, color, wheels, topSpeed) {
        super(model, color, wheels);
        this.topSpeed = topSpeed;
    }
}

class ElectricCar extends Cars {
    constructor(model, color, wheels, batteryCapacity) {
        super(model, color, wheels);
        this.batteryCapacity = batteryCapacity;
    }
}

const truck = new Truck('Volvo', 'blue', 6, 15000);
const sportsCar = new SportsCar('Ferrari', 'red', 4, 350);
const electricCar = new ElectricCar('Tesla', 'white', 4, 100);

console.log(truck);
truck.start();

console.log(sportsCar);
sportsCar.start();

console.log(electricCar);
electricCar.start();




function createTrafficLight() {
    const trafficLight = document.createElement('div');
    trafficLight.style.width = '100px';
    trafficLight.style.height = '300px';
    trafficLight.style.backgroundColor = 'black';
    trafficLight.style.border = '5px solid #333';
    trafficLight.style.borderRadius = '10px';
    trafficLight.style.display = 'flex';
    trafficLight.style.flexDirection = 'column';
    trafficLight.style.justifyContent = 'space-between';
    trafficLight.style.padding = '10px';

    const redLight = document.createElement('div');
    redLight.style.width = '80px';
    redLight.style.height = '80px';
    redLight.style.backgroundColor = 'gray';
    redLight.style.borderRadius = '50%';

    const yellowLight = document.createElement('div');
    yellowLight.style.width = '80px';
    yellowLight.style.height = '80px';
    yellowLight.style.backgroundColor = 'gray';
    yellowLight.style.borderRadius = '50%';

    const greenLight = document.createElement('div');
    greenLight.style.width = '80px';
    greenLight.style.height = '80px';
    greenLight.style.backgroundColor = 'gray';
    greenLight.style.borderRadius = '50%';

    trafficLight.appendChild(redLight);
    trafficLight.appendChild(yellowLight);
    trafficLight.appendChild(greenLight);

    document.body.appendChild(trafficLight);

    const statusText = document.createElement('div');
    statusText.style.marginTop = '20px';
    statusText.style.fontSize = '20px';
    statusText.style.fontWeight = 'bold';
    statusText.style.textAlign = 'center';
    document.body.appendChild(statusText);

    function showTrafficLight(color) {
        redLight.style.backgroundColor = 'gray';
        yellowLight.style.backgroundColor = 'gray';
        greenLight.style.backgroundColor = 'gray';

        color = color.toLowerCase();

        if (color === "красный") {
            redLight.style.backgroundColor = 'red';
            statusText.innerHTML = "🔴 STOP";
        } else if (color === "желтый") {
            yellowLight.style.backgroundColor = 'yellow';
            statusText.innerHTML = "🟡 WAIT";
        } else if (color === "зеленый") {
            greenLight.style.backgroundColor = 'green';
            statusText.innerHTML = "🟢 GO";
        } else {
            statusText.innerHTML = "Неверный цвет! Введите Красный, Желтый или Зеленый.";
        }
    }

    let userInput = prompt("Введите цвет (Красный, Желтый или Зеленый):");

    showTrafficLight(userInput);
}

createTrafficLight();


