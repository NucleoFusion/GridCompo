import { Component } from '@angular/core';
import { Column } from 'devextreme/ui/data_grid';
import { GridComponent } from '../grid/grid.component';
import Editor from 'devextreme/ui/editor/editor';

@Component({
  selector: 'app-dependency',
  imports: [GridComponent],
  templateUrl: './dependency.component.html',
  styleUrl: './dependency.component.css'
})
export class DependencyComponent {
  locations = [
    { id: 1, countryA: "USA", stateA: "California", countryB: "USA", stateB: "Texas" },
    { id: 2, countryA: "USA", stateA: "New York", countryB: "Canada", stateB: "Ontario" },
    { id: 3, countryA: "Canada", stateA: "Quebec", countryB: "Canada", stateB: "British Columbia" },
    { id: 4, countryA: "India", stateA: "Maharashtra", countryB: "India", stateB: "Karnataka" },
    { id: 5, countryA: "India", stateA: "Delhi", countryB: "Australia", stateB: "New South Wales" },
    { id: 6, countryA: "Australia", stateA: "Victoria", countryB: "Australia", stateB: "Queensland" }
  ]

  countries = ["USA", "Canada", "India", "Australia"]

  states = [
    { id: 1, country: "USA", state: "California" },
    { id: 2, country: "USA", state: "Texas" },
    { id: 3, country: "USA", state: "New York" },
    { id: 4, country: "Canada", state: "Ontario" },
    { id: 5, country: "Canada", state: "Quebec" },
    { id: 6, country: "Canada", state: "British Columbia" },
    { id: 7, country: "India", state: "Maharashtra" },
    { id: 8, country: "India", state: "Karnataka" },
    { id: 9, country: "India", state: "Delhi" },
    { id: 10, country: "Australia", state: "New South Wales" },
    { id: 11, country: "Australia", state: "Victoria" },
    { id: 12, country: "Australia", state: "Queensland" }
  ];

  columns: Array<Column> = [
    {
      dataField: "id",
      visible: false,
      caption: "id",
    },
    {
      dataField: "countryA",
      visible: true,
      caption: "Country A",
      lookup: {
        dataSource: this.countries,
      },
    },
    {
      dataField: "stateA",
      visible: true,
      caption: "State A",
      lookup: {
        dataSource: this.states.map(obj => obj.state),
      },
    },
    {
      dataField: "countryB",
      visible: true,
      caption: "Country B",
      lookup: {
        dataSource: this.countries,
      },
    },
    {
      dataField: "stateB",
      visible: true,
      caption: "State B",
      lookup: {
        dataSource: this.states.map(obj => obj.state),
      },
    },
  ]


  handlePrepare(e: any) {
    if (e.dataField === "countryA" || e.dataField === "countryB") {
      e.editorOptions.onValueChanged = (args: any) => {
        e.component.cellValue(e.row.rowIndex, e.dataField === "countryA" ? 'stateA' : 'stateB', null);
        e.component.saveEditData(); // Save changes in batch edit mode
      };
    }

    if (e.dataField === "stateA") {
      var selectedCountry = e.row.data.countryA
      var data = this.states.filter(obj => obj.country == selectedCountry || selectedCountry == "").map(obj => obj.state)

      e.editorOptions.disabled = data.length === 0;
      e.editorOptions.dataSource = data

    } else if (e.dataField === "stateB") {
      var selectedCountry = e.row.data.countryB
      var data = this.states.filter(obj => obj.country == selectedCountry || selectedCountry == "").map(obj => obj.state)

      e.editorOptions.disabled = data.length === 0
      e.editorOptions.dataSource = data
    }
  }
}
