import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable()
export class UserService {

  constructor(private http: HttpClient) { }
  getUsers(): Promise<any>{
   return this.http.get("http://localhost:8081/blog/user/getAllUsers")
     .toPromise()
     .then(res=>{
       return res;
     });
  }
}
