import { Component, OnInit } from '@angular/core';
import { DataService} from '../../services/data.service'

@Component({
  selector: 'app-others',
  templateUrl: './others.component.html',
  styleUrls: ['./others.component.scss'],
  providers: [ DataService ]
})
export class OthersComponent implements OnInit {

  contryName: string;
  contryObjs: any;
  contryList: any;

  constructor(private dataservice: DataService) { }

  onclickGetCountry() {
    this.dataservice.getCountryDetils(this.contryName)
      .subscribe( data => this.contryObjs = data.json()[0]);
  }

  ngOnInit() {
    this.dataservice.getContriesList()
      .subscribe( data => this.contryList = data);
  }

}
