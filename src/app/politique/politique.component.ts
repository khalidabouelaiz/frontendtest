import { Component, OnInit } from '@angular/core';
import { Router, UrlTree, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-politique',
  templateUrl: './politique.component.html',
  styleUrls: ['./politique.component.css'],
})
export class PolitiqueComponent implements OnInit {
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
