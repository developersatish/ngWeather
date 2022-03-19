import { Component, OnInit } from '@angular/core';
import { City } from '../city.interface';
import { WeatherService } from '../weather.service';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.scss']
})
export class SearchPageComponent implements OnInit {

  errorMsg: string = '';

  cityData: City = {
    des: '',
    name: '',
    feelLike: 0,
    temp: 0,
    windSpeed: ''
  };
  constructor(private _service: WeatherService) { }

  ngOnInit(): void {

  }

  search(city: string) {

    this._service.get(city).subscribe((res: any) => {
      this.setData(res);
      this.errorMsg = '';
    }, (error: any) => {
      this.errorMsg = error.error.message;
    });
  }

  private setData(data: any) {
    this.cityData = {
      des: data.weather[0].main,
      name: data.name,
      feelLike: data.main.feels_like,
      temp: data.main.temp,
      windSpeed: data.wind.speed
    };
  }
}
