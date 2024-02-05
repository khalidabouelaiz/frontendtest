import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-robots',
  templateUrl: './robots.component.html',
  styleUrls: ['./robots.component.css'],
})
export class RobotsComponent implements OnInit {
  robotsTxtContent$: Observable<string>;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.robotsTxtContent$ = this.http.get('assets/robots.txt', {
      responseType: 'text',
    });
  }
}
