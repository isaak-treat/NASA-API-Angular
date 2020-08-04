import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-insight',
  templateUrl: './insight.component.html',
  styleUrls: ['./insight.component.css']
})
export class InsightComponent implements OnInit {

  marsWeather = { };
  day_index: number;

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.apiService.getMarsWeather().then(result => {
      result.subscribe((data) => {
        console.log(data);
        this.marsWeather = data;
        this.day_index = -1;
      });
    });
  }


  expandSol(i): void {


    if (this.day_index === i) {
      this.day_index = -1;
    } else {
      this.day_index = i
    } 
  }
}
