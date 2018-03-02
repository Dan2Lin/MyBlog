import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {ArticleService} from "../service/article-service/article.service";
import {EditorComponent} from "../editor/editor.component";
import {Router} from "@angular/router";
@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {

  titleArticle:string;
  @Input()
  private typeArticle:any;
  private contentArticle:string;
  private textArticle:string;
  private typeCheckedId:string;
  @ViewChild('editor')
  private  editor:EditorComponent;
  private display:boolean = false;
  private tipMsg:string = "";
  private isColse:boolean = false;
  constructor(
    private articleService: ArticleService,
    private router: Router,
  ) { }

  ngOnInit() {
    this.getAllArticleType();
  }
  publishArticle() {
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
    if(textArticle === "" ||!textArticle){
      this.isColse = true;
      this.openModal("内容不能为空");
      return;
    }
    const param = {
      title:this.titleArticle,
      tId:this.typeCheckedId,
      publishTime:new Date(),
      content:this.contentArticle,
      pageview:0
    };
    this.articleService.saveArticle(param)
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
      $(target).parent('label').siblings().children("input:checkbox").each(function (item) {
         $(this).children("input:checkbox").attr("checked");
      });
      this.typeCheckedId = id;
    }else{
      this.typeCheckedId = "";
    }
  }
  getEditorContent():string {
    return this.editor.getEditorContent();
  }
  getEditorText():string {
    return this.editor.getEditorText();
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
  getAllArticleType() {
    this.articleService.getAllArticleType()
      .then(result =>{
        this.typeArticle = result.data.articleTypes;
      });
  }
  addArticleType() {
    const typename = $("#typename").val();
    this.articleService.addArticleType(typename)
      .then(res=>{
          if(res.code === 0){
            this.getAllArticleType();
          }
      });
  }
}
