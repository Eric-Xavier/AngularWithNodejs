import { Routes } from "@angular/router"
import { CourseListComponent } from './components/course/course-list/course-list.component';
import { CourseRegisterComponent } from './components/course/course-register/course-register.component';
import { NotFoundErrorComponent } from "./components/error/not-found/not-found.component";
import { HomeComponent } from "./components/home/home.component";

export const appRoutes : Routes = [
    { path:"", component: HomeComponent },
    { path:"register", component: CourseRegisterComponent },
    { path:"list", component: CourseListComponent },
    { path: "**", component:NotFoundErrorComponent }
];




