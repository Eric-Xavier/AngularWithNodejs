import { Component } from "@angular/core";
import { ICourse } from "src/app/interfaces/ICourse";

@Component({
    selector: 'course-register',
    templateUrl: './course-register.component.html'
})

export class CourseRegisterComponent
{
  public course: ICourse = {
    id : 1,
    description: "Demonstration",
    hours: 1
  }
}
