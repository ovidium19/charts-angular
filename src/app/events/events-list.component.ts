import { Component, OnInit } from '@angular/core';
import {EventsService} from "./shared/events.service";
import {ToastrService} from "../common/toastr.service";
import {ChartService} from "../common/chart.service";

@Component({
  selector: 'ps-events-list',
  templateUrl: './events-list.component.html',
  styleUrls: ['./events-list.component.css']
})
export class EventsListComponent implements OnInit {
  events: any[];
  ctx: any;
  defaultOptions: any;
  constructor(private eventsService: EventsService, private toasterService: ToastrService, private chartService: ChartService) { }

  ngOnInit() {
    this.events =this.eventsService.getEvents();
    this.ctx = document.getElementById('myChart');
    this.defaultOptions = {
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
    }
    this.chartService.instantiate(this.ctx,this.defaultOptions);
  }

  receiveResponse(data): void {
    console.log(data);
  }
  deleteElem(i: number){
    this.events.splice(i,1);
  }

}
