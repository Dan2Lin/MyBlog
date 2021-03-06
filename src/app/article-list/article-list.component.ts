import {Component, Input, OnInit} from '@angular/core';
import {ArticleService} from "../service/article-service/article.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.css']
})
export class ArticleListComponent implements OnInit {
  public articleList:any;
  constructor(
    private articleService:ArticleService,
    private router: Router,
  ) { }
  ngOnInit() {
    this.getAllArticles();
    this.articleService.searchEvent.subscribe(
      params => {
        this.articleService.searchArticle(params).then(
          result=> {
            this.articleList = result.data.articles;
          }
        );
      }
    );
  }
  showModal(){
    $('#deleteArticleModal').on('show.bs.modal', function (event) {
      const aid = $(event.relatedTarget).data('articleid');
      $(this).find('.article_id').text(aid);
    });
  }

  getAllArticles() {
    this.articleService.getArticleList()
      .then(res=> {
        if(res.code === 0){
          this.articleList = res.data.articles;
        }
      });
  }

  delArticle() {
    const aid = $(".article_id").text();
    if(aid){
      this.articleService.deleteArticle(aid)
        .then(result => {
           if(result.code === 0){
             this.getAllArticles();
           }
        });
    }
  }
  editArticle(item) {
    const aId = item.aId;
    if(aId){
       this.router.navigate(['/editArticle',aId]);
    } else {
       console.log("aid is null");
    }
  }

}
