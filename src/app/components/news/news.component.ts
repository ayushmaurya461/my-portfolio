import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { SidebarService } from '../../services/sidebar.service';

@Component({
  selector: 'app-news',
  standalone: true,
  imports: [],
  templateUrl: './news.component.html',
  styleUrl: './news.component.scss',
})
export class NewsComponent {
  router = inject(Router);
  sidebar = inject(SidebarService);

  onSearchSubmit(event: any) {
    event?.preventDefault();
  }

  loadFullBlog() {
    this.router.navigate(['/full-blog']);
  }

  toggleSidebar() {
    this.sidebar.toggleEnable = true;
    this.sidebar.showSidebar();
  }
}
