import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {ArticleService} from "../service/article-service/article.service";
import {EditorComponent} from "../editor/editor.component";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-edit-article',
  templateUrl: './edit-article.component.html',
  styleUrls: ['./edit-article.component.css']
})
export class EditArticleComponent implements OnInit {
  titleArticle:string;
  @Input()
  public typeArticle:any;
  public contentArticle:string;
  public textArticle:string;
  public typeCheckedId:string;
  public test:string;
  @ViewChild('editor')
  public editor:EditorComponent;
  public display:boolean = false;
  public tipMsg:string = "";
  public isColse:boolean = false;
  public articleDetail:any = {};
  public articleId:string;
  constructor(
    private articleService: ArticleService,
    private router: Router,
    private routeActive: ActivatedRoute,
  ) { }

  ngOnInit() {
    console.log("----ArticleComponent ngOnInit called ---");
    this.articleService.getAllArticleType()
      .then(res=> {
        this.typeArticle = res.data.articleTypes;
      });
    this.routeActive.params.subscribe(param => {
      this.articleService.getArticleById(param.aId)
        .then(result => {
          if(result.code === 0){
            this.articleDetail = result.data.article;
            this.articleId = this.articleDetail.aId;
            this.titleArticle = this.articleDetail.title;
            this.setEditorContent(result.data.article.content);
          }
        });
    });
  }
  updateArticle(aId) {
    console.log("update article aid = "+ aId);
    this.getCheckedType();
    this.textArticle = this.getEditorText();
    this.contentArticle = this.getEditorContent();
    const title = this.titleArticle;
    const typeCheckedId = this.typeCheckedId;
    const contentArticle = this.contentArticle;
    const textArticle = this.textArticle;
    if(title==="" || !title){
      this.isColse = true;
      this.openModal("标题不能为空");
      return;
    }
    if(typeCheckedId===""||!typeCheckedId){
      this.isColse = true;
      this.openModal("请选择文章类型");
      return;
    }
    if(contentArticle === "" ||!contentArticle){
      this.isColse = true;
      this.openModal("内容不能为空");
      return;
    }
    const param = {
      aId:this.articleId,
      title:this.titleArticle,
      tId:this.typeCheckedId,
      publishTime:new Date(),
      content:this.contentArticle,
      pageview:0
    };
    this.articleService.updateArticle(param)
      .then(result=>{
        this.isColse = false;
        if(result.code === 0){
          this.openModal("文章发布成功！");
        }else{
          this.openModal("文章发布失败！");
        }
      });
  }
  getTypeId(id:string,target) {
    if(target.checked === true){
      this.typeCheckedId = id;
      target.checked = true;
    }else{
      this.typeCheckedId = "";
      target.checked = false;
    }
  }
  getCheckedType() {
    const that = this;
    $("input:checkbox[name=aTypeCheckbox]:checked").each(function(i){
      that.typeCheckedId = $(this)[0].id;
    });
  }
  getEditorContent():string {
    return this.editor.getEditorContent();
  }
  getEditorText():string {
    return this.editor.getEditorText();
  }
  setEditorContent(content):string {
    return this.editor.setEditorContent(content);
  }
  openModal(msg:string) {
    this.display = true;
    this.tipMsg = msg;
  }
  hideDialog() {
    if(this.isColse){
      this.display = false;
    }else{
      this.router.navigate(['/home']);
    }
  }

}
