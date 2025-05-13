import { Injectable } from '@angular/core';
import { Course } from '../models/course.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})

export class CourseService {

  // private courses: Course[] = [
  //   {
  //     id: 1,
  //     name: 'Angular Basics',
  //     description: 'Learn the basics of Angular.',
  //     duration: '4 weeks',
  //     price: 200,
  //     soldOut: true,
  //     image: 'downloadang.png',
  //   },
  //   {
  //     id: 2,
  //     name: 'React Basics',
  //     description: 'Learn the basics of React.',
  //     duration: '4 weeks',
  //     price: 200,
  //     soldOut: false,
  //     image: 'downloadang.png',
  //   },
  //   {
  //     id: 3,
  //     name: 'Vue Basics',
  //     description: 'Learn the basics of Vue.',
  //     duration: '4 weeks',
  //     price: 200,
  //     soldOut: true,
  //     image: 'downloadang.png',
  //   },
  //   {
  //     id: 4,
  //     name: 'Node.js Basics',
  //     description: 'Learn the basics of Node.js.',
  //     duration: '4 weeks',
  //     price: 200,
  //     soldOut: false,
  //     image: 'downloadang.png',
  //   },
  //   {
  //     id: 5,
  //     name: 'Python Basics',
  //     description: 'Learn the basics of Python.',
  //     duration: '4 weeks',
  //     price: 200,
  //     soldOut: true,
  //     image: 'downloadang.png',
  //   },
  // ];

  private baseUrl = 'http://localhost:3000';
  private selectedCourse: Course | null = null;

  constructor(private http: HttpClient) {}

  getCourses(description?:string|null): Observable<Course[]> {

    let url = `${this.baseUrl}/courses`;
    if(description){
      url += `?description=${description}`;
    }

    return this.http.get<Course[]>(url);
  }

  getCourseById(id:number): Observable<Course>{
    return this.http.get<Course>(`${this.baseUrl}/courses/${id}`);
  }

  addCourse(course:Course):Observable<Course>{
    return this.http.post<Course>(`${this.baseUrl}/courses`, course);
  }

  getSelecetedCourse(): Course | null{
    return this.selectedCourse;
  }

  setSelectedCourse(course:Course):void{
    this.selectedCourse = course;
  }
}
