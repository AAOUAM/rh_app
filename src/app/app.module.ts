import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HomeUserComponent } from './home-user/home-user.component';
import { HomeAdminComponent } from './home-admin/home-admin.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DemandeAbsenceComponent } from './demande-absence/demande-absence.component';
import { FormAbsenceComponent } from './form-absence/form-absence.component';
import {NgOptimizedImage} from "@angular/common";
import { DossierComponent } from './dossier/dossier.component';
import {DemandeAbsenceService} from "./services/demande-absence.service";



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    HomeUserComponent,
    HomeAdminComponent,
    DashboardComponent,
    DemandeAbsenceComponent,
    FormAbsenceComponent,
    DossierComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        NgOptimizedImage,
        HttpClientModule

    ],
  providers: [
    DemandeAbsenceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
