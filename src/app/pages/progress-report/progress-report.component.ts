import { Component, OnInit } from '@angular/core';
import { DataService} from '../../services/data.service'

@Component({
  selector: 'app-progress-report',
  templateUrl: './progress-report.component.html',
  styleUrls: ['./progress-report.component.scss'],
  providers: [ DataService ]
})
export class ProgressReportComponent implements OnInit {

  progressReportGrid: any[];

  constructor( private progressGridService: DataService) { }

  ngOnInit() {
    this.progressReportGrid = this.progressGridService.progressReportGridList();
  }


}
