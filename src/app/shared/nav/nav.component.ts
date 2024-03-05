import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SidebarService } from '../../services/sidebar.service';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.scss',
})
export class NavComponent {
  sidebar = inject(SidebarService);

  nav = [
    {
      icon: 'pi pi-home',
      url: 'home',
      text: 'Home',
    },
    {
      icon: 'pi pi-verified',
      url: 'who-am-i',
      text: 'Who Am I',
    },
    // {
    //   icon: 'pi pi-bolt',
    //   url: 'news-&-tips',
    //   text: 'News & Tips',
    // },
  ];

  socials = [
    {
      link: 'https://www.instagram.com/ayush__maurya_',
      name: 'Instagram',
      color: '#eb3477',
      icon: 'pi pi-instagram',
    },
    {
      link: 'https://github.com/ayushmaurya461',
      name: 'Github',
      color: '#038c1e',
      icon: 'pi pi-github',
    },
    {
      link: 'https://www.linkedin.com/in/ayush-maurya-796433254/',
      name: 'LinkedIn',
      color: '#0731ad',
      icon: 'pi pi-linkedin',
    },
    {
      link: 'https://twitter.com/ayushmaurya461',
      name: 'Twitter',
      color: '#0a8d94',
      icon: 'pi pi-twitter',
    },
    {
      link: 'https://leetcode.com/ayushmaurya461/',
      name: 'Leetcode',
      color: '#ad5d07',
      icon: 'pi pi-code',
    },
  ];

  hideSidebar() {
    this.sidebar.hideSidebar();
  }
}
