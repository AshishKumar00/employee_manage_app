import { Component, inject, OnInit, signal } from '@angular/core';
import {  IEmployeeListModel } from '../../models/Employee.model';
import { EmployeeService } from '../../services/employee-service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-employee-list',
  imports: [RouterLink],
  templateUrl: './employee-list.html',
  styleUrl: './employee-list.css',
})
export class EmployeeList implements OnInit{

  employeeList = signal<IEmployeeListModel[]>([]);
  empSr = inject(EmployeeService);

  //calling on Page Load by using ngOninit
  ngOnInit(): void {
    this.getAllEmp();
  }


  getAllEmp() {
    this.empSr.getAllEmployee().subscribe({
      next:(result:IEmployeeListModel[]) => {
        debugger;
        this.employeeList.set(result);
      }
    })
  }

}
