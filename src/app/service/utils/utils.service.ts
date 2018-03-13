import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";

@Injectable()
export class UtilsService {

  constructor(private http: HttpClient) { }

  uploadImage(param):Promise<any> {
    const headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    return this.http.post('/blog/article/uploadImage',param,{
      headers:headers
    })
      .toPromise()
      .then(res=>{
        return res;
      });
  }
}
