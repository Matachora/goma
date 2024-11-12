import { WeatherforecastService } from './weatherforecast.service';
import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  weatherforecasts: any[] = [];
  weatherforecastService = inject(WeatherforecastService);
  constructor(){
    this.weatherforecastService.get().subscribe(weatherforecasts => {
      console.log('request receibed');
      this.weatherforecasts = weatherforecasts;
    })
  }
}
