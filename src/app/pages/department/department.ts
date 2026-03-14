import { Component, inject, OnInit } from '@angular/core';
import { DepartmentModel } from '../../models/Department.model';
import { FormsModule } from '@angular/forms';
import { Master } from '../../services/master';

@Component({
  selector: 'app-department',
  imports: [FormsModule],
  templateUrl: './department.html',
  styleUrl: './department.css',
})
export class Department implements OnInit {
  
  newDeptObj: DepartmentModel = new DepartmentModel();
  masterService = inject(Master);
  deptList: DepartmentModel[] = [];

  ngOnInit(): void {
    this.getAllDepartments();
  }

  onSaveDept() {
    this.masterService.saveDept(this.newDeptObj).subscribe({
      next: (result: any) => {
        debugger;
        alert('department Created Success');
        this.getAllDepartments();
      },
      error: (error) => {
        alert: error.error;
      },
    });
  }

  getAllDepartments() {
    this.masterService.getAllDept().subscribe({
      next: (result: any) => {
        this.deptList = result;
      },
    });
  }


  onEdit(data: DepartmentModel) {
    debugger;
    //we have to detect the reference
    const strData = JSON.stringify(data);
    const parseObj = JSON.parse(strData);
    this.newDeptObj = parseObj;
  }

  onReset(){
      this.newDeptObj = new DepartmentModel();
  }


  onUpdateDept() {
    debugger;
    this.masterService.updateDept(this.newDeptObj).subscribe({
      next: (result: any) => {
        debugger;
        alert('department Updated Success');
        this.getAllDepartments();
      },
      error: (error) => {
        alert (error.error)
      },
    });
  }


   onDelete(id: number) {
    debugger;
    const isDelete = confirm("Are you sure want to delete");
    if(isDelete){
    this.masterService.deleteDept(id).subscribe({
      next: (result: any) => {
        debugger;
        alert('Department Deleted Success');
        this.getAllDepartments();
      },
      error: (error) => {
        alert (error.error)
      },
    });
    }
  }




 


}
