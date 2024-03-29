// ./interfaces.ts

export interface ICar {
  drive(): void;
}

export interface IAirPlane {
  fly(): void;
}

export interface IFutureCar extends ICar, IAirPlane {}
