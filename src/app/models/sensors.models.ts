export interface ISensors {
  date: string;
  time: string;
  voltage: string;
  current: string;
  power: string;
  RPM: string;
  speed: string;
  distanceMetters: string;
  distanceKm: string;
}

export interface IData {
  time: number[];
  RPM: number[];
  current: number[];
  date: string[];
  distanceKm: number[];
  distanceMetters: number[];
  power: number[];
  speed: number[];
  voltage: number[];
}
