import { Component } from '@angular/core';
import { CourseCardComponent } from '../course-card/course-card.component';
import { Course } from '../models/course.model';

@Component({
  selector: 'app-course-list',
  imports: [CourseCardComponent],
  templateUrl: './course-list.component.html',
  styleUrl: './course-list.component.css'
})

export class CourseListComponent {

  title:string = 'Course List';

  wishList: Course[] = [];
  bookedList: Course[] = [];

  courses: Course[] = [
    { id: 1, name: 'Angular Basics', description: 'Learn the basics of Angular.', duration: '4 weeks', price: 200, soldOut:true,image:"downloadang.png" },
    { id: 2, name: 'React Basics', description: 'Learn the basics of React.', duration: '4 weeks', price: 200, soldOut:false,image:"downloadang.png" },
    { id: 3, name: 'Vue Basics', description: 'Learn the basics of Vue.', duration: '4 weeks', price: 200, soldOut:true,image:"downloadang.png" },
    { id: 4, name: 'Node.js Basics', description: 'Learn the basics of Node.js.', duration: '4 weeks', price: 200, soldOut:false,image:"downloadang.png" },
    { id: 5, name: 'Python Basics', description: 'Learn the basics of Python.', duration: '4 weeks', price: 200, soldOut:true,image:"downloadang.png" },
  ]


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
