import {EventEmitter, Injectable, Output} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";
import 'rxjs/RX';
@Injectable()
export class ArticleService {
  searchEvent:EventEmitter<String> = new EventEmitter();
  constructor(private http:HttpClient) { }
  getArticleList():Promise<any> {
    return this.http.post('/blog/article/getArticles',null)
      .toPromise()
      .then(res=>{
        return res;
      });
  }
  searchArticle(param):Promise<any> {
    const inputUser = new HttpParams().set("searchInput",param);
    const headers = new HttpHeaders();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');
    return this.http.post('/blog/article/searchArticles',inputUser,{
      headers:headers
    }).toPromise()
      .then(res=>{
        return res;
    });
  }
  getAllArticleType():Promise<any> {
    return this.http.get('/blog/articleType/getAllArticleType')
      .toPromise()
      .then(res=>{
        return res;
      });
  }
  saveArticle(param):Promise<any> {
    const headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    return this.http.post('/blog/article/addArticle',param)
      .toPromise()
      .then(res=>{
         return res;
      });
  }
  updateArticle(param):Promise<any> {
    const headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    return this.http.post('/blog/article/updateArticle',param)
      .toPromise()
      .then(res=>{
        return res;
      });
  }
  deleteArticle(aid): Promise<any> {
    const headers = new HttpHeaders();
    const param = new HttpParams().set("aid",aid);
    headers.append('Content-Type', 'application/json');
    return this.http.post('/blog/article/deleteArticleById',param,{
      headers:headers
    })
      .toPromise()
      .then(res=>{
        return res;
      });
  }

  getArticleById(aid): Promise<any> {
    const headers = new HttpHeaders();
    const params = new HttpParams().set("aid",aid);
    headers.append('Content-Type', 'application/json');
    return this.http.get('/blog/article/getArticleById',{headers: headers, params: params})
      .toPromise()
      .then(res=>{
        return res;
      });

  }

  addArticleType(typename) :Promise<any> {
    const headers = new HttpHeaders();
    const param = {
      "typeContent":typename
    }
    headers.append('Content-Type', 'application/json');
    return this.http.post('/blog/articleType/addArticleType',param,{
      headers:headers
    })
      .toPromise()
      .then(res=>{
        return res;
      });
  }
}
