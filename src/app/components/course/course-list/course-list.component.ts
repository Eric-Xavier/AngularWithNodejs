import { Component } from '@angular/core';
import { ICourse } from '../../../interfaces/ICourse'
import { CourseService } from '../../../services/courses.service'

@Component({
    selector: 'course-list',
    templateUrl: './course-list.component.html'
})

export class CourseListComponent {

  public list: ICourse[];

  constructor(courseService:CourseService) {
    this.list = courseService.getCourseList();
  }

}


