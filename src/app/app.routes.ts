import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { BioComponent } from './components/bio/bio.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { NewsComponent } from './components/news/news.component';
import { FullBlogComponent } from './components/news/full-blog/full-blog.component';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: 'home', component: HomeComponent },
  { path: 'who-am-i', component: BioComponent },
  { path: 'projects', component: ProjectsComponent },
  { path: 'news-&-tips', component: NewsComponent },
  { path: 'full-blog', component: FullBlogComponent },
];
