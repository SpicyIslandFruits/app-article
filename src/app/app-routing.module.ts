import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewsComponent } from './news/news.component';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { EntranceComponent } from './entrance/entrance.component';
import { DetailComponent } from './detail/detail.component';

const routes: Routes = [
  { path: '', component: EntranceComponent },
  { path: 'news', component: NewsComponent },
  { path: 'detail/:id', component: DetailComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }
