enum carColor {
  preto = "preta",
  vermelho = "vermelho",
  branco = "branco",
  prata = "prata",
}

enum carDoors {
  motorista = "motorista",
  passageiro01 = "passageiro01",
  passageiro02 = "passageiro02",
  passageiro03 = "passageiro03",
}

enum seguirPara {
  direita = "direita",
  esquerda = "esquerda",
}

interface Car {
  brand: string,
  color: carColor,
  doors: number,
}

class Car {
  constructor(brand: string, color: carColor, doors: number ) {
      this.brand = brand;
      this.color = color;
      this.doors = doors;
  }

  honk() :void {
      return console.log(`${this.brand}: Beep Beep`);
  }

  openTheDoor(door: carDoors) :void {
      if (this.doors === 2 && (door === 'passageiro02' || door === 'passageiro03')) {
          return console.log('Este carro só tem duas portas')
      }
      return console.log(`Abriu a porta ${door}`);
  }

  closeTheDoor(door: carDoors) :void {
      if (this.doors === 2 && (door === 'passageiro02' || door === 'passageiro03')) {
          return console.log('Este carro só tem duas portas')
      }
      return console.log(`Fechou a porta ${door}`);
  }

  turnOn() :void {
      return console.log(`O carro foi ligado`);
  }

  turnOff() :void {
      return console.log(`O carro foi desligado`);
  }

  speedUp() :void {
      return console.log(`A velocidade esta aumentando`);        
  }

  speedDown() :void {
      return console.log(`A velocidade esta diminuindo`);        
  }

  stop() :void {
      return console.log('O carro parou'); 
  }

  turn(direction: seguirPara) :void {
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