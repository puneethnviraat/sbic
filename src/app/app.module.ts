import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AdmissionComponent } from './admission/admission.component';
import { ExamComponent } from './exam/exam.component';
import { TransportComponent } from './transport/transport.component';
import { FeeComponent } from './fee/fee.component';
import { AdmissionListComponent } from './admission-list/admission-list.component';
import { PageDevelopmentComponent } from './page-development/page-development.component';

const routes: Routes = [
  
  { path: 'admission', component: AdmissionComponent },
  { path: 'admission-list', component: AdmissionListComponent },
  { path: 'home', component: DashboardComponent },
  { path: 'exam', component: ExamComponent },
  { path: 'fee', component: FeeComponent },
  { path: 'transport', component: TransportComponent },
  { path: 'development', component: PageDevelopmentComponent },
  {path:'', redirectTo:'/home', pathMatch:'full'}

];
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DashboardComponent,
    AdmissionComponent,
    ExamComponent,
    TransportComponent,
    FeeComponent,
    AdmissionListComponent,
    PageDevelopmentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
     RouterModule.forRoot(routes,{useHash:true}) 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
