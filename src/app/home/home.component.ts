import { Component, OnInit } from '@angular/core';
import {ArticleService} from "../service/article-service/article.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  articleList:any;
  loading:Boolean;
  constructor(private articleService: ArticleService) { }

  ngOnInit() {
    console.log("-----ngOnInit called-----");
    this.getArticelList();
  }

  getArticelList(){
    this.articleService.getArticleList().then(res =>{
      this.articleList = res.data.articles;
    });
  }

}
