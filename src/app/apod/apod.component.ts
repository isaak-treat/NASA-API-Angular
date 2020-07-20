import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-apod',
  templateUrl: './apod.component.html',
  styleUrls: ['./apod.component.css']
})
export class ApodComponent implements OnInit {
  photoOfDay;
  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.apiService.getAPOD().subscribe((data) => {
      console.log(data);
      this.photoOfDay = data
      console.log(this.photoOfDay);
    });
  }

}
