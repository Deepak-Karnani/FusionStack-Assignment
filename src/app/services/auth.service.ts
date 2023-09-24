import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { loginSignUp } from '../shared/models/loginSignUp';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}
  //POST METHOD/SIGNUP
  signup(info: loginSignUp): Observable<loginSignUp> {
    return this.http.post<loginSignUp>(
      'http://localhost:3000/UserSignupForm/',
      info
    );
  }
  //GET/Login
  login(): Observable<loginSignUp> {
    return this.http.get<loginSignUp>('http://localhost:3000/UserSignupForm/');
  }
}
