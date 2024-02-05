import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-sitemap',
  templateUrl: './sitemap.component.html',
  styleUrls: ['./sitemap.component.css'],
})
export class SitemapComponent implements OnInit {
  sitemapContent$: Observable<string>;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.sitemapContent$ = this.http.get('assets/sitemap.xml', {
      responseType: 'text',
    });
  }
}
