import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-flag',
  templateUrl: './flag.component.html',
  styleUrls: ['./flag.component.scss'],
  providers: [ DataService ]
})
export class FlagComponent implements OnInit {

  flatNotifList: any[];

  constructor( private flagNotifService: DataService ) { }

  ngOnInit() {
    this.flatNotifList = this.flagNotifService.floatNotificationList();
  }

}
