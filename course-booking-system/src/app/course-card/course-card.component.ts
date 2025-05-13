import { CurrencyPipe } from '@angular/common';
import { Component, EventEmitter, Input, Output, output } from '@angular/core';
import { Course } from '../models/course.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-course-card',
  imports: [CurrencyPipe],
  templateUrl: './course-card.component.html',
  styleUrl: './course-card.component.css'
})
export class CourseCardComponent {
  @Input() course?: Course;
  @Output() courseBooked = new EventEmitter<Course>();
  @Output() addToWishList = new EventEmitter<Course>();

  constructor(private router:Router){}

  onBookCourse(): void {
    this.courseBooked.emit(this.course);
  }
  onAddToWishList(): void {
    this.addToWishList.emit(this.course);
  }

  goToDetails(courseId:number| undefined):void{
    if(courseId){
      this.router.navigate(["/courses",courseId]);
    }
  }
}
