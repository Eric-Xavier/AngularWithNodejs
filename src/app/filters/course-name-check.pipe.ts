import { Pipe, PipeTransform } from '@angular/core'
import { ICourse } from '../interfaces/ICourse'

@Pipe({
  name: 'courseNameCheck'
})

export class CourseNameCheckPipe implements PipeTransform {

  transform(cursos: ICourse[], input: string): ICourse[] {

    return cursos
      .filter(x => x.description.toLocaleLowerCase().includes(input.toLocaleLowerCase()));

  }

}
