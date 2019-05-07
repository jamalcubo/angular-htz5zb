import { Component } from '@angular/core';
import moment from 'moment';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  startDate: moment.Moment = moment('1/1/2017');
  name = 'Angular';
  currentDate: moment.Moment = moment();
  currentTime: string = moment().format('M/D/YYYY hh:mm:ss a');
  daysFrom2017: number;
  humanized: string;
  humanizedNow: string;
  weeks: number;

  constructor() {
    this.humanized = moment.duration(moment().diff(this.startDate)).humanize();
    this.humanizedNow = moment.duration(moment().diff(moment())).humanize();

    // if you need to force to number of days
    this.daysFrom2017 = this.currentDate.diff(moment('1/1/2017'), 'days');

    // if you need to force to number of weeks
    this.weeks = moment().diff(this.startDate, 'week');
    
    console.log('Days from 1/1/2017:', this.daysFrom2017);
    console.log('Current Time:', this.currentTime);
  }
}

