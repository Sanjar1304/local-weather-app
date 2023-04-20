import { Component } from '@angular/core'

@Component({
  selector: 'app-root',
  template: `
    <div>
      <mat-toolbar color="primary">
        <span>LocalCast Weather</span>
      </mat-toolbar>

      <div class="title-card">
        <div class="body-title">Your city, your forecast, right now!</div>

        <div class="mat-card-wrapper" fxLayout="row">
          <mat-card>
            <mat-card-header>
              <mat-card-title>Current Weather</mat-card-title>
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
}
