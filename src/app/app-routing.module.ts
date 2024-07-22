import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import {DemandeAbsenceComponent} from "./demande-absence/demande-absence.component";
import {FormAbsenceComponent} from "./form-absence/form-absence.component";
import {DossierComponent} from "./dossier/dossier.component";
import {AdminEmployeesComponent} from "./admin-employees/admin-employees.component";
import {AdminAbsencesComponent} from "./admin-absences/admin-absences.component";
import {AdminProfileComponent} from "./admin-profile/admin-profile.component";
import {HomeAdminComponent} from "./home-admin/home-admin.component";
import {AddEmployeeComponent} from "./add-employee/add-employee.component";
import {PersonalInformationComponent} from "./personal-information/personal-information.component";
import {AdministrativeInformationComponent} from "./administrative-information/administrative-information.component";
import {PieceJointesComponent} from "./piece-jointes/piece-jointes.component";
import {FormationComponent} from "./formation/formation.component";

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  {path : 'form absence' , component : FormAbsenceComponent},
  {path : 'absence' , component : DemandeAbsenceComponent},
  {path : 'dossier' , component : DossierComponent},
  {path : 'formation' , component : FormationComponent},

  { path: 'admin-employees', component: AdminEmployeesComponent },
  { path: 'pieces jointes', component: PieceJointesComponent },
  { path: 'admin-absences', component: AdminAbsencesComponent },
  { path: 'admin-profile', component: AdminProfileComponent },
  { path: 'home-admin', component: HomeAdminComponent},
  { path: 'add-employee', component: AddEmployeeComponent},
  { path: 'personal-information', component: PersonalInformationComponent},
  { path: 'administrative-information', component: AdministrativeInformationComponent},
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule ]
})
export class AppRoutingModule { }
