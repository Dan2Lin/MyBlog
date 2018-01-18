import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { HomeHeaderComponent } from './home-header/home-header.component';
import { SearchComponent } from './search/search.component';
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

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    HomeHeaderComponent,
    SearchComponent,
    HomeMainComponent,
    ArticleListComponent,
    HomeFooterComponent,
    UsermanagerComponent,
    ArticleComponent,
    EditorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
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
