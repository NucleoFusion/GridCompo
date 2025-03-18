import { Routes } from '@angular/router';
import { SchoolGridComponent } from './components/school-grid/school-grid.component';
import { CourseGridComponent } from './components/course-grid/course-grid.component';
import { StudentGridComponent } from './components/student-grid/student-grid.component';
import { DependencyComponent } from './components/dependency/dependency.component';

export const routes: Routes = [
  { path: '', component: DependencyComponent },
  { path: 'school', component: SchoolGridComponent },
  { path: 'courses', component: CourseGridComponent },
  { path: 'students', component: StudentGridComponent },
];
