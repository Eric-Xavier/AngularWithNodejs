import { Component } from '@angular/core';
import { ICourse } from './../../interfaces/ICourse';
import { CourseService } from '../../services/courses.service'

@Component({
  selector: 'masterdetail',
  templateUrl: './masterdetail.component.html'
})

export class MasterDetailComponent {

  public courseList: ICourse[] = [];
  public newCourse: ICourse;
  public selectedCourse: ICourse;


  constructor(private courseService: CourseService) {

    this.listCourses();
    this.selectedCourse = this.courseList[0];
    this.newCourse = { id: 0, description: '', hours: 0 };
  }

  public listCourses() {
    this.courseService.getCourseListAsync()
      .subscribe({
        next: (response) => this.courseList = response,
        error: (error) => console.error("CourseService", error),
        complete: () => console.log('Get list course executed')
      });
  }

  public selectCourse(item: ICourse): void {
    this.selectedCourse = item;
  }

  public emptyCourse(): void {
    this.selectedCourse = this.newCourse;
  }

  public postCourse(item: ICourse): void {
    debugger;
    /*if(!this.courseList.find(x=>x.id == item.id) &&
        !this.courseList.find(x=>x.description == item.description))
    {
        this.courseList.push(item);
        console.table(this.courseList);
    }
    else{
      console.warn('item already exist')
    }*/

    this.courseService.postCourse(item)
      .subscribe({
        next: (response)=> this.selectedCourse = response,
        error: (error)=> console.error(error),
        complete: () => this.listCourses()
      });

  }


}
