import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-progress-report',
  templateUrl: './progress-report.component.html',
  styleUrls: ['./progress-report.component.scss']
})
export class ProgressReportComponent implements OnInit {

  progressReportGrid: any[];
  constructor() { }

  ngOnInit() {
    this.progressReportGrid = [
      {dateTime: '2/7/2017 - 2:30 pm', progNoteType: 'Accountant Busy', Notes: 'Accountant said call next week', fieldRep: 'Joe Sam Ericsson' },
      {dateTime: '2/7/2017 - 2:30 pm', progNoteType: 'Accountant Busy', Notes: 'Accountant said call next week', fieldRep: 'Mike Bernake' },
      {dateTime: '2/7/2017 - 2:30 pm', progNoteType: 'Accountant Has Records', Notes: 'Olaf said accountant keeps all records', fieldRep: 'Joe Sam Ericsson' },
      {dateTime: '2/7/2017 - 2:30 pm', progNoteType: 'Accountant Has Records', Notes: 'Accountant said call next week', fieldRep: 'Mike Bernake' },
      {dateTime: '2/7/2017 - 2:30 pm', progNoteType: 'Accountant Busy', Notes: 'Olaf said accountant keeps all records', fieldRep: 'Joe Sam Ericsson' },
      {dateTime: '2/7/2017 - 2:30 pm', progNoteType: 'Accountant Has Records', Notes: 'Accountant said call next week', fieldRep: 'Mike Bernake' },
      {dateTime: '2/7/2017 - 2:30 pm', progNoteType: 'Accountant Busy', Notes: 'Olaf said accountant keeps all records', fieldRep: 'Joe Sam Ericsson' }
    ]
  }


}
