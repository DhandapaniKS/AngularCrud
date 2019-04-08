import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker';
import { EmployeeService } from './employee.service';
import { Department } from '../models/department.model';
import { Employee } from '../models/employee.modes';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {

  employee : Employee = 
    {
    id: null,
    name: null,
    gender: null,
    email: '',
    phoneNumber: null,
    contactPreference: null,
    dateOfBirth: null,
    department: null,
    //department: '-1',
    isActive: null,
    photoPath: null
    };

  gender = 'male';
  isActive = true;
  departments: Department[] = [
    {id: 1, name: "Help Desk"},
    {id: 2, name: "Human Resource"},
    {id: 3, name: "IT Support"},
    {id: 4, name: "Payroll"}
  ];

  datepickerConfig: Partial<BsDatepickerConfig>;

  photoPreview = false;

  constructor(private _employeeService: EmployeeService, private _router: Router) { 
    this.datepickerConfig = Object.assign({}, {containerClass: 'theme-dark-blue', showWeekNumbers: true, dateInputFormat: "DD/MM/YYYY"});
  }

  ngOnInit() {
  }

  /*
  saveEmployee(employee: NgForm): void {
    console.log(employee);
  }
  */

  /*saveEmployee(employee: Employee){
    console.log(employee);
  }*/

  saveEmployee(): void{
    this._employeeService.saveEmployee(this.employee);
    this._router.navigate(['list']);
  }

  togglePhotoPreview() {
    this.photoPreview = !this.photoPreview;
  }
}
