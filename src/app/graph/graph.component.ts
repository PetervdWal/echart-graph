import { Component, OnInit } from '@angular/core';
import { electricity } from './data';

@Component({
  selector: 'app-graph',
  templateUrl: './graph.component.html',
  styleUrls: ['./graph.component.scss'],
})
export class GraphComponent implements OnInit {
  options: any;

  ngOnInit(): void {
    const xAxisData: string[] = [];
    const data1: number[] = [];
    const data2: number[] = [];

    electricity.forEach((item) => {
      xAxisData.push(item.name);
      data1.push(item.series[0].value);
      data2.push(item.series[1].value);
    });

    this.options = {
      legend: {
        data: ['Electricity', 'Return supply'],
        align: 'left',
      },
      tooltip: {},
      xAxis: {
        data: xAxisData,
        silent: false,
        splitLine: {
          show: false,
        },
      },
      yAxis: {},
      series: [
        {
          name: 'Electricity',
          type: 'bar',
          data: data1,
          color: ['#e60167'],
          animationDelay: (idx: number) => idx * 10,
        },
        {
          name: 'Return supply',
          type: 'bar',
          data: data2,
          color: ['#780036'],
          animationDelay: (idx: number) => idx * 10 + 100,
        },
      ],
      animationEasing: 'elasticOut',
      animationDelayUpdate: (idx: number) => idx * 5,
    };
  }
}
