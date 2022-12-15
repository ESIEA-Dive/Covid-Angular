import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/shared/services/data.service';

import * as Highcharts from 'highcharts/highmaps';
import * as worldMap from '@highcharts/map-collection/custom/world.geo.json';

@Component({
  selector: 'app-live-page',
  templateUrl: './live-page.component.html',
  styleUrls: ['./live-page.component.css']
})
export class LivePageComponent implements OnInit {

  liveData: any[] = [];

  constructor(private dataService: DataService) { }

  Highcharts: typeof Highcharts = Highcharts;
  chartConstructor = 'mapChart';

  //options
  chartOptions: Highcharts.Options | any = {
    chart: {
      map: worldMap
    },
    title: {
      text: 'COVID-19 World Data'
    },
    subtitle: {
      text: 'Confirmed Cases Live'
    },
    mapNavigation: {
      enabled: true,
      buttonOptions: {
        alignTo: 'spacingBox'
      }
    },
    legend: {
      enabled: true
    },
    colorAxis: {
      min:0
    },
    series: [{
      type: 'map',
      name: 'COVID-19 Data',
      state: {
        hover: {
          color: '#DC3545'
        }
      },
      dataLabels: {
        enabled: true,
        format: '{point.name}'
      },
      allAreas: false,
      data: [
        ["do", 0],
        ['um',1],
        ['us',2]
      ]
    }]
  }

  ngOnInit(): void {
   this.dataService.getSummaryData()
    .subscribe(
      (data: any) => {
        this.liveData = data.Countries.map((country: any) => [country.CountryCode.toLowerCase(), country.TotalConfirmed]);
        
        this.chartOptions.series[0].data = this.liveData;

        this.Highcharts.mapChart('container', this.chartOptions);
      },
      (error: any) => {
        console.log(error);
      }
    );
  }
}
