import { Component } from '@angular/core';
import { GridComponent } from '../grid/grid.component';
import { Column } from 'devextreme/ui/data_grid';

@Component({
  selector: 'app-school-grid',
  imports: [GridComponent],
  templateUrl: './school-grid.component.html',
  styleUrl: './school-grid.component.css'
})
export class SchoolGridComponent {
  schools = [
    { school_id: 1, name: "Greenwood High", city: "New York", state: "NY", num_students: 500 },
    { school_id: 2, name: "Sunrise Academy", city: "Los Angeles", state: "CA", num_students: 750 },
    { school_id: 3, name: "Lakeside School", city: "Chicago", state: "IL", num_students: 600 }
  ];

  columns: Array<Column> = [
    { dataField: "school_id", dataType: "number", caption: "School ID", allowEditing: false },
    { dataField: "name", dataType: "string", caption: "School Name" },
    { dataField: "city", dataType: "string", caption: "City" },
    { dataField: "state", dataType: "string", caption: "State" },
    { dataField: "num_students", dataType: "number", caption: "Number of Students" }
  ];
}
