import { Component, OnInit } from '@angular/core';
import { DataService} from '../../services/data.service'

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.scss'],
  providers: [ DataService ]
})
export class ReportsComponent implements OnInit {

  fetchDataFromServer: dataInterface;

  constructor( private dataservice: DataService) { }

  ngOnInit() {

    this.dataservice.getPosts()
      .subscribe(data => {
        // console.log(data);
        this.fetchDataFromServer = data;
      })
  }

}

interface dataInterface {
  id: number,
  title: string,
  body: string,
  userId: number
}
