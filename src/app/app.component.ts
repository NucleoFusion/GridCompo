import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
//import TypeEnum from './modules/enums/TypeEnum';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'grid';

  countries = [
    { id: "USA", name: "United States" },
    { id: "Canada", name: "Canada" }
  ];

  states = {
    USA: [
      { id: "California", name: "California" },
      { id: "Texas", name: "Texas" },
      { id: "New York", name: "New York" }
    ],
    Canada: [
      { id: "Ontario", name: "Ontario" },
      { id: "Quebec", name: "Quebec" },
      { id: "British Columbia", name: "British Columbia" }
    ]
  };
}
