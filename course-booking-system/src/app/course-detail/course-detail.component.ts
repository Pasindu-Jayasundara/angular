import { Component, OnInit } from '@angular/core';
import { Course } from '../models/course.model';
import { CourseService } from '../services/course.service';
import { CurrencyPipe } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-course-detail',
  imports: [CurrencyPipe],
  templateUrl: './course-detail.component.html',
  styleUrl: './course-detail.component.css'
})
export class CourseDetailComponent implements OnInit{

  course:Course | null = null;

  constructor(private courseService:CourseService, private route:ActivatedRoute){}

  ngOnInit(): void {
      
    this.route.paramMap.subscribe(params=>{

      const idString = params.get("id");
      if(idString){
        
        const id = +idString;
        this.loadCourseById(id);
      }

    });
  }

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
