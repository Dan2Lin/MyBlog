import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs/Observable";
import 'rxjs/RX';
import {Router} from "@angular/router";
import 'rxjs/add/operator/toPromise';

@Injectable()
export class LoginService {
  constructor(private http: HttpClient, private router: Router) { }
  doLogin(value) :Promise<any>{
    console.log("LoginService called...");
    const body = {
      username: value.username,
      password: value.password
    };

    return this.http.post('http://localhost:8081/blog/manager/login', body)
      .toPromise()
      .then(res => res);
  }
}
