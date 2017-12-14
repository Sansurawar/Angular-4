import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class DataService {

  constructor( public http: Http) {
    console.log('data services ran...')
  }

  getPosts() {
    return this.http.get('https://jsonplaceholder.typicode.com/posts')
      .map(res => res.json());
  }

  tableGridData() {
    return [
      { voidId:'1053330', unitName: 'Hartford Ins. Group', age: 20, insureName: 'ROZZZZP', status: 'Scheduled', productLine: 'OSI Physical Audit', address: '799 E Dragram Suite Tucson AZ 85705 New Jersey', dateEmployee: 'Exp:9/27/2017 Due:9/27/2017 Sch:12/27/2017 Employee:Lorem Ips', svcCode: 'Normal' },
      { voidId:'8417827', unitName: 'Atlantic Casualty Insurance', age: 30, insureName: 'Absolute', status: 'Assigned', productLine: 'OSI Physical Audit', address: '799 E Dragram Suite Tucson AZ 85705 New Jersey', dateEmployee: 'Exp:9/27/2017 Due:9/27/2017 Sch:12/27/2017 Employee:Lorem Ips', svcCode: 'Normal' },
      { voidId:'1053330', unitName: 'ACME Insurance', age: 40, insureName: 'SJS Truck', status: 'Completed', productLine: 'OSI Physical Audit', address: '799 E Dragram Suite Tucson AZ 85705 New Jersey', dateEmployee: 'Exp:9/27/2017 Due:9/27/2017 Sch:12/27/2017 Employee:Lorem Ips', svcCode: 'Normal' },
      { voidId:'1057404', unitName: 'Western National', age: 50, insureName: 'Pine Mount', status: 'Closed Out', productLine: 'OSI Physical Audit', address: '799 E Dragram Suite Tucson AZ 85705 New Jersey', dateEmployee: 'Exp:9/27/2017 Due:9/27/2017 Sch:12/27/2017 Employee:Lorem Ips', svcCode: 'Normal' },
      { voidId:'1758330', unitName: 'Midwestern', age: 60, insureName: 'Olaf’s Centre', status: 'Review', productLine: 'OSI Physical Audit', address: '799 E Dragram Suite Tucson AZ 85705 New Jersey', dateEmployee: 'Exp:9/27/2017 Due:9/27/2017 Sch:12/27/2017 Employee:Lorem Ips', svcCode: 'Normal' },

      { voidId:'1883339', unitName: 'Hartford Ins. Group', age: 70, insureName: 'ROZZZZP', status: 'Scheduled', productLine: 'OSI Physical Audit', address: '799 E Dragram Suite Tucson AZ 85705 New Jersey', dateEmployee: 'Exp:9/27/2017 Due:9/27/2017 Sch:12/27/2017 Employee:Lorem Ips', svcCode: 'Normal' },
      { voidId:'1963380', unitName: 'Atlantic Casualty Insurance', age: 80, insureName: 'Absolute', status: 'Assigned', productLine: 'OSI Physical Audit', address: '799 E Dragram Suite Tucson AZ 85705 New Jersey', dateEmployee: 'Exp:9/27/2017 Due:9/27/2017 Sch:12/27/2017 Employee:Lorem Ips', svcCode: 'Normal' },
      { voidId:'1253312', unitName: 'ACME Insurance', age: 35, insureName: 'SJS Truck', status: 'Completed', productLine: 'OSI Physical Audit', address: '799 E Dragram Suite Tucson AZ 85705 New Jersey', dateEmployee: 'Exp:9/27/2017 Due:9/27/2017 Sch:12/27/2017 Employee:Lorem Ips', svcCode: 'Normal' },
      { voidId:'1554434', unitName: 'Western National', age: 45, insureName: 'Pine Mount', status: 'Closed Out', productLine: 'OSI Physical Audit', address: '799 E Dragram Suite Tucson AZ 85705 New Jersey', dateEmployee: 'Exp:9/27/2017 Due:9/27/2017 Sch:12/27/2017 Employee:Lorem Ips', svcCode: 'Normal' },
      { voidId:'1444399', unitName: 'Midwestern', age: 55, insureName: 'Olaf’s Centre', status: 'Review', productLine: 'OSI Physical Audit', address: '799 E Dragram Suite Tucson AZ 85705 New Jersey', dateEmployee: 'Exp:9/27/2017 Due:9/27/2017 Sch:12/27/2017 Employee:Lorem Ips', svcCode: 'Normal' }
    ];
  }

  actionPastList() {
    return [
      {voidNumber: 'WOID 4649986', from: 'From: Martin Smith', description: 'Follow up with agent on WOID: 4649986 - Agent said to call back tomorrow', date: '9/8/17, 9AM EDT'},
      {voidNumber: 'WOID 5690986', from: 'From: Edward Carter', description: 'Follow up with agent on WOID: 4649986 - Agent said to call back tomorrow', date: '9/10/17, 11AM EDT'},
      {voidNumber: 'WOID 4649986', from: 'From: Martin Smith', description: 'Follow up with agent on WOID: 4649986 - Agent said to call back tomorrow', date: '9/11/17, 11AM EDT'}
    ];
  }

  actionUpcomingList() {
    return [
      {voidNumber: 'WOID 4649986', from: 'From: Martin Smith', description: 'Agent has sent the source documents, please check and update.', date: 'Today, 11:23 AM CST'},
      {voidNumber: 'From: Self', from: 'Appointment at Kaiser Permanente on 9/7/17 2-3pm.', description: 'Location: 22 Burk Street, Wesley Drive, Chicago', date: 'Today, 5:00 PM CST'},
      {voidNumber: 'From: Self', from: 'Appointment at Kaiser Permanente on 9/7/17 2-3pm.', description: 'Location: 22 Burk Street, Wesley Drive, Chicago', date: 'Today, 5:00 PM CST'},
      {voidNumber: 'From: Self', from: 'Appointment at Kaiser Permanente on 9/7/17 2-3pm.', description: 'Location: 22 Burk Street, Wesley Drive, Chicago', date: 'Today, 5:00 PM CST'},
      {voidNumber: 'From: Self', from: 'Appointment at Kaiser Permanente on 9/7/17 2-3pm.', description: 'Location: 22 Burk Street, Wesley Drive, Chicago', date: 'Today, 5:00 PM CST'}
    ];
  }

  floatNotificationList() {
    return [
      {voidNumber: 'WOID 1144332', flatDescrip: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum printing and typesetting industry. Lorem Ipsum.', flatTime: '10:27 am'},
      {voidNumber: 'WOID 1244332', flatDescrip: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum printing and typesetting industry.', flatTime: '11:27 am'},
      {voidNumber: 'WOID 1344332', flatDescrip: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum printing and typesetting industry. Lorem Ipsum.', flatTime: '11:48 am'}
    ]
  }

  progressReportGridList() {
    return [
      {dateTime: '2/7/2017 - 2:30 pm', progNoteType: 'Accountant Busy', Notes: 'Accountant said call next week', fieldRep: 'Joe Sam Ericsson' },
      {dateTime: '2/7/2017 - 2:30 pm', progNoteType: 'Accountant Busy', Notes: 'Accountant said call next week', fieldRep: 'Mike Bernake' },
      {dateTime: '2/7/2017 - 2:30 pm', progNoteType: 'Accountant Has Records', Notes: 'Olaf said accountant keeps all records', fieldRep: 'Joe Sam Ericsson' },
      {dateTime: '2/7/2017 - 2:30 pm', progNoteType: 'Accountant Has Records', Notes: 'Accountant said call next week', fieldRep: 'Mike Bernake' },
      {dateTime: '2/7/2017 - 2:30 pm', progNoteType: 'Accountant Busy', Notes: 'Olaf said accountant keeps all records', fieldRep: 'Joe Sam Ericsson' },
      {dateTime: '2/7/2017 - 2:30 pm', progNoteType: 'Accountant Has Records', Notes: 'Accountant said call next week', fieldRep: 'Mike Bernake' },
      {dateTime: '2/7/2017 - 2:30 pm', progNoteType: 'Accountant Busy', Notes: 'Olaf said accountant keeps all records', fieldRep: 'Joe Sam Ericsson' }
    ]
  }

  historyGridList() {
    return [
      {changeDate: '23/7/2017', letterAddress: '456 N Rodeo Dr, Beverly Hills, CA 65', apptDate: '21/7/2017', windowTime: '8:30 am - 12:30 pm', notes: 'Lorem Ipsum dolor...', status: 'Rescheduled (Post Sent)' },
      {changeDate: '17/6/2017', letterAddress: 'johnsmith@gmail.com', apptDate: '16/6/2017', windowTime: '9:00 am - 5:00 pm', notes: 'Lorem Ipsum dolor...', status: 'Rescheduled (Email Sent)' },
      {changeDate: '11/5/2017', letterAddress: '456 N Rodeo Dr, Beverly Hills, CA 65', apptDate: '11/5/2017', windowTime: '2:00 am - 8:00 pm', notes: 'Lorem Ipsum dolor...', status: 'Confirmed (No Letter Sent))' },
      {changeDate: '27/4/2017', letterAddress: 'michaelsmith@gmail.com', apptDate: '27/4/2017', windowTime: '9:00 am - 5:00 pm', notes: '---', status: 'Rescheduled (Post Sent)' }
    ]
  }


}
