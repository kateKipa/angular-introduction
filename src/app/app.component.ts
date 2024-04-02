// Controller ή & Model

import { Component } from '@angular/core';
import { PersonTableComponent } from './components/person-table/person-table.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [PersonTableComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  name = 'Katerina'                             //name: string = 'Kiparissi Katerina'

  person0 = {
      givenName: 'Katerina',
      surName: 'Kiparissi',
      age: 30,
      email: 'kate@gmail.com',
      address : 'Athens, Greece'
    }

  person1 = {
    givenName: 'John',
    surName: 'Doe',
    age: 0x25,
    email: 'john@gmail.com',
    address : 'New York, USA'
  }
}
