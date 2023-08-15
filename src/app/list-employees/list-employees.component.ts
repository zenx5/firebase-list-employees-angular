import { Component } from '@angular/core';
import { EmployeeType } from 'src/assets/type';
import { FirebaseLinkService } from '../firebase-link.service';

@Component({
  selector: 'app-list-employees',
  templateUrl: './list-employees.component.html',
  styleUrls: ['./list-employees.component.css']
})
export class ListEmployeesComponent {

  employees:Array<EmployeeType> = [];

  constructor(public firebase:FirebaseLinkService) {
    firebase.onSnapshot( (employees:Array<EmployeeType>) => {
      this.employees=employees
    } )
  }

}
