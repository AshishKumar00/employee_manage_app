import { Component, inject } from '@angular/core';
import { DepartmentModel, DesignationListModel, DesignationModel } from '../../models/Department.model';
import { Master } from '../../services/master';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-designation',
  imports: [ReactiveFormsModule,AsyncPipe],
  templateUrl: './designation.html',
  styleUrl: './designation.css',
})


export class Designation {


  masterService = inject(Master);
  fb = inject(FormBuilder)

  designationForm!: FormGroup;

  $designationList: Observable<DesignationListModel[]> = new Observable<DesignationListModel[]>();
  departmentList: DepartmentModel[] = [];

  isEditMode: boolean = false;

   ngOnInit(): void{
    this.createForm();
    this.loadDepartments();
    this.loadDesignations();
  }

// ===========================
  //Form Creation
  // =========================
  createForm() {
    debugger;
    this.designationForm = this.fb.group({
    designationId: [0],
    departmentId: ['', Validators.required],
    designationName: ['', Validators.required]
    });
  }


   //===============================
  // Load Department DropDown
  // ===============================

    loadDepartments() {
      this.masterService.getAllDept().subscribe((res: any) => {
        this.departmentList = res;
      })
    }

    //

    loadDesignations(){
      this.$designationList = this.masterService.getAllDesignation()
    }

    
  // ===============================
  // SAVE// update DESIGNATION
  // ===============================

  onSave(){
    if(this.designationForm.invalid) {
      debugger;
      alert('Please fill all required fields');
      return;
    }

    const formValue = this.designationForm.value;

    if(this.isEditMode){
      //Update
      debugger;
      this.masterService.updateDesignation(formValue).subscribe(() => {
        alert('Designation Updated successfully');
        this.loadDesignations();
        this.resetForm();
      });
      
    }
    else{
        //Save
        debugger;
            this.masterService.saveDesignation(formValue).subscribe(()=> {
                      alert('Designation Saved successfully');
              this.loadDesignations();
            });

          }
       }     
  




     // ===============================
  // EDIT DESIGNATION
  // ===============================

  onEdit(item:DesignationListModel){
    this.isEditMode = true;

    this.designationForm.patchValue({
      designationId: item.designationId,
      departmentId: item.departmentId,
      designationName: item.designationName
    });
  }

  
  // ===============================
  // DELETE DESIGNATION
  // ===============================

  onDelete(id: number){
    const confirmDelete = confirm('Are you sure you want to delete?');

    if(confirmDelete){
      this.masterService.deleteDesignationById(id).subscribe(() =>{
        alert("Designation Deleted Successfully");
        this.loadDesignations();
      });
    }
  }
  
  // ===============================
  // RESET FORM
  // ===============================

  resetForm(){
    this.isEditMode = false;
    this.designationForm.reset({
      designationId: 0,
      departmentId: '',
      designationName: ''

    });
      
    }




}