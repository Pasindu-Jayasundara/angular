import { Component } from '@angular/core';
import { Course } from '../models/course.model';
import { CourseService } from '../services/course.service';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-course-detail',
  imports: [CurrencyPipe],
  templateUrl: './course-detail.component.html',
  styleUrl: './course-detail.component.css'
})
export class CourseDetailComponent {

  course:Course | null = null;

  constructor(private courseService:CourseService){}

  loadCourseById(id:number):void{

    this.courseService.getCourseById(id).subscribe({

      next:(data:Course)=>{
        this.course = data;
      },
      error:(error)=>{
        console.log(error);
      }
    });
  }

}
