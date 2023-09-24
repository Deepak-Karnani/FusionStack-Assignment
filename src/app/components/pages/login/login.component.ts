import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AuthService } from '../../../services/auth.service';
import { Router } from '@angular/router';
import { loginSignUp } from '../../../shared/models/loginSignUp';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  constructor(
    private services: AuthService,
    private formbuilder: FormBuilder,
    private router: Router
  ) {}
  ngOnInit(): void {
    this.loginForm = this.formbuilder.group({
      email: [''],
      password: [''],
    });
    throw new Error('Method not implemented.');
  }
  login() {
    this.services.login().subscribe((data) => {
      const user = data['find']((x: any) => {
        return (
          x.email === this.loginForm.value.email &&
          x.password === this.loginForm.value.password
        );
      });
      if (user != null) {
        alert('You Have Logged In Successfully');
        this.loginForm.reset();
        this.router.navigate(['home']);
      } else {
        alert('User not Found');
      }
    });
  }
}
