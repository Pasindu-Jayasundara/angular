import { Routes } from '@angular/router';
import { CourseListComponent } from './course-list/course-list.component';
import { CourseDetailComponent } from './course-detail/course-detail.component';
import { AboutComponent } from './about/about.component';
import { SignUpFormComponent } from './sign-up-form/sign-up-form.component';

export const routes: Routes = [
    {path:'',redirectTo:'courses',pathMatch:'full'},
    {path:'courses',component:CourseListComponent},
    {path:'courses/:id',component:CourseDetailComponent},
    {path:'about',component:AboutComponent},
    {path:'sign-up',component:SignUpFormComponent},
];
