import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';

@Component({
  selector: 'app-order-general-page',
  templateUrl: './order-general-page.component.html',
  styleUrls: ['./order-general-page.component.scss']
})
export class OrderGeneralPageComponent implements OnInit {

  public orderVoidId;
  public id;
  constructor() { }

  ngOnInit() {
    // this.routing.params.subscribe((params : Params) => {
    //   let id = parseInt(params['id']);
    //   this.orderVoidId = id;
    // })
  }

};
