import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { User } from '../../models/user';

@Component({
  selector: 'register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  user: User = new User();
  logInFailed = false;
  message : string;
  registerButtontext:string='Register';
  constructor(private router: Router, private auth: AuthService) {}
  onRegister(): void {
    this.registerButtontext = 'Wait,Registering';
    this.auth.register(this.user)
    .then((user) => {
      console.log(user.json());
      localStorage.setItem('token', user.json().auth_token);
      this.router.navigateByUrl('/dashboard');
    })
    .catch((err) => {
      this.registerButtontext = 'Register'
      this.logInFailed = true;
      console.log(err);
      this.message = err.json().message
    });
  }
}