import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-insight',
  templateUrl: './insight.component.html',
  styleUrls: ['./insight.component.css']
})
export class InsightComponent implements OnInit {
  marsWeather = { sol_keys: null,};
  constructor(private apiService: ApiService) { }

  ngOnInit(): void {

    this.apiService.getMarsWeather().then(result => {
      result.subscribe((data) => {
        console.log(data);
        this.marsWeather = data;
      });
    });
  }

  testClick(): void {
    console.log("This a test");
  }
}
