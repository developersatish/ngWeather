import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private _httpClient: HttpClient) { }
  
  get(city:string): Observable<any> {
    return this._httpClient.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=5c4c4f05357a68710262262eef88efd2`);
  }
}
