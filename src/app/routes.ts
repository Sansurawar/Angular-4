import {ModuleWithProviders} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { OrderComponent } from './pages/order/order.component';
import { AgendaComponent } from './pages/agenda/agenda.component';
import { ReportsComponent } from './pages/reports/reports.component';
import { OrderGeneralPageComponent } from './pages/order-general-page/order-general-page.component';
import { PagenotFoundComponent } from './pages/pagenot-found/pagenot-found.component'
import { GeneralInfoComponent } from './pages/general-info/general-info.component';
import { ProgressReportComponent } from './pages/progress-report/progress-report.component';
import { DocumentsComponent } from './pages/documents/documents.component';
import { AppointmentComponent } from './pages/appointment/appointment.component';
import { RecordsComponent } from './pages/records/records.component';
import { ActionListComponent } from './pages/action-list/action-list.component';
import { OthersComponent } from './pages/others/others.component';

const appRoutes: Routes = [
  // { path: '', component:OrderComponent, pathMatch: 'full' },
  { path: 'order', component:OrderComponent
// children: [
//   { path: 'Details', component:OrderGeneralPageComponent}
// ]
  },
  { path: 'order/:id', component:OrderGeneralPageComponent},
  { path: 'agenda', component: AgendaComponent },
  { path: 'reports', component: ReportsComponent},
  { path: 'other', component: OthersComponent},
  { path: 'genralInfo', component: GeneralInfoComponent},
  { path: 'progressreport', component: ProgressReportComponent},
  { path: 'document', component: DocumentsComponent},
  { path: 'appointment', component: AppointmentComponent},
  { path: 'record', component: RecordsComponent},
  { path: 'actionList', component: ActionListComponent},
  { path: '', redirectTo: '/order',  pathMatch: 'full' },
  { path: '**', component: PagenotFoundComponent }
];

export const routing : ModuleWithProviders = RouterModule.forRoot(appRoutes);
