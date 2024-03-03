import { Component, OnInit } from '@angular/core';
import { Router, UrlTree, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-cookies',
  templateUrl: './cookies.component.html',
  styleUrls: ['./cookies.component.css'],
})
export class CookiesComponent implements OnInit {
  constructor(public router: Router) {}

  ngOnInit(): void {}
  onLog() {
    this.router.navigate(['/login']);
  }
  onInsc() {
    this.router.navigate(['/sign-up']);
  }
  onabout() {
    this.router.navigate(['/aboutUS']);
  }
  onregl() {
    this.router.navigate(['/regledejeux']);
  }
}
