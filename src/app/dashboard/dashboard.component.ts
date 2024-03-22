import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { DatabaseService } from '../services/database.service';
import { ISensors } from '../models/sensors.models';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent {
  constructor(
    private auth: AuthService,
    private router: Router,
    private db: DatabaseService
  ) {
    db.readElements(this.graficar); // Leer los datos
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
      voltage: '50.13',
      current: '0.146',
      power: '7.30',
      RPM: '0',
      speed: '0',
      distanceMetters: '519.38',
      distanceKm: '0.52',
    };
    this.db.addElement(test);
  }

  graficar(data: any): void {
    console.log('Datos leidos', data);
  }
}
