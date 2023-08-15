import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormComponent } from './form/form.component';
import { ListEmployeesComponent } from './list-employees/list-employees.component';
import { EmployeeItemComponent } from './employee-item/employee-item.component';

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    ListEmployeesComponent,
    EmployeeItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
