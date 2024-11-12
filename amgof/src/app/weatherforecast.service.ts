import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { environment } from '../environments/environment.development';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherforecastService {

  constructor() { }
  private Http = inject(HttpClient);
  private apiURL = environment.apiURL + '/WeatherForecast';

  public get(): Observable<any> {
    console.log('request init')
    return this.Http.get(this.apiURL);
  }
}
