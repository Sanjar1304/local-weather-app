import { Component } from '@angular/core'

import { ICurrentWeather } from './interfaces'
import { WeatherService } from './weather/weather.service'

@Component({
  selector: 'app-root',
  template: `
    <div>
      <mat-toolbar color="primary"><span>LocalCast Weather</span></mat-toolbar>

      <div class="title-card">
        <div class="body-title vertical-margin">Your city, your forecast, right now!</div>

        <div fxLayoutAlign="center">
          <app-city-search></app-city-search>
        </div>

        <div class="mat-card-wrapper">
          <mat-card>
            <mat-card-header class="mat-typography">
              <mat-card-title>
                <div class="mat-headline">Current Weather</div>
              </mat-card-title>
            </mat-card-header>
            <mat-card-content>
              <app-current-weather></app-current-weather>
            </mat-card-content>
          </mat-card>
        </div>
      </div>
    </div>
  `,
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'local-weather-app'
  currentWeather!: ICurrentWeather

  constructor(private weatherService: WeatherService) {}
}
