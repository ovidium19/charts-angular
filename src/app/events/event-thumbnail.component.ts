import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ToastrService} from "../common/toastr.service";

@Component({
  selector: 'ps-event-thumbnail',
  templateUrl: './event-thumbnail.component.html',
  styleUrls: ['./event-thumbnail.component.css']
})
export class EventThumbnailComponent implements OnInit {
  @Input() event: any;
  @Input() index: number;
  @Output() response: EventEmitter<any> = new EventEmitter();
  @Output() destroy: EventEmitter<number> = new EventEmitter();
  constructor(private toasterService: ToastrService) { }
  ngOnInit() {
  }

  OnClick(): void {
    this.toasterService.success(this.event.name);
    this.toasterService.info(this.event.location.country,this.event.name);
  }
  OnDestroy(e: any): void{
    this.destroy.emit(this.index);
  }
}
