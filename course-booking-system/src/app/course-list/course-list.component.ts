import { Component, OnInit } from '@angular/core';
import { CourseCardComponent } from '../course-card/course-card.component';
import { Course } from '../models/course.model';
import { CourseService } from '../services/course.service';

@Component({
  selector: 'app-course-list',
  imports: [CourseCardComponent],
  templateUrl: './course-list.component.html',
  styleUrl: './course-list.component.css'
})

export class CourseListComponent implements OnInit {

  title:string = 'Course List';

  wishList: Course[] = [];
  bookedList: Course[] = [];

  courses: Course[] = [];

  constructor(private courseService: CourseService) {
  }

  ngOnInit(): void{

    this.courseService.getCourses().subscribe({

      next:(data: Course[])=>{
        this.courses = data;
      },
      error:(err)=>{
        console.error('Error fetching courses:', err);
      }

     });
  }

  onCourseBooked(course: Course): void {

    const foundCourse = this.bookedList.filter(c => c.id == course.id);
    alert(JSON.stringify(foundCourse));

    if(foundCourse.length > 0){
      alert(`Course already booked: ${course.name}`);
      return;
    }
    this.bookedList.push(course);
  }

  addToWishList(course: Course): void {

    const foundCourse = this.wishList.filter(c => c.id == course.id);

    if(foundCourse.length > 0){
      alert(`Course already in wishlist: ${course.name}`);
      return;
    }
    this.wishList.push(course);

    alert(`Course added to wishlist: ${course.name}`);
  }
}
