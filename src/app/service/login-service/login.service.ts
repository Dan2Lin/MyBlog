import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";
import 'rxjs/RX';
import {Observable} from "rxjs/Observable";
import 'rxjs/RX';
import {Router} from "@angular/router";
import 'rxjs/add/operator/toPromise';

@Injectable()
export class LoginService {
  constructor(private http: HttpClient, private router: Router) { }
  doLogin(value) :Promise<any> {
    const body = {
      username: value.username,
      password: value.password
    };

    return this.http.post(`/blog/manager/login`, body)
      .toPromise()
      .then(res => res);
  }

  autoLogin(): Promise<any> {
    const headers = new HttpHeaders();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');
    const param = new HttpParams().set("token",localStorage.getItem("token"));
    return this.http.post(`/blog/manager/autoLogin`, param,{
      headers:headers
    })
    .toPromise()
    .then(res => res);
  }
}
