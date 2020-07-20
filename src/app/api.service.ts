import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  API_KEY = 'BmTI8hGalCVnFaLf3XQhayZhbIAczfvQQloBLeRI';
  constructor(private httpClient: HttpClient) { }

  public getAPOD() {
    return this.httpClient.get(`https:api.nasa.gov/planetary/apod?api_key=${this.API_KEY}`);
  }

  public getMarsWeather() {
    return this.httpClient.get(`https:api.nasa.gov/insight_weather/?api_key=${this.API_KEY}&feedtype=json&ver=1.0`);
  }
}
