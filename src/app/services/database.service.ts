import { Injectable, OnInit } from '@angular/core';
import { getDatabase, ref, set, onValue } from 'firebase/database';
import { ISensors } from '../models/sensors.models';

@Injectable({
  providedIn: 'root',
})
export class DatabaseService {
  constructor() {}

  private dbName = '/cars';

  readElements(callback: (data: any) => void) {
    const db = getDatabase();
    const starCountRef = ref(db, this.dbName);
    onValue(starCountRef, (snapshot) => {
      const data = snapshot.val();
      if (data !== undefined) {
        callback(data);
      }
    });
  }

  addElement(sensorData: ISensors) {
    const currentTimeUnix = Math.floor(new Date().getTime() / 1000);
    const db = getDatabase();
    set(ref(db, `${this.dbName}/${currentTimeUnix}`), {
      ...sensorData,
    }).catch((error) => console.log(error));
  }
}
