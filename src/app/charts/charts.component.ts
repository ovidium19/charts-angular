import { Component, OnInit } from '@angular/core';
import {ChartService} from "../common/chart.service";
declare let $;
@Component({
  selector: 'ps-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.css']
})
export class ChartsComponent implements OnInit {
  charts: any[] = [];
  selected: number;
  carousel: any;
  optionsLine = {
    type: 'line',
    data: {
      labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
      datasets: [{
        label: '# of Votes',
        data: [12, 19, 3, 5, 2, 3],
        borderColor: [
          'rgba(255,99,132,1)'
        ],
        borderWidth: 1
      },
        {
          label: '# of Votes',
          data: [5,4, 6, 10, 12, 13],
          borderColor: [
            'green'
          ],
          borderWidth: 1
        }
      ]
    },
    options: {
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero:true
          }
        }]
      }
    }
  };
  optionsBar = {
    type: 'bar',
    data: {
      labels: ["Ovi", "Tsvetan", "Sean", "Andy", "Imran", "Tim"],
      datasets: [
        {
          label: " # of Votes",
          data: [6,7,6,10,12,13],
          backgroundColor: [
            "rgba(110,231,110,0.5)",
            "rgba(99,93,142,0.5)",
            "rgba(200,200,200,0.5)",
            "rgba(110,231,110,0.5)",
            "rgba(115,241,123,0.5)",
            "rgba(84,71,131,0.5)",
          ],
          borderColor: [
            'red',
            'green',
            'blue',
            'yellow',
            'cyan',
            "black"
          ]
        }
      ],
    },
    options: {
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero:true
          }
        }]
      }
    }
  };
  optionsRadar = JSON.parse(`{
    "type": "radar",
    "data": {
        "labels": [
            "Game 1",
            "Game 2",
            "Game 3",
            "Game 4",
            "Game 5"
        ],
        "datasets": [
            {
                "label": "Player 1",
                "data": [
                    23,
                    45,
                    89,
                    74,
                    15
                ],
                "pointStyle": "triangle",
                "pointBorderWidth": 1,
                "pointRadius": 8,
                "pointBackgroundColor": "rgba(0,0,0,0.2)",
                "pointBorderColor": "red",
                "borderColor": "red",
                "backgroundColor": "rgba(0,0,0,0)"
            },
            {
                "label": "Average Results",
                "data": [
                    99,
                    67,
                    51,
                    61,
                    30
                ],
                "pointStyle": "circle",
                "pointBorderWidth": 1,
                "pointRadius": 5,
                "pointBackgroundColor": "rgba(0,0,0,0.2)",
                "pointBorderColor": "green",
                "borderColor": "green",
                "backgroundColor": "rgba(0,0,0,0)"
            }
        ]
    },
    "options": {}
}`);
  optionsPie = {
    type: 'doughnut',
    data: {
      labels: ["Red", "Blue", "Yellow"],
      datasets: [{
        label: '# of Votes',
        data: [12, 19, 3],
        backgroundColor: [
          "red",
          "blue",
          "yellow"
        ]
      }]
    },
    options: {
    }
  };
  optionsJson : any;
  constructor(private _chart: ChartService) { }

  ngOnInit() {
    this.carousel = $("#myCarousel");
    this.carousel.carousel({interval: false});

    this.optionsJson = JSON.stringify(this.optionsLine, null, 4);


    this.charts.push({id: 'canvas0',chart: undefined, optionsArr: this.optionsLine});
    setTimeout(() => {
      this.charts[0].ctx = document.getElementById('canvas0');
      this.selected = 0;
      this.charts[0].chart = this._chart.instantiate(this.charts[0].ctx,$.extend({},this.charts[0].optionsArr));
      },0);


    this.charts.push({id: 'canvas1',chart: undefined, optionsArr: this.optionsBar});
    setTimeout(() => {
      this.charts[1].ctx = document.getElementById('canvas1');
      this.charts[1].chart = this._chart.instantiate(this.charts[1].ctx,$.extend({},this.charts[1].optionsArr));
    },0);

    this.charts.push({id: 'canvas2',chart: undefined, optionsArr: this.optionsRadar});
    setTimeout(() => {
      this.charts[2].ctx = document.getElementById('canvas2');
      this.charts[2].chart = this._chart.instantiate(this.charts[2].ctx,$.extend({},this.charts[2].optionsArr));
    },0);

    this.charts.push({id: 'canvas3',chart: undefined, optionsArr: this.optionsPie});
    setTimeout(() => {
      this.charts[3].ctx = document.getElementById('canvas3');
      this.charts[3].chart = this._chart.instantiate(this.charts[3].ctx,$.extend({},this.charts[3].optionsArr));
    },0);
  }
  OnRefresh(): void {
    this.charts[this.selected].optionsArr = JSON.parse(this.optionsJson);
    this.optionsJson = JSON.stringify(this.charts[this.selected].optionsArr,null,4);
    this.charts[this.selected].chart.data = this.charts[this.selected].optionsArr.data;
    this.charts[this.selected].chart.update();
  }
  carouselSlide(dir: string): void {
    this.carousel.carousel(dir);
    if (this.selected === 0 && dir=='prev'){
      return;
    }
    this.selected = (dir=='next' ? this.selected + 1 : this.selected-1) % this.charts.length;
    this.optionsJson = JSON.stringify(this.charts[this.selected].optionsArr,function(key,val){
      return key === '_meta' ? undefined: val;
    },4);
  }

}
