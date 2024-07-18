import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import {RouterModule} from "@angular/router";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HomeUserComponent } from './home-user/home-user.component';
import { HomeAdminComponent } from './home-admin/home-admin.component';
import { DemandeAbsenceComponent } from './demande-absence/demande-absence.component';
import { FormAbsenceComponent } from './form-absence/form-absence.component';
import {NgOptimizedImage} from "@angular/common";
import { DossierComponent } from './dossier/dossier.component';
import {DemandeAbsenceService} from "./services/demande-absence.service";
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { AdminAbsencesComponent } from './admin-absences/admin-absences.component';
import { AdminEmployeesComponent } from './admin-employees/admin-employees.component';
import { AdminProfileComponent } from './admin-profile/admin-profile.component';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { PersonalInformationComponent } from './personal-information/personal-information.component';
import { AdministrativeInformationComponent } from './administrative-information/administrative-information.component';


import {MatCard, MatCardContent, MatCardModule} from "@angular/material/card";
import { MatDividerModule} from "@angular/material/divider";
import {MatTableModule} from "@angular/material/table";
import {MatTabsModule} from "@angular/material/tabs";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatDatepicker, MatDatepickerInput, MatDatepickerModule, MatDatepickerToggle} from "@angular/material/datepicker";
import {MatNativeDateModule} from "@angular/material/core";
import {MatPaginator} from "@angular/material/paginator";
import { MatToolbarModule} from "@angular/material/toolbar";
import { MatButtonModule, MatIconButton} from "@angular/material/button";
import { MatIconModule} from "@angular/material/icon";
import { MatMenuItem, MatMenuModule, MatMenuTrigger} from "@angular/material/menu";
import { MatSidenavModule} from "@angular/material/sidenav";
import {MatListItem, MatNavList} from "@angular/material/list";



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    HomeUserComponent,
    HomeAdminComponent,
    FormAbsenceComponent,
    DemandeAbsenceComponent,
    DossierComponent,
    AdminAbsencesComponent,
    AdminEmployeesComponent,
    AdminProfileComponent,
    AddEmployeeComponent,
    PersonalInformationComponent,
    AdministrativeInformationComponent,

  ],

    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        NgOptimizedImage,
        HttpClientModule,
        RouterModule,
        MatToolbarModule,
        MatIconButton,
        MatIconModule,
        MatButtonModule,
        MatMenuModule,
        MatMenuTrigger,
        MatMenuItem,
        MatSidenavModule,
        MatListItem,
        MatNavList,
        MatCardModule,
        MatCardContent,
        MatCard,
        MatDividerModule,
        MatTableModule,
        MatTabsModule,
        ReactiveFormsModule,
        MatFormFieldModule,
        MatInputModule,
        MatDatepickerModule,
        MatNativeDateModule,
        MatPaginator


    ],
  providers: [
    DemandeAbsenceService,
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent,]
})
export class AppModule { }
