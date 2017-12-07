import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-action',
  templateUrl: './action.component.html',
  styleUrls: ['./action.component.scss']
})
export class ActionComponent implements OnInit {

  actionNotifPast: any[];
  actionNotifUpcoming: any[];
  actionPastShow : boolean = true;
  constructor() { }

  ngOnInit() {
    this.actionNotifPast = [
      {voidNumber: 'WOID 4649986', from: 'From: Martin Smith', description: 'Follow up with agent on WOID: 4649986 - Agent said to call back tomorrow', date: '9/8/17, 9AM EDT'},
      {voidNumber: 'WOID 5690986', from: 'From: Edward Carter', description: 'Follow up with agent on WOID: 4649986 - Agent said to call back tomorrow', date: '9/10/17, 11AM EDT'},
      {voidNumber: 'WOID 4649986', from: 'From: Martin Smith', description: 'Follow up with agent on WOID: 4649986 - Agent said to call back tomorrow', date: '9/11/17, 11AM EDT'}
    ];
    this.actionNotifUpcoming = [
      {voidNumber: 'WOID 4649986', from: 'From: Martin Smith', description: 'Agent has sent the source documents, please check and update.', date: 'Today, 11:23 AM CST'},
      {voidNumber: 'From: Self', from: 'Appointment at Kaiser Permanente on 9/7/17 2-3pm.', description: 'Location: 22 Burk Street, Wesley Drive, Chicago', date: 'Today, 5:00 PM CST'},
      {voidNumber: 'From: Self', from: 'Appointment at Kaiser Permanente on 9/7/17 2-3pm.', description: 'Location: 22 Burk Street, Wesley Drive, Chicago', date: 'Today, 5:00 PM CST'},
      {voidNumber: 'From: Self', from: 'Appointment at Kaiser Permanente on 9/7/17 2-3pm.', description: 'Location: 22 Burk Street, Wesley Drive, Chicago', date: 'Today, 5:00 PM CST'},
      {voidNumber: 'From: Self', from: 'Appointment at Kaiser Permanente on 9/7/17 2-3pm.', description: 'Location: 22 Burk Street, Wesley Drive, Chicago', date: 'Today, 5:00 PM CST'}
    ]
  }

  actionPastToggle(){
    this.actionPastShow = !this.actionPastShow;
  }

}
