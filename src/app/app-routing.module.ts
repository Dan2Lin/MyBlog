import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {UsermanagerComponent} from './usermanager/usermanager.component';
import {ArticleComponent} from './article/article.component';
import {LoginComponent} from './login/login.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'usermanager',
    component: UsermanagerComponent,
  },
  {
    path: 'writeArticle',
    component: ArticleComponent,
  },
  {
    path: '**',
    component: LoginComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
