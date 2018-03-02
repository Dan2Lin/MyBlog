import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { HomeHeaderComponent } from './home-header/home-header.component';
import { HomeMainComponent } from './home-main/home-main.component';
import { ArticleListComponent } from './article-list/article-list.component';
import { HomeFooterComponent } from './home-footer/home-footer.component';
import { UsermanagerComponent } from './usermanager/usermanager.component';
import { ArticleComponent } from './article/article.component';
import { EditorComponent } from './editor/editor.component';
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {LoginService} from "./service/login-service/login.service";
import {ArticleService} from "./service/article-service/article.service";
import {HashLocationStrategy, LocationStrategy} from "@angular/common";
import {UserService} from "./service/user-service/user.service";
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {DialogModule} from "primeng/primeng";
import * as $ from 'jquery';
import { EditArticleComponent } from './edit-article/edit-article.component';
import { TestComponent } from './test/test.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    HomeHeaderComponent,
    HomeMainComponent,
    ArticleListComponent,
    HomeFooterComponent,
    UsermanagerComponent,
    ArticleComponent,
    EditorComponent,
    EditArticleComponent,
    TestComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    DialogModule
  ],
  providers: [
    LoginService,
    ArticleService,
    UserService,
    {
      provide: LocationStrategy,
      useClass: HashLocationStrategy
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
