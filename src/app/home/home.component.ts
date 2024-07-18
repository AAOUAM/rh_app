import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  userType: string = 'admin';// or 'admin'
  nom : string = 'AAOUAM';
  prenom : string = 'Zakaria';
  sexe: string = 'Monsieur'; // or 'Madame'
  constructor() {
    //this.userType = authService.getUserType();
  }

}
