import { Component, Output, OnInit, EventEmitter } from '@angular/core';
@Component({
  selector: 'app-confirmed-bycountry',
  templateUrl: './confirmed-bycountry.component.html',
  styleUrls: ['./confirmed-bycountry.component.css']
})

export class ConfirmedBycountryComponent implements OnInit {

  @Output() country = new EventEmitter<string>();

  constructor() {}

  ngOnInit(): void { 
  }

  passCountryData(searchTerm: string){
    this.country.emit(searchTerm);
  }
}