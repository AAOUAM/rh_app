import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import {DashboardComponent} from "./dashboard/dashboard.component";
import {DemandeAbsenceComponent} from "./demande-absence/demande-absence.component";
import {FormAbsenceComponent} from "./form-absence/form-absence.component";
import {DossierComponent} from "./dossier/dossier.component";

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'dashboard' , component : DashboardComponent },
  {path : 'absence' , component : DemandeAbsenceComponent},
  {path : 'formabsence' , component : FormAbsenceComponent},
  {path : 'dossier' , component : DossierComponent},
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
