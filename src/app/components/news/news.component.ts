import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-news',
  standalone: true,
  imports: [],
  templateUrl: './news.component.html',
  styleUrl: './news.component.scss',
})
export class NewsComponent {
  constructor(private router: Router) {}

  onSearchSubmit(event: any) {
    event?.preventDefault();
    console.log('Hi');
  }

  loadFullBlog() {
    this.router.navigate(['/full-blog']);
  }
}
