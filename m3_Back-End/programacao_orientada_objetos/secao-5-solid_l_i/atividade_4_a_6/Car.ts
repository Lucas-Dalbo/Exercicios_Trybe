import { IVehicle } from "./interfaces";

class Car implements IVehicle {
  drive(): void {
    console.log('Drive a vintage car')
  }

  fly(): void {
    
  }
}