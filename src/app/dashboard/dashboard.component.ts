import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { DatabaseService } from '../services/database.service';
import { IData, ISensors } from '../models/sensors.models';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent {
  dataGroup: IData = {
    time: [],
    current: [],
    date: [],
    distanceKm: [],
    distanceMetters: [],
    power: [],
    RPM: [],
    speed: [],
    voltage: [],
  };

  constructor(
    private auth: AuthService,
    private router: Router,
    private db: DatabaseService
  ) {
    db.readElements((data: any) => this.graficar(data)); // Leer los datos
  }

  logOut() {
    this.auth
      .logOut()
      .then(() => this.router.navigate(['/login']))
      .catch((err) => console.log(err));
  }

  addElement() {
    const test: ISensors = {
      date: new Date().toLocaleDateString(),
      time: Math.floor(new Date().getTime() / 1000).toString(),
      voltage: (Math.random() * 50).toString(),
      current: Math.random().toString(),
      power: (Math.random() * 10).toString(),
      RPM: (Math.random() * 60).toString(),
      speed: (Math.random() * 50).toString(),
      distanceMetters: (Math.random() * 500).toString(),
      distanceKm: Math.random().toString(),
    };
    this.db.addElement(test);
  }

  graficar(data: any): void {
    this.extractData(data);
  }

  extractData(data: any) {
    const result = {
      time: [],
      RPM: [],
      current: [],
      date: [],
      distanceKm: [],
      distanceMetters: [],
      power: [],
      speed: [],
      voltage: [],
    };

    for (const key in data) {
      if (data.hasOwnProperty(key)) {
        const sensor = data[key];
        result.time.push(Number(key));
        result.RPM.push(parseFloat(sensor.RPM));
        result.current.push(parseFloat(sensor.current));
        result.date.push(sensor.date);
        result.distanceKm.push(parseFloat(sensor.distanceKm));
        result.distanceMetters.push(parseFloat(sensor.distanceMetters));
        result.power.push(parseFloat(sensor.power));
        result.speed.push(parseFloat(sensor.speed));
        result.voltage.push(parseFloat(sensor.voltage));
      }
    }

    this.dataGroup.time = result.time;
    this.dataGroup.RPM = result.RPM;
    this.dataGroup.current = result.current;
    this.dataGroup.date = result.date;
    this.dataGroup.distanceKm = result.distanceKm;
    this.dataGroup.distanceMetters = result.distanceMetters;
    this.dataGroup.power = result.power;
    this.dataGroup.speed = result.speed;
    this.dataGroup.voltage = result.voltage;

    console.log(this.dataGroup);
  }
}
