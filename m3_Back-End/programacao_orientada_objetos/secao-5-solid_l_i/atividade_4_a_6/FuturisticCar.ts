// ./FuturisticCar.ts
import { IFutureCar } from './interfaces';

export default class FuturisticCar implements IFutureCar {
  drive(): void { console.log('Drive a futuristic car'); }

  fly(): void { console.log('Flying a futuristic car'); }
}
