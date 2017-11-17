import { Component, OnInit, ViewEncapsulation } from '@angular/core';

import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class LoginFormComponent implements OnInit {

  email: string;
  password: string;
  errorMsg: string;

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  login() {
    this.errorMsg = "";
    if (this.email && this.password) {
      this.authService.login(this.email, this.password)
        .catch(error => this.errorMsg = "invalid email or password");
    }    
    this.email = "";
    this.password = "";
  }

}
