import { Component, OnInit } from '@angular/core';
import { DataService} from '../../services/data.service'

@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.component.html',
  styleUrls: ['./appointment.component.scss'],
  providers: [ DataService ]
})
export class AppointmentComponent implements OnInit {

  confirmExpand:boolean = false;
  historyGrid: any[];

  constructor( private historyGridService: DataService) { }

  ngOnInit() {
    this.historyGrid = this.historyGridService.historyGridList();
  }

  confirmToggle() {
    this.confirmExpand = !this.confirmExpand;
  }

}
