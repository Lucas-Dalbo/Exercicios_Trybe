import { IAirPlane } from "./interfaces";

class AirPlane implements IAirPlane {
  fly(): void {
    console.log('Flying an airplane');
  }
}