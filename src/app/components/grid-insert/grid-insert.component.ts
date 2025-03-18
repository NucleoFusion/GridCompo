import { CommonModule, TitleCasePipe } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Column } from 'devextreme/ui/data_grid';

@Component({
  selector: 'app-grid-insert',
  imports: [CommonModule, TitleCasePipe, FormsModule],
  standalone: true,
  templateUrl: './grid-insert.component.html',
  styleUrl: './grid-insert.component.css'
})
export class GridInsertComponent implements OnInit {
  @Input() columns!: Array<Column>;

  @Output() formSubmit = new EventEmitter<any>();

  formData: { [key: string]: any } = {}

  ngOnInit(): void {
    console.log(this.columns);


    this.columns.forEach(column => {
      if (column.name) {
        this.formData[column.name] = '';
      }
    });
  }

  onSubmit() {
    this.formSubmit.emit(this.formData)
  }
}
