import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router'
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { appRoutes } from './app.routes'
import { AppComponent } from './app.component';
import { HomeComponent } from "./components/home/home.component";
import { AppMenuComponent } from './components/menu/menu.component';
import { CourseListComponent } from './components/course/course-list/course-list.component';
import { CourseRegisterComponent } from './components/course/course-register/course-register.component';
import { NotFoundErrorComponent } from './components/error/not-found/not-found.component';
import { MasterDetailComponent} from './components/masterdetail/masterdetail.component'

import { CourseService } from './services/courses.service';
import { VerifyHoursPipe } from './filters/verify-hours.pipe'
import { CourseNameCheckPipe } from './filters/course-name-check.pipe'



@NgModule({
  declarations: [
    AppComponent,
    CourseListComponent,
    CourseRegisterComponent,
    AppMenuComponent,
    HomeComponent,
    MasterDetailComponent,

    NotFoundErrorComponent,
    VerifyHoursPipe,
    CourseNameCheckPipe
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    NgbModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [CourseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
