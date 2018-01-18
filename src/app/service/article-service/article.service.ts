import {EventEmitter, Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";
import 'rxjs/RX';
@Injectable()
export class ArticleService {
  searchEvent:EventEmitter<String> = new EventEmitter();
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
}
