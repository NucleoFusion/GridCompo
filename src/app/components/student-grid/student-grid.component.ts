import { Component } from '@angular/core';
import { Column } from 'devextreme/ui/data_grid';
import { GridComponent } from '../grid/grid.component';

@Component({
  selector: 'app-student-grid',
  imports: [GridComponent],
  templateUrl: './student-grid.component.html',
  styleUrl: './student-grid.component.css'
})
export class StudentGridComponent {

  students = [
    { student_id: 1, name: "Alice Johnson", age: 14, grade: "9th", school_id: 1, course_id: 1 },
    { student_id: 2, name: "Bob Smith", age: 15, grade: "10th", school_id: 2, course_id: 2 },
    { student_id: 3, name: "Charlie Brown", age: 13, grade: "8th", school_id: 1, course_id: 3 },
    { student_id: 4, name: "David Green", age: 16, grade: "11th", school_id: 3, course_id: 4 },
    { student_id: 5, name: "Emma Wilson", age: 14, grade: "9th", school_id: 2, course_id: 5 },
    { student_id: 6, name: "Frank White", age: 15, grade: "10th", school_id: 3, course_id: 6 },
    { student_id: 7, name: "Grace Lee", age: 13, grade: "8th", school_id: 1, course_id: 7 },
    { student_id: 8, name: "Henry Adams", age: 17, grade: "12th", school_id: 2, course_id: 8 },
    { student_id: 9, name: "Ivy Carter", age: 16, grade: "11th", school_id: 3, course_id: 9 },
    { student_id: 10, name: "Jack Murphy", age: 14, grade: "9th", school_id: 1, course_id: 10 }
  ];

  schools = [
    { school_id: 1, name: "Greenwood High", city: "New York", state: "NY", num_students: 500 },
    { school_id: 2, name: "Sunrise Academy", city: "Los Angeles", state: "CA", num_students: 750 },
    { school_id: 3, name: "Lakeside School", city: "Chicago", state: "IL", num_students: 600 }
  ];

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
    { dataField: "student_id", dataType: "number", caption: "Student ID", allowEditing: false },
    { dataField: "name", dataType: "string", caption: "Name" },
    { dataField: "age", dataType: "number", caption: "Age" },
    { dataField: "grade", dataType: "string", caption: "Grade" },
    { dataField: "school_id", dataType: "number", caption: "School ID", lookup: { dataSource: this.schools, valueExpr: "school_id", displayExpr: "name" } },
    { dataField: "course_id", dataType: "number", caption: "Course ID", lookup: { dataSource: this.courses, valueExpr: "course_id", displayExpr: "name" } }
  ];
}
