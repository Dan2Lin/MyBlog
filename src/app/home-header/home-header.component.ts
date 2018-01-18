import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {ArticleService} from "../service/article-service/article.service";

@Component({
  selector: 'app-home-header',
  templateUrl: './home-header.component.html',
  styleUrls: ['./home-header.component.css']
})
export class HomeHeaderComponent implements OnInit {
  searchCondition = "";
  constructor(
    private route: Router,
    private articleService: ArticleService
  ) { }
  ngOnInit() {
  }

  toUserManager() {
    this.route.navigate(['/usermanager']);
  }
  toWriteArticle() {
    this.route.navigate(['/writeArticle']);
  }
  search() {
      this.articleService.searchEvent.emit(this.searchCondition);
  }
}
