import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";

@Injectable()
export class UserService {

  constructor(private http: HttpClient) { }
  getUsers(): Promise<any> {
   return this.http.get("/blog/user/getAllUsers")
     .toPromise()
     .then(res=>{
       return res;
     });
  }
  getAllUserType(): Promise<any> {
    return this.http.get("/blog/user/getAllUserRole")
      .toPromise()
      .then(res=>{
        return res;
      });
  }

  addUser(param) :Promise<any> {
    const headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    return this.http.post('/blog/user/addUser',param,{
      headers:headers
    })
      .toPromise()
      .then(res=>{
        return res;
      });
  }
  deleteUserById(uid):Promise<any> {
    const headers = new HttpHeaders();
    const param = new HttpParams().set("id",uid);
    headers.append('Content-Type', 'application/json');
    return this.http.post('/blog/user/deleteUserById',param,{
      headers:headers
    })
      .toPromise()
      .then(res=>{
        return res;
      });
  }
  searchUser(param): Promise<any> {
    const headers = new HttpHeaders();
    const search_input = new HttpParams().set("param",param);
    headers.append('Content-Type', 'application/json');
    return this.http.post('/blog/user/searchUserByParam',search_input,{
      headers:headers
    })
      .toPromise()
      .then(res=>{
         return res;
      });
  }
  updateUser(param) :Promise<any> {
    const headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    return this.http.post('/blog/user/updateUser',param,{
      headers:headers
    })
      .toPromise()
      .then(res=>{
        return res;
      });
  }

}
