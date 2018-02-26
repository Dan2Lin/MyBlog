import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {LoginService} from "../service/login-service/login.service";
import {ArticleService} from "../service/article-service/article.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private route: Router, private loginService: LoginService, private articleService: ArticleService) { }

  ngOnInit() {
  }
  formSubmit(value) {
    this.loginService.doLogin(value).then(data=>{
      if(data.code === 0){
        this.route.navigate(['/home']);
      }else{
        console.log("登录失败");
      }
    });
  }
}
