import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from "@angular/router";
import { CalenderMaterialModule } from './calender-material.module';
import { calenderRoutingModule } from './routing-calender.module';
import { CalenderComponent, DialogContentExampleDialog } from './calender.component';
import { ViewCalenderComponent } from '../view-calender/view-calender.component';
import { FullCalendarModule } from 'ng-fullcalendar';



@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    calenderRoutingModule,
    CalenderMaterialModule,
    FullCalendarModule
  ],
  declarations: [
    CalenderComponent,
    DialogContentExampleDialog,
    ViewCalenderComponent
  ],
  entryComponents: [DialogContentExampleDialog]
})

export class CalenderModule { }