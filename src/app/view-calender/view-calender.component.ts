
import { Component, OnInit, ViewChild } from '@angular/core';
import { CalendarComponent } from 'ng-fullcalendar';
import { Options } from 'fullcalendar';
import { EventSesrvice } from '../event.service';


@Component({
  selector: 'app-view-calender',
  templateUrl: './view-calender.component.html',
  styleUrls: ['./view-calender.component.css']
})
export class ViewCalenderComponent implements OnInit {

  calendarOptions: Options;
  displayEvent: any;
  logger: any[] = [];
  @ViewChild(CalendarComponent) ucCalendar: CalendarComponent;
  constructor(protected eventService: EventSesrvice) { }

  ngOnInit() {
    this.eventService.getEvents().subscribe(data => {
      this.calendarOptions = {
        editable: true,
        eventLimit: false,
        header: {
          left: 'prev,next today',
          center: 'title',
          right: 'month,agendaWeek,agendaDay,listMonth'
        },
        events: data,
      };
    });
  }

  loadevents(model: any) {
    this.displayEvent = model;
  }
  
  eventClick(model: any) {
    model = {
      event: {
        id: model.event.id,
        start: model.event.start,
        end: model.event.end,
        title: model.event.title,
        allDay: model.event.allDay
        // other params
      },
      duration: {}
    }
    this.displayEvent = model;
  }
  updateEvent(model: any) {
    model = {
      event: {
        id: model.event.id,
        start: model.event.start,
        end: model.event.end,
        title: model.event.title
        // other params
      },
      duration: {
        _data: model.duration._data
      }
    }
    this.displayEvent = model;
  }
  windowResize(model: any) {
    console.log('The calendar has adjusted to a window resize');
  }
  viewRender(model: any) {
    console.log('viewRender');
  }
  eventRender(model: any) {
    this.logger.push(model);
  }
  initialized() {
    console.log('Initialized compleate');
  }

}
