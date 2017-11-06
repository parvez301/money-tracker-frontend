import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { User } from '../../models/user';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  logInFailed = false;
  message : string;
  user: User = new User();
  loginButtontext:string='Login';
  constructor(private router: Router, private auth: AuthService) {}
  onLogin(): void {
    this.loginButtontext = 'Logging In';
    this.auth.login(this.user)
    .then((user) => {
      localStorage.setItem('token', user.json().auth_token);
      this.router.navigateByUrl('/dashboard');
    })
    .catch((err) => {
      console.log(err);
      this.loginButtontext = 'Login'
      this.logInFailed = true;
      this.message = err.json().message
    });
  }
}