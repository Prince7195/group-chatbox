import { Component, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class SignupFormComponent {

  email: string;
  password: string;
  displayName: string;
  errorMsg: string;
  pwdClass: string = 'exampleTxt';

  constructor(private authService: AuthService, 
              private router: Router) { }

  signUp() {
    const email = this.email;
    const password = this.password;
    const displayName = this.displayName;
    this.authService.signUp(email, password, displayName)
        .then(resolve => this.router.navigate(['chat']))
        .catch(error => this.errorMsg = error.message);
    this.email = this.password = this.displayName = "";
  }

  chechPwdLen() {
    if (this.password.length < 6) {
      this.pwdClass = 'errorTxt';
    }else {
      this.pwdClass = 'exampleTxt';
    }
    
  }

}
