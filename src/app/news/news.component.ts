import { Component, OnInit } from '@angular/core';
import { Article } from '../core/models/article';
import { ArticleService } from '../core/services/article.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {
  articles: Article[];
  constructor(private articleService: ArticleService) { }

  ngOnInit() {
    this.articleService.getArticles().subscribe(
      values => this.articles = values
    );
  }

  click() {
    console.log(this.articles);
  }

}
