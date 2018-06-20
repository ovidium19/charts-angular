import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from "@angular/forms";
import { CommonModule} from "@angular/common";

import { AppComponent } from './app.component';
import { EventsListComponent } from './events/events-list.component';
import { EventThumbnailComponent } from './events/event-thumbnail.component';
import { NavBarComponent } from './nav/nav-bar.component';
import {EventsService} from "./events/shared/events.service";
import {ToastrService} from "./common/toastr.service";
import {ChartService} from "./common/chart.service";
import { ChartsComponent } from './charts/charts.component';

@NgModule({
  declarations: [
    AppComponent,
    EventsListComponent,
    EventThumbnailComponent,
    NavBarComponent,
    ChartsComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule
  ],
  providers: [EventsService, ToastrService, ChartService],
  bootstrap: [AppComponent]
})
export class AppModule { }
