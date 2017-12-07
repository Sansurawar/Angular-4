import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { OrderComponent } from './pages/order/order.component';
import { FilterComponent } from './components/filter/filter.component';
import { OrderGridComponent } from './components/order-grid/order-grid.component';
import { AgendaComponent } from './pages/agenda/agenda.component';
import { ReportsComponent } from './pages/reports/reports.component';

import { routing } from './routes';
import { OrderGeneralPageComponent } from './pages/order-general-page/order-general-page.component';
import { GeneralInfoComponent } from './pages/general-info/general-info.component';
import { ProgressReportComponent } from './pages/progress-report/progress-report.component';
import { DocumentsComponent } from './pages/documents/documents.component';
import { AppointmentComponent } from './pages/appointment/appointment.component';
import { RecordsComponent } from './pages/records/records.component';
import { PagenotFoundComponent } from './pages/pagenot-found/pagenot-found.component';
import { OrderDetailTabsComponent } from './components/order-detail-tabs/order-detail-tabs.component';
import { InsuredComponent } from './components/insured/insured.component';
import { ActionComponent } from './components/action/action.component';
import { FlagComponent } from './components/flag/flag.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HeaderComponent,
    FooterComponent,
    OrderComponent,
    FilterComponent,
    OrderGridComponent,
    AgendaComponent,
    ReportsComponent,
    OrderGeneralPageComponent,
    GeneralInfoComponent,
    ProgressReportComponent,
    DocumentsComponent,
    AppointmentComponent,
    RecordsComponent,
    PagenotFoundComponent,
    OrderDetailTabsComponent,
    InsuredComponent,
    ActionComponent,
    FlagComponent
  ],
  imports: [
    BrowserModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
