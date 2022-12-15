import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import { Label } from 'ng2-charts';

@Component({
  selector: 'app-country-chart',
  templateUrl: './country-chart.component.html',
  styleUrls: ['./country-chart.component.css']
})
export class CountryChartComponent implements OnInit, OnChanges {

  @Input() country: string = 'France';

  barChartData: ChartDataSets[] = [
    {
      data: [64, 80 ,98]
    }
  ];
  barChartLabels: Label[] = ['Usa', 'Brazil', 'fuk'];
  barChartOptions: ChartOptions = {
    responsive: true
  }
  barChartType: ChartType = 'bar';
  barChartLegend = true;
  barChartPlugins = [];

  constructor() {}

  ngOnInit(): void {

  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(this.country)
  }

}
