import { Component } from '@angular/core';
import {Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})

export class LoginComponent {
  email: string ="";
  password: string ="";
  constructor(private router: Router) {

  }

  Login() {

  }
  navigateToRegister() {
    this.router.navigate(['/register']);
  }

}
