import {
  Component,
  OnInit,
  Input,
  OnChanges,
  SimpleChanges,
} from '@angular/core';
import { Chart, ChartType } from 'chart.js/auto';
import { IData } from '../models/sensors.models';

@Component({
  selector: 'app-line-cart',
  templateUrl: './line-cart.component.html',
  styleUrls: ['./line-cart.component.css'],
})
export class LineCartComponent implements OnInit, OnChanges {
  @Input() Incurrent: number[];
  @Input() Involtage: number[];
  @Input() Intime: number[];
  @Input() InRPM: number[];
  @Input() Indate: string[];
  @Input() IndistanceKm: number[];
  @Input() IndistanceMetters: number[];
  @Input() Inpower: number[];
  @Input() Inspeed: number[];

  // Graficos
  public current: Chart;
  public voltage: Chart;
  public power: Chart;
  public rpms: Chart;
  public speed: Chart;
  public distanceKm: Chart;
  public distanceM: Chart;

  indices: number[] = [];
  constructor() {}

  ngOnInit() {
    this.updateChart();
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('Indices', this.indices);
    console.log('Data', this.Incurrent);
    this.indices = this.Involtage.map((_, index) => index + 1);
    this.updateChart();
  }

  private updateChart() {
    // Destruir los graficos existentes
    this.current?.destroy();
    this.voltage?.destroy();
    this.power?.destroy();
    this.rpms?.destroy();
    this.speed?.destroy();
    this.distanceKm?.destroy();
    this.distanceM?.destroy();

    this.current = new Chart('current', {
      type: 'line' as ChartType,
      data: {
        labels: this.indices,
        datasets: [
          {
            label: 'Current',
            data: this.Incurrent,
            fill: true,
            borderColor: 'rgb(75, 192, 192)',
            tension: 0.1,
          },
        ],
      },
    });

    this.voltage = new Chart('voltage', {
      type: 'line' as ChartType,
      data: {
        labels: this.indices,
        datasets: [
          {
            label: 'Voltage',
            data: this.Involtage,
            fill: true,
            borderColor: 'rgb(75, 192, 192)',
            tension: 0.1,
          },
        ],
      },
    });

    this.rpms = new Chart('rpms', {
      type: 'line' as ChartType,
      data: {
        labels: this.indices,
        datasets: [
          {
            label: 'RPMs',
            data: this.InRPM,
            fill: true,
            borderColor: 'rgb(75, 192, 192)',
            tension: 0.1,
          },
        ],
      },
    });

    this.power = new Chart('power', {
      type: 'line' as ChartType,
      data: {
        labels: this.indices,
        datasets: [
          {
            label: 'Power',
            data: this.Inpower,
            fill: true,
            borderColor: 'rgb(75, 192, 192)',
            tension: 0.1,
          },
        ],
      },
    });

    this.speed = new Chart('speed', {
      type: 'line' as ChartType,
      data: {
        labels: this.indices,
        datasets: [
          {
            label: 'Speed',
            data: this.Inspeed,
            fill: true,
            borderColor: 'rgb(75, 192, 192)',
            tension: 0.1,
          },
        ],
      },
    });

    this.distanceKm = new Chart('distanceKm', {
      type: 'line' as ChartType,
      data: {
        labels: this.indices,
        datasets: [
          {
            label: 'Distance (Km)',
            data: this.IndistanceKm,
            fill: true,
            borderColor: 'rgb(75, 192, 192)',
            tension: 0.1,
          },
        ],
      },
    });

    this.distanceM = new Chart('distanceM', {
      type: 'line' as ChartType,
      data: {
        labels: this.indices,
        datasets: [
          {
            label: 'Distance (m)',
            data: this.IndistanceMetters,
            fill: true,
            borderColor: 'rgb(75, 192, 192)',
            tension: 0.1,
          },
        ],
      },
    });
  }
}
