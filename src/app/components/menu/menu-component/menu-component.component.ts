import { Component } from '@angular/core';

@Component({
  selector: 'app-menu-component',
  templateUrl: './menu-component.component.html',
  styleUrls: ['./menu-component.component.css']
})
export class MenuComponentComponent {

  public schoolTitle:string = "Dummy Training";
  public listTitle : string = "Courses";
  public registerTitle: string = "Register";

  public open(value:string){
    console.log(value);
  }

}
