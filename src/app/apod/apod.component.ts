import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-apod',
  templateUrl: './apod.component.html',
  styleUrls: ['./apod.component.css']
})
export class ApodComponent implements OnInit {
  photoOfDay = { title: null };
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
