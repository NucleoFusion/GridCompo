import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { DxDataGridModule } from 'devextreme-angular';
// import GridField from '../../modules/interfaces/GridField';
import { Column } from 'devextreme/ui/data_grid';

@Component({
  selector: 'app-grid',
  imports: [CommonModule, DxDataGridModule],
  templateUrl: './grid.component.html',
  styleUrl: './grid.component.css'
})
export class GridComponent {
  @Input() columns !: Array<Column>;
  @Input() data!: any[];
  @Output() EditorPrepare = new EventEmitter<any>();
  @Output() CellChange = new EventEmitter<any>();


  dependency = {};

  handleInput(eventData: { [key: string]: any }) {
    this.data.push(eventData)
  }

  handleCellValueChanged(e: any) {
    this.CellChange.emit(e)
  }

  handlePrep(e: any) {
    this.EditorPrepare.emit(e);
  }
}
