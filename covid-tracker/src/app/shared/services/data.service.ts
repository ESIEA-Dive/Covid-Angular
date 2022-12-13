import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class DataService {

  constructor(private http: HttpClient) { }

  getSummaryData() {
    return this.http.get('https://api.covid19api.com/summary')
  }
}
