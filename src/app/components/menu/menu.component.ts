import { Component } from '@angular/core';

@Component({
  selector: 'app-menu-component',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class AppMenuComponent {

  public schoolTitle:string = "Dummy Training";
  public courseListTitle : string = "Courses";
  public registerTitle: string = "Register";

  public open(value:string){
    console.log(value);
  }

}
