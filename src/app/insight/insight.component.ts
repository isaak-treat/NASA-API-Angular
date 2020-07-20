import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-insight',
  templateUrl: './insight.component.html',
  styleUrls: ['./insight.component.css']
})
export class InsightComponent implements OnInit {
  constructor(private apiService: ApiService) { }
  marsWeather;
  arrTemp: string [];
  ngOnInit(): void {
    this.apiService.getMarsWeather().subscribe((data) => {
      console.log(data);
      this.marsWeather = data;
      this.arrTemp = data as string[];
      console.log(this.arrTemp[1])
    });
  }

}
