import {
  AfterViewInit,
  Component,
  HostListener,
  Inject,
  Renderer2,
  inject,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from './shared/footer/footer.component';
import { NavComponent } from './shared/nav/nav.component';
import { isPlatformBrowser } from '@angular/common';
import { PLATFORM_ID } from '@angular/core';
import { SidebarService } from './services/sidebar.service';
import { DOCUMENT } from '@angular/common';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, FooterComponent, NavComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements AfterViewInit {
  @HostListener('window:resize', ['$event'])
  onResize(event: Event): void {
    this.sidebar.toggleEnable = true;
    if (!this.sidebar.sidebar.value) {
      if (window.innerWidth > 991) {
        this.sidebar.showSidebar();
      }
    } else if (this.sidebar.sidebar.value) {
      if (window.innerWidth < 991) {
        this.sidebar.hideSidebar();
      }
    }
  }

  title = 'itsayush';
  private sidebar = inject(SidebarService);
  private renderer = inject(Renderer2);

  content: any;
  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    @Inject(DOCUMENT) private document: Document
  ) {}

  ngAfterViewInit() {
    if (isPlatformBrowser(this.platformId)) {
      this.content = document.querySelector('.content') as HTMLElement;
    }
    this.sidebar.sidebar.subscribe({
      next: (res) => {
        const sidebar = this.document.querySelector('.sidebar') as HTMLElement;
        if (this.sidebar.toggleEnable)
          if (res) {
            if (sidebar) {
              this.renderer.setStyle(sidebar, 'transform', 'translateX(0)');
            }
          } else {
            this.renderer.setStyle(sidebar, 'transform', 'translateX(200%)');
          }
      },
      error: () => {},
    });
  }
  routeChanged(evnt: any) {
    if (this.content) this.content.scrollTop = 0;
  }
}
