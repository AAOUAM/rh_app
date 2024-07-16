import { Component } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  nom: string = '';
  prenom: string = '';
  email: string = '';
  cin : string = '';
  password: string = '';
  sexe: any = '';
  dateNaissance: any;
  lieuNaissance: any='';


  Register(){
    //data ={
      //nom:this.nom,
      //prenom:this.prenom,
      //email:this.email,
      //cin:this.cin,
      //password:this.password,
    }
  }

