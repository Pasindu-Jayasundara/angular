import { Component, OnInit } from '@angular/core';
import { Course } from '../../../models/course.model';
import { CourseService } from '../../../services/course.service';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-add-new-course',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './add-new-course.component.html',
  styleUrl: './add-new-course.component.css',
})
export class AddNewCourseComponent implements OnInit {
  addCourseForm!: FormGroup;
  submissionSuccess: boolean = false;
  submissionError: string = '';

  constructor(private courseService: CourseService, private fb: FormBuilder) {}

  ngOnInit(): void {
    this.addCourseForm = this.fb.group({
      name: ['', Validators.required, Validators.name, Validators.minLength(3)],
      description: ['', Validators.required,Validators.minLength(3)],
      price: ['', Validators.required,Validators.min(0)],
      image: ['', Validators.required],
      duration: ['', Validators.required],
      soldOut: [false],
    });
  }

  get name() {
    return this.addCourseForm.get('name');
  }

  get description() {
    return this.addCourseForm.get('description');
  }

  get price() {
    return this.addCourseForm.get('price');
  }

  get image() {
    return this.addCourseForm.get('image');
  }

  get duration() {
    return this.addCourseForm.get('duration');
  }

  get soldOut() {
    return this.addCourseForm.get('soldOut');
  }

  onSubmit(): void {
    if (this.addCourseForm.invalid) {
      return;
    }

    const newCourse: Course = {
      id: 0,
      name: this.addCourseForm.value.title,
      description: this.addCourseForm.value.description,
      price: this.addCourseForm.value.price,
      image: this.addCourseForm.value.img,
      duration: this.addCourseForm.value.duration,
      soldOut: false,
    };

    this.courseService.addCourse(newCourse).subscribe({
      next: (course) => {
        this.submissionSuccess = true;
        this.addCourseForm.reset();
      },
      error: (error) => {
        console.log(error);
        this.submissionError =
          'There are an error adding course. Please try again';
      },
    });
  }
}
