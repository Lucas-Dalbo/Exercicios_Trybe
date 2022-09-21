import { IVehicle } from "./interfaces";

class AirPlane implements IVehicle {
  fly(): void {
    console.log('Flying an airplane');
  }

  drive(): void {
    
  }
}