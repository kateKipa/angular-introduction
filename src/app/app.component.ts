// Controller ή & Model

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  name = 'Katerina'                             //name: string = 'Kiparissi Katerina'

  person = {
    givenName: 'Katerina',
    surName: 'Kiparissi',
    age: 30,
    email: 'kate@gmail.com'
  }
}
