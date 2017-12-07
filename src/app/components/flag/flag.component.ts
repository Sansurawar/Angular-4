import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-flag',
  templateUrl: './flag.component.html',
  styleUrls: ['./flag.component.scss']
})
export class FlagComponent implements OnInit {

  flatNotifList: any[];
  constructor() { }

  ngOnInit() {
    this.flatNotifList = [
      {voidNumber: 'WOID 1144332', flatDescrip: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum printing and typesetting industry. Lorem Ipsum.', flatTime: '10:27 am'},
      {voidNumber: 'WOID 1244332', flatDescrip: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum printing and typesetting industry.', flatTime: '11:27 am'},
      {voidNumber: 'WOID 1344332', flatDescrip: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum printing and typesetting industry. Lorem Ipsum.', flatTime: '11:48 am'}
    ]
  }

}
