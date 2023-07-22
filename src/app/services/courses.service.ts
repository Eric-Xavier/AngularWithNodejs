import { Injectable } from '@angular/core'
import { ICourse } from '../interfaces/ICourse';

@Injectable()
export class CourseService {

    public getCourseList(): ICourse[] {
        return [
            { id: 11, description: "Asp.Net MVC", hours: 40 },
            { id: 12, description: "Java SpringBoot", hours: 40 },
            { id: 13, description: "Python 2 - With Panda", hours: 60 },
            { id: 14, description: "Angular", hours: 16 },
            { id: 15, description: "React", hours: 16 },
            { id: 16, description: "Vue", hours: 16 },
            { id: 17, description: "Html, Javascript and CSS", hours: 60 }
        ];
    }
}
