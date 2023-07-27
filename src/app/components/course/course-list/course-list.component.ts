import { Component, Pipe } from '@angular/core';
import { ICourse } from '../../../interfaces/ICourse'
import { CourseService } from '../../../services/courses.service'

@Component({
    selector: 'course-list',
    templateUrl: './course-list.component.html'
})

export class CourseListComponent {

  public list: ICourse[] = [];

  constructor(courseService:CourseService) {

    courseService.getCourseListAsync()
    .subscribe({
      next: (response) => this.list = response,
      error: (error) => {console.error("CourseService", error); debugger;  alert(error.message)},
      complete: () => console.log('Get list course executed')
    });
  }

}


