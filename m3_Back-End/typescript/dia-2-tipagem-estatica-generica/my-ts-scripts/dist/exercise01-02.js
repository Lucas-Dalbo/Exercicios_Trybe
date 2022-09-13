"use strict";
var carColor;
(function (carColor) {
    carColor["preto"] = "preta";
    carColor["vermelho"] = "vermelho";
    carColor["branco"] = "branco";
    carColor["prata"] = "prata";
})(carColor || (carColor = {}));
var carDoors;
(function (carDoors) {
    carDoors["motorista"] = "motorista";
    carDoors["passageiro01"] = "passageiro01";
    carDoors["passageiro02"] = "passageiro02";
    carDoors["passageiro03"] = "passageiro03";
})(carDoors || (carDoors = {}));
var seguirPara;
(function (seguirPara) {
    seguirPara["direita"] = "direita";
    seguirPara["esquerda"] = "esquerda";
})(seguirPara || (seguirPara = {}));
class Car {
    constructor(brand, color, doors) {
        this.brand = brand;
        this.color = color;
        this.doors = doors;
    }
    honk() {
        return console.log(`${this.brand}: Beep Beep`);
    }
    openTheDoor(door) {
        if (this.doors === 2 && (door === 'passageiro02' || door === 'passageiro03')) {
            return console.log('Este carro só tem duas portas');
        }
        return console.log(`Abriu a porta ${door}`);
    }
    closeTheDoor(door) {
        if (this.doors === 2 && (door === 'passageiro02' || door === 'passageiro03')) {
            return console.log('Este carro só tem duas portas');
        }
        return console.log(`Fechou a porta ${door}`);
    }
    turnOn() {
        return console.log(`O carro foi ligado`);
    }
    turnOff() {
        return console.log(`O carro foi desligado`);
    }
    speedUp() {
        return console.log(`A velocidade esta aumentando`);
    }
    speedDown() {
        return console.log(`A velocidade esta diminuindo`);
    }
    stop() {
        return console.log('O carro parou');
    }
    turn(direction) {
        return console.log(`Virando para a ${direction}`);
    }
}
const Wolks = new Car('wolkswagen', carColor.prata, 4);
Wolks.openTheDoor(carDoors.motorista);
Wolks.closeTheDoor(carDoors.motorista);
Wolks.turnOn();
Wolks.speedUp();
Wolks.speedDown();
Wolks.turn(seguirPara.esquerda);
Wolks.speedUp();
Wolks.speedDown();
Wolks.turn(seguirPara.direita);
Wolks.speedUp();
Wolks.speedUp();
Wolks.speedDown();
Wolks.turn(seguirPara.direita);
Wolks.speedUp();
Wolks.speedDown();
Wolks.stop();
Wolks.openTheDoor(carDoors.passageiro03);
Wolks.closeTheDoor(carDoors.passageiro03);
Wolks.speedUp();
Wolks.speedDown();
Wolks.turn(seguirPara.direita);
Wolks.speedUp();
Wolks.speedUp();
Wolks.speedDown();
Wolks.turn(seguirPara.esquerda);
Wolks.speedUp();
Wolks.speedDown();
Wolks.turn(seguirPara.direita);
Wolks.speedUp();
Wolks.speedDown();
Wolks.stop();
Wolks.openTheDoor(carDoors.passageiro02);
Wolks.closeTheDoor(carDoors.passageiro02);
Wolks.speedUp();
