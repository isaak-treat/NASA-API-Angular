import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-apod',
  templateUrl: './apod.component.html',
  styleUrls: ['./apod.component.css']
})
export class ApodComponent implements OnInit {
  photoOfDay = { copyright: null, date: null, explanation: null, media_type: null, service_version: null, title: null, url: null };
  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
   
    this.apiService.getAPOD().then(result => {
      result.subscribe((data) => {
        this.photoOfDay = data;
        console.log(this.photoOfDay);
      });
    });
  }

}
