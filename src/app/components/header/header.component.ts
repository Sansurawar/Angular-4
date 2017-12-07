import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  // showNotif:boolean = false;
  titlename = "Angular"
  constructor() { }
  ngOnInit() {}

  showShow:boolean = false;
  showAction:boolean = false;

  toggle(){
    this.showShow = !this.showShow;
  }
  actionToggle(){
    this.showAction = !this.showAction;
  }

}
