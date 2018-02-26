import {EventEmitter, Injectable, Output} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";
import 'rxjs/RX';
@Injectable()
export class ArticleService {
  searchEvent:EventEmitter<String> = new EventEmitter();
  @Output() editEvent:EventEmitter<String> = new EventEmitter();
  constructor(private http:HttpClient) { }
  getArticleList():Promise<any> {
    return this.http.post('http://localhost:8081/blog/article/getArticles',null)
      .toPromise()
      .then(res=>{
        return res;
      });
  }
  searchArticle(param):Promise<any> {
    const inputUser = new HttpParams().set("searchInput",param);
    const headers = new HttpHeaders();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');
    return this.http.post('http://localhost:8081/blog/article/searchArticles',inputUser,{
      headers:headers
    }).toPromise()
      .then(res=>{
        return res;
    });
  }
  getAllArticleType():Promise<any> {
    return this.http.get('http://localhost:8081/blog/articleType/getAllArticleType')
      .toPromise()
      .then(res=>{
        return res;
      });
  }
  saveArticle(param):Promise<any> {
    const headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    return this.http.post('http://localhost:8081/blog/article/addArticle',param)
      .toPromise()
      .then(res=>{
         return res;
      });
  }
  deleteArticle(aid): Promise<any> {
    const headers = new HttpHeaders();
    const param = new HttpParams().set("aid",aid);
    headers.append('Content-Type', 'application/json');
    return this.http.post('http://localhost:8081/blog/article/deleteArticleById',param,{
      headers:headers
    })
      .toPromise()
      .then(res=>{
        console.log("-------delete article------");
        console.log(res);
        return res;
      });
  }

  getArticleById(aid): Promise<any> {
    const headers = new HttpHeaders();
    const params = new HttpParams().set("aid",aid);
    headers.append('Content-Type', 'application/json');
    return this.http.get('http://localhost:8081/blog/article/getArticleById',{headers: headers, params: params})
      .toPromise()
      .then(res=>{
        return res;
      });

  }
}
