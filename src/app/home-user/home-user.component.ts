import { Component } from '@angular/core';
import {HomeComponent} from "../home/home.component";



@Component({
  selector: 'app-home-user',
  templateUrl: './home-user.component.html',
  styleUrl: './home-user.component.css'
})
export class HomeUserComponent {

  constructor(protected HomeComponent: HomeComponent) {

  }

}
