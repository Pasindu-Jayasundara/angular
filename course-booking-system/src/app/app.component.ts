import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CourseListComponent } from './course-list/course-list.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,CourseListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'course-booking-system';
}
