import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-order-grid',
  templateUrl: './order-grid.component.html',
  styleUrls: ['./order-grid.component.scss']
})
export class OrderGridComponent implements OnInit {

  constructor() { };
  tableGrid: any[];

  ngOnInit() {
    this.tableGrid = [
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

}
