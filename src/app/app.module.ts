import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router'
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';

import { appRoutes } from './app.routes'
import { AppComponent } from './app.component';
import { HomeComponent } from "./components/home/home.component";
import { AppMenuComponent } from './components/menu/menu.component';
import { CourseListComponent } from './components/course/course-list/course-list.component';
import { CourseRegisterComponent } from './components/course/course-register/course-register.component';
import { NotFoundErrorComponent } from './components/error/not-found/not-found.component';

import { CourseService } from './services/courses.service'



@NgModule({
  declarations: [
    AppComponent,
    CourseListComponent,
    CourseRegisterComponent,
    AppMenuComponent,
    HomeComponent,

    NotFoundErrorComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    NgbModule,
    FormsModule
  ],
  providers: [CourseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
