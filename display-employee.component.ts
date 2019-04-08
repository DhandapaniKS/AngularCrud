import { Component, OnInit, Input, OnChanges, SimpleChanges, EventEmitter, Output } from '@angular/core';
import { Employee } from '../models/employee.modes';

@Component({
  selector: 'app-display-employee',
  templateUrl: './display-employee.component.html',
  styleUrls: ['./display-employee.component.css']
})
export class DisplayEmployeeComponent implements OnInit /*, OnChanges*/ {

  @Input() employee: Employee;

  //@Output() notify: EventEmitter<string> = new EventEmitter<string>(); Used for passing string(name)
  @Output() notify: EventEmitter<Employee> = new EventEmitter<Employee>();

  constructor() { }

  ngOnInit() {
  }

  handleClick() {
    // this.notify.emit(this.employee.name);
    this.notify.emit(this.employee);
  }

  /*ngOnChanges(changes: SimpleChanges) {
    console.log(changes);
    const previousEmployee = <Employee>changes.employee.previousValue;
    const currentEmployee = <Employee>changes.employee.currentValue;
    console.log("Previous " + (previousEmployee ? previousEmployee.name : 'NULL'));
    console.log("Current " + currentEmployee.name);
  }*/

}
