import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CsvUploadComponent } from './csv-upload/csv-upload.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule } from '@angular/forms';
import { TabViewModule } from 'primeng/tabview';
import { HomeComponent } from './home/home.component';
import { RouterModule, Routes } from '@angular/router';
import { RegistrationComponent } from './registration/registration.component';
import {CardModule} from 'primeng/card';
import {ButtonModule} from 'primeng/button';
import { LoginComponent } from './login/login.component';
import {HttpClientModule} from '@angular/common/http';


const routes: Routes = [
  
];

@NgModule({
  declarations: [
    AppComponent,
    CsvUploadComponent,
    HomeComponent,
    RegistrationComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    NgbModule,
    TabViewModule,
    RouterModule.forRoot(routes),
    CardModule,
    ButtonModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [RouterModule]  
})
export class AppModule { }
