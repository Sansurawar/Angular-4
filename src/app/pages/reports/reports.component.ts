import { Component, OnInit } from '@angular/core';
import { DataService} from '../../services/data.service'
// import { PostServices } from '../../services/post.service';

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.scss'],
  providers: [ DataService ]
})
export class ReportsComponent implements OnInit {

  fetchDataFromServer: dataInterface;
  firstName: string;
  lastName: string;
  email: string;
  address: Address;
  colorList: any[];
  colorName: string;

  constructor( private dataservice: DataService) { }

  ngOnInit() {
    this.dataservice.getPosts()
      .subscribe(
        data => { this.fetchDataFromServer = data},
        err => { console.log("Error Occured from Server Side")}
      );
      // console.log(data);

      this.firstName = 'Michael';
      this.lastName = 'Don';
      this.email = 'michaeldon@gmail.com';
      this.address = {
        state : 'Manarashtra',
        city : 'Pune',
        location : 'Street 202, Wakad'
      }
      this.colorList = ['red', 'green', 'blue', 'black', 'white', 'orange', 'grey']
  }

  deleteColors(colors) {
    for(let i=0; i<this.colorList.length; i++) {
      if(this.colorList[i] == colors) {
        this.colorList.splice(i, 1);
      }
    }
  }

  reportForms(value) {
    console.log(value);
  }
  addColorList(colors) {
    this.colorList.unshift(colors);
    this.colorName = '';
  }

}

interface dataInterface {
  id: number,
  title: string,
  body: string,
  userId: number
}

interface Address {
  state : string,
  city : string,
  location : string
}

  // public userDtlProfile = {job: '', city: '', id: ''};
// this.postServices.UserProfile()
//   .subscribe(data => this.userDtlProfile = data);

// this.dataservice.getContriesList()
//   .subscribe( data => this.contryList = data);
