import { Component, OnInit } from '@angular/core'
import { FormControl, Validators } from '@angular/forms'
import { debounceTime } from 'rxjs'
import { filter, tap } from 'rxjs/operators'

import { WeatherService } from '../weather/weather.service'

@Component({
  selector: 'app-city-search',
  templateUrl: './city-search.component.html',
  styleUrls: ['./city-search.component.css'],
})
export class CitySearchComponent implements OnInit {
  search = new FormControl('', [Validators.required, Validators.minLength(2)])

  constructor(private weatherService: WeatherService) {}

  ngOnInit(): void {
    this.search.valueChanges.subscribe((searchValue: any) => {
      if (searchValue) {
        const userInput = searchValue.split(',').map((s: string) => s.trim())

        this.weatherService
          .getCurrentWeather(
            userInput[0],
            userInput.length > 1 ? userInput[1] : undefined
          )
          .subscribe((data) => console.log(data))
      }
    })
  }
}
