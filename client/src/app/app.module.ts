
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import{ HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { RegisterComponent } from './components/register/register.component';
import { AuthService } from './services/auth.service';
import { BlogService } from './services/blog.service';
import { LoginComponent } from './components/login/login.component';
import { ProfileComponent } from './components/profile/profile.component';
import { AuthGuard } from './guard/auth.guard';
import { BlogComponent } from './components/blog/blog.component';
import { EditBlogComponent } from './components/blog/edit-blog/edit-blog.component';
import { DeleteBlogComponent } from './components/blog/delete-blog/delete-blog.component';
import { ErrorComponent } from './components/error/error.component';


const appRoutes: Routes =[
  { path: '',
   component:  BlogComponent, //default route
   canActivate: [AuthGuard]
  },
  {
    path: 'register',
    component: RegisterComponent // register route
  },
  {
    path:'login',
    component: LoginComponent // login route
  },
  {
    path: 'profile',
    component: ProfileComponent,
    canActivate: [AuthGuard]// profile route
  },
  {
    path: 'blog',
    component: BlogComponent,//(Posts/blog) route
    canActivate: [AuthGuard]
  },
  {
    path: 'edit-blog/:id',
    component: EditBlogComponent,//edit blog route
    canActivate: [AuthGuard]
    
  },
  {
    path: 'delete-blog/:id',
    component: DeleteBlogComponent,//delete blog route
    canActivate: [AuthGuard]
    
  },
  { 
    path:'**', 
    component: ErrorComponent // the "catch-all" route
  }
];



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    RegisterComponent,
    LoginComponent,
    ProfileComponent,
    BlogComponent,
    EditBlogComponent,
    DeleteBlogComponent,
    ErrorComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [AuthService, AuthGuard, BlogService],
  bootstrap: [AppComponent]
})
export class AppModule { }
