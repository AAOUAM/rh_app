import { Component } from '@angular/core';
import {HomeComponent} from "../home/home.component";

@Component({
  selector: 'app-home-admin',
  templateUrl: './home-admin.component.html',
  styleUrl: './home-admin.component.css'
})
export class HomeAdminComponent {
  constructor(protected HomeComponent: HomeComponent) {

  }
}
