import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { PersonalBlogComponent } from './personal-blog/personal-blog.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { AdminComponent } from './admin/admin.component';
import { BlogDetailsComponent } from './blog-details/blog-details.component';

const appRoutes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'about-me',
    component: AboutMeComponent
  },
  {
    path: 'blog',
    component: PersonalBlogComponent
  },
  {
    path: 'portfolio',
    component: PortfolioComponent
  },
  {
    path: 'admin',
    component: AdminComponent
  },
  {
    path: 'blog/:id',
    component: BlogDetailsComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
