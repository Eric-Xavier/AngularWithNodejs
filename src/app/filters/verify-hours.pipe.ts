import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'verifyHours'
})
export class VerifyHoursPipe implements PipeTransform {

  transform(value: number): string {

    if (value < 40)
      return "Low volume of Hours";

    else if (value >= 40 && value < 60)
      return "Regular volume of hours"

    else
      return "High volume of hours";
  }

}
