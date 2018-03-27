import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-general-info',
  templateUrl: './general-info.component.html',
  styleUrls: ['./general-info.component.scss']
})
export class GeneralInfoComponent implements OnInit {

  constructor() { }

  generalFormData = {
    workInfo : {
      workOrderType : '',
      serviceLevel : '',
      productLine : '',
      businessUnit : '',
      bizUnit : '',
      receivedDate : '',
      dueDate : '',
      lastProgramReport : '',
      autoCompletionDate : ''
    },

    policyInfo : {
      policyNumber : '',
      policyPeriodFrom : '',
      policyPeriodTo : '',
      auditPeriodFrom : '',
      auditPeriodTo : '',
      policyType : '',
      carrier : ''
    },

    insured : {
      insuredName : '',
      insOtherName : '',
      insuredAddress : '',
      insuredCity : '',
      insuredState : '',
      insZipCode : '',
      inzContactNameFirst : '',
      insContactNameLast : '',
      insMainPhone : '',
      insuredFax : '',
      insCellPhone : '',
      cellEmail : ''
    },

    recordInfo : {
      recordName : '',
      recOtherName : '',
      recordAddress : '',
      recordCity : '',
      recordState : '',
      recZipCode : '',
      recContactName : '',
      recContactNameLast : '',
      recMainPhone : '',
      recordFax : '',
      recCellPhone : '',
      recordEmail : ''
    },

    agentInfo : {
      agentName : '',
      agentNameTwo : '',
      agentAddress : '',
      agentCity : '',
      agentState : '',
      agentZipCode : '',
      agentContactName : '',
      agentContactNameLast : '',
      agentPhone : '',
      agentFax : '',
      agentEmail : ''
    }
  }

  ngOnInit() {
  }

  generalInfoForms(value: any){
    console.log (value);

    // generalService.getdata(generalFormData)
    //this.http.post('http://xxx/externalapi/add', value).subscribe((data) => {});
  }

}
