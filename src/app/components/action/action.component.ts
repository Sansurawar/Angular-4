import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-action',
  templateUrl: './action.component.html',
  styleUrls: ['./action.component.scss'],
  providers: [ DataService ]
})
export class ActionComponent implements OnInit {

  actionNotifPast: any[];
  actionNotifUpcoming: any[];
  actionPastShow : boolean = true;

  constructor( private actionListService: DataService ) { }

  ngOnInit() {
    this.actionNotifPast = this.actionListService.actionPastList();
    this.actionNotifUpcoming = this.actionListService.actionUpcomingList();
  }

  actionPastToggle(){
    this.actionPastShow = !this.actionPastShow;
  }

}
