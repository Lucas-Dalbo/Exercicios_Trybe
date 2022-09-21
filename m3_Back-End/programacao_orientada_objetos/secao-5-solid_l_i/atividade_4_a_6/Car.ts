import { ICar } from "./interfaces";

class Car implements ICar {
  drive(): void {
    console.log('Drive a vintage car');
  }
}