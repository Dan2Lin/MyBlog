import {Component, Input, OnInit} from '@angular/core';
import {ArticleService} from "../service/article-service/article.service";

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.css']
})
export class ArticleListComponent implements OnInit {
  @Input()
  private articleList:any;
  constructor(private articleService:ArticleService) { }
  ngOnInit() {
    this.articleService.searchEvent.subscribe(
      params => {
        this.articleService.searchArticle(params).then(
          result=> this.articleList = result.data.articles
        );
      }
    );
  }
}
