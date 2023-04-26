import { Component, OnInit } from '@angular/core'
import { FormControl, Validators } from '@angular/forms'

@Component({
  selector: 'app-city-search',
  templateUrl: './city-search.component.html',
  styleUrls: ['./city-search.component.css'],
})
export class CitySearchComponent implements OnInit {
  search = new FormControl('', [Validators.required, Validators.minLength(2)])

  ngOnInit(): void {}
}
