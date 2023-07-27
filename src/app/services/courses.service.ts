//import { ICourse } from './../interfaces/ICourse';
import { Injectable } from '@angular/core'
import { ICourse } from '../interfaces/ICourse';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'
import 'rxjs/ajax'



@Injectable()
export class CourseService {

  private _httpClient: HttpClient;

  private _url = "http://localhost:3000/course"

  /**
   * Service to get data of courses
   */
  constructor(httpClient: HttpClient) {

    this._httpClient = httpClient;
  }

  /**
   * Get all available courses
   * @returns Observable<ICourse[]>
   */
  public getCourseListAsync(): Observable<ICourse[]> {
    return this._httpClient.get<ICourse[]>(this._url);
  }


  /**
   * Post a new course
   * @returns Observable<ICourse[]>
   */
  public postCourse(item:ICourse) : Observable<ICourse>{
    //let headers = new Headers({'Content-Type': 'application/json'});
    let headers = {'Content-Type': 'application/json'};
    let body = JSON.stringify(item);

    return this._httpClient.post<ICourse>(this._url, body, {headers});
  }


}
