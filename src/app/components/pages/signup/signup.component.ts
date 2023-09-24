import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AuthService } from '../../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent implements OnInit {
  signupForm!: FormGroup;
  constructor(
    private service: AuthService,
    private formbuilder: FormBuilder,
    private router: Router
  ) {}
  ngOnInit(): void {
    this.signupForm = this.formbuilder.group({
      fname: [''],
      lname: [''],
      phone: [],
      email: [''],
      password: [''],
    });
  }

  signup() {
    this.service.signup(this.signupForm.value).subscribe((data) => {
      console.log(data);
      alert('Signup Successful');
      this.signupForm.reset();
      this.router.navigate(['login']);
    });
  }
}
