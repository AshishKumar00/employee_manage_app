import { Component, inject } from '@angular/core';
import { EmployeeModel } from '../../models/Employee.model';
import { FormsModule } from '@angular/forms';
import { EmployeeService } from '../../services/employee-service';
import { Observable } from 'rxjs';
import { DesignationListModel } from '../../models/Department.model';
import { Master } from '../../services/master';
import { AsyncPipe } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-employee-form',
  imports: [FormsModule,AsyncPipe],
  templateUrl: './employee-form.html',
  styleUrl: './employee-form.css',
})
export class EmployeeForm {

  //Template Only

  newEmployeeObj : EmployeeModel = new EmployeeModel();
  empService = inject(EmployeeService);
  masterSrv = inject(Master);

   //services created for activated route
    activeRoute = inject(ActivatedRoute);

    $designationList: Observable<DesignationListModel[]> = new Observable<DesignationListModel[]>();

      loggedEmpData: EmployeeModel = new EmployeeModel();


  constructor() {

     const localdata = localStorage.getItem('empLoginUser');
    if(localdata != null){
      this.loggedEmpData = JSON.parse(localdata);
    }
    // Listen to route param changes.
    this.activeRoute.params.subscribe((res:any)=>{
      const id = Number(res.id ?? 0);
      if (id > 0) {
        // Edit existing employee
        this.newEmployeeObj.employeeId = id;
        this.getEmpById();
      } else {
        // Create new employee (clear any previous state)
        this.newEmployeeObj = new EmployeeModel();
      }
    });

    // coming from master service
    this.$designationList = this.masterSrv.getAllDesignation();
  }

  getEmpById() {
    this.empService.getAllEmployeeById(this.newEmployeeObj.employeeId).subscribe({
      next:(result)=> {
        this.newEmployeeObj = result;
      }
    });
  }

  //Caling Create API/ Post API
  onSaveEmp(){
    debugger;
    this.empService.saveEmployee(this.newEmployeeObj).subscribe({
      next:(result) => {
        alert("Employee Created Success..");
        
        //Reset the form we have to initialize the class
        this.newEmployeeObj = new EmployeeModel();

      },
      error:(error)=>{
        alert("Employee creation failed");
      }
    })
  }

  

}
