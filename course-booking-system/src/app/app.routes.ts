import { Routes } from '@angular/router';
import { CourseListComponent } from './course-list/course-list.component';
import { CourseDetailComponent } from './course-detail/course-detail.component';

export const routes: Routes = [
    {path:'',redirectTo:'courses',pathMatch:'full'},
    {path:'courses',component:CourseListComponent},
    {path:'courses/:id',component:CourseDetailComponent},
];
