import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private data = [
    {
      id: 0,
      name: "BMW",
      model: "530i"
    },
    {
      id: 1,
      name: "Opel",
      model: "Astra"
    },
    {
      id: 2,
      name: "Skoda",
      model: "Superb"
    },
    {
      id: 3,
      name: "Audi",
      model: "A8L"
    },
    {
      id: 4,
      name: "Mazda",
      model: "CX5"
    },
    {
      id: 5,
      name: "Toyota",
      model: "Corolla"
    },
    {
      id: 6,
      name: "Subaru",
      model: "Impreza"
    },
    {
      id: 7,
      name: "Volkswagen",
      model: "Passat"
    }
  ];
}
