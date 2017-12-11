import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-order-grid',
  templateUrl: './order-grid.component.html',
  styleUrls: ['./order-grid.component.scss'],
  providers: [ DataService ],
})
export class OrderGridComponent implements OnInit {

  tableGrid : any[];

  constructor ( private dataservice: DataService ) { }

  ngOnInit() {
    this.tableGrid = this.dataservice.tableGridData();
    // this.dataservice.tableGridData().subscribe((data) =>  this.tableGrid = data);
  }

}
