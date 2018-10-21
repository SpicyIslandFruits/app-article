import { Component, OnInit } from '@angular/core';
import { Article } from '../core/models/article';
import { ArticleService } from '../core/services/article.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {
  articles: Article[];
  constructor(
    private articleService: ArticleService,
    private router: Router
  ) { }

  ngOnInit() {
    this.articleService.getArticles().subscribe(
      values => this.articles = values
    );
  }

}
