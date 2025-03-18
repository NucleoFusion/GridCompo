import { Component } from '@angular/core';
import { GridComponent } from '../grid/grid.component';
import { Column } from 'devextreme/ui/data_grid';

@Component({
  selector: 'app-course-grid',
  imports: [GridComponent],
  templateUrl: './course-grid.component.html',
  styleUrl: './course-grid.component.css'
})
export class CourseGridComponent {
  courses = [
    { course_id: 1, name: "Mathematics", teacher: "Mr. Johnson", school_id: 1 },
    { course_id: 2, name: "Physics", teacher: "Ms. Carter", school_id: 2 },
    { course_id: 3, name: "Chemistry", teacher: "Dr. Lee", school_id: 3 },
    { course_id: 4, name: "Biology", teacher: "Mrs. Adams", school_id: 1 },
    { course_id: 5, name: "History", teacher: "Mr. Brown", school_id: 2 },
    { course_id: 6, name: "English", teacher: "Ms. Wilson", school_id: 3 },
    { course_id: 7, name: "Computer Science", teacher: "Dr. Green", school_id: 1 },
    { course_id: 8, name: "Economics", teacher: "Mr. Murphy", school_id: 2 },
    { course_id: 9, name: "Art", teacher: "Ms. White", school_id: 3 },
    { course_id: 10, name: "Physical Education", teacher: "Coach Davis", school_id: 1 }
  ];

  columns: Array<Column> = [
    { dataField: "course_id", dataType: "number", caption: "Course ID", allowEditing: false },
    { dataField: "name", dataType: "string", caption: "Course Name" },
    { dataField: "teacher", dataType: "string", caption: "Teacher" },
  ];
}
