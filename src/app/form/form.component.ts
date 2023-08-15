import { Component, ElementRef, ViewChild } from '@angular/core';
import { FirebaseLinkService } from '../firebase-link.service';
import { EmployeeType } from 'src/assets/type';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {

  @ViewChild('name') name!:ElementRef<HTMLInputElement>
  @ViewChild('position') position!:ElementRef<HTMLInputElement>
  id!:string


  constructor(public firebase:FirebaseLinkService ) {
    firebase.onEditCallback = (employee:EmployeeType) => {
      this.id = employee.id
      this.name.nativeElement.value = employee.name
      this.position.nativeElement.value = employee.position
    }
  }

  handlerSave(){
    this.firebase.saveItem(
      this.id,
      this.name.nativeElement.value,
      this.position.nativeElement.value
    )
    this.id = ""
    this.name.nativeElement.value = ""
    this.position.nativeElement.value = ""
  }

}
