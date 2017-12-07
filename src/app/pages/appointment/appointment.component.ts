import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.component.html',
  styleUrls: ['./appointment.component.scss']
})
export class AppointmentComponent implements OnInit {

  confirmExpand:boolean = false;
  historyGrid: any[];
  constructor() { }

  ngOnInit() {
    this.historyGrid = [
      {changeDate: '23/7/2017', letterAddress: '456 N Rodeo Dr, Beverly Hills, CA 65', apptDate: '21/7/2017', windowTime: '8:30 am - 12:30 pm', notes: 'Lorem Ipsum dolor...', status: 'Rescheduled (Post Sent)' },
      {changeDate: '17/6/2017', letterAddress: 'johnsmith@gmail.com', apptDate: '16/6/2017', windowTime: '9:00 am - 5:00 pm', notes: 'Lorem Ipsum dolor...', status: 'Rescheduled (Email Sent)' },
      {changeDate: '11/5/2017', letterAddress: '456 N Rodeo Dr, Beverly Hills, CA 65', apptDate: '11/5/2017', windowTime: '2:00 am - 8:00 pm', notes: 'Lorem Ipsum dolor...', status: 'Confirmed (No Letter Sent))' },
      {changeDate: '27/4/2017', letterAddress: 'michaelsmith@gmail.com', apptDate: '27/4/2017', windowTime: '9:00 am - 5:00 pm', notes: '---', status: 'Rescheduled (Post Sent)' }
    ]
  }

  confirmToggle() {
    this.confirmExpand = !this.confirmExpand;
  }

}
