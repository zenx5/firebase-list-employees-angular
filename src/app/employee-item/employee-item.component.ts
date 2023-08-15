import { Component, Input } from '@angular/core';
import { EmployeeType } from 'src/assets/type';
import { FirebaseLinkService } from '../firebase-link.service';

@Component({
  selector: 'app-employee-item',
  templateUrl: './employee-item.component.html',
  styleUrls: ['./employee-item.component.css']
})
export class EmployeeItemComponent {
  @Input() employee!:EmployeeType

  constructor(public firebase:FirebaseLinkService){}

  handlerEdit( id:string ){
    this.firebase.editItem( id )
  }

  handlerDelete( id:string ){
    this.firebase.deleteItem(id)
  }

}
