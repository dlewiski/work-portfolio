import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { masterFirebaseConfig } from './api-keys';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AppComponent } from './app.component';
import { routing } from './app.routing';
import { HomeComponent } from './home/home.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { PersonalBlogComponent } from './personal-blog/personal-blog.component';
import { AdminComponent } from './admin/admin.component';
import { BlogDetailsComponent } from './blog-details/blog-details.component';
import { BlogService } from './services/blog.service';
import { ProjectService } from './services/project.service';
import { ProjectDetailsComponent } from './project-details/project-details.component';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AuthGuardService } from './services/auth-guard.service'
import { AuthenticationService } from './services/authentication.service';
import { LoginComponent } from './login/login.component';


export const firebaseConfig = {
  apiKey: masterFirebaseConfig.apiKey,
  authDomain: masterFirebaseConfig.authDomain,
  databaseURL: masterFirebaseConfig.databaseURL,
  storageBucket: masterFirebaseConfig.storageBucket
};

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutMeComponent,
    PortfolioComponent,
    PersonalBlogComponent,
    AdminComponent,
    BlogDetailsComponent,
    ProjectDetailsComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  providers: [AuthGuardService, AuthenticationService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
