import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { DepartmentModel, DesignationListModel, DesignationModel } from '../models/Department.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class Master {
  
  // common api url for all end point which is related to Department
  apiUrl: string = "https://localhost:7179/api/";

  http = inject(HttpClient)

  getAllDept(){
    return this.http.get(this.apiUrl +"department/GetAllDepartment")
  }

  saveDept(obj: DepartmentModel){
        return this.http.post(this.apiUrl +"department/AddDepatment", obj)

  }

  updateDept(obj: DepartmentModel){
        return this.http.put(this.apiUrl +"department/UpdateDepatment", obj)
  }

  deleteDept(id: number){
        return this.http.delete(this.apiUrl +"department/DeleteDepartment/"+ id)

  }

  // =============================
  // Designation APIs
  // =============================

  getAllDesignation(): Observable<DesignationListModel[]>{
    return this.http.get <DesignationListModel[]>(this.apiUrl + "DesignationMaster");
  }

  saveDesignation(obj: DesignationModel){
    return this.http.post(this.apiUrl + "DesignationMaster", obj);
  }

  updateDesignation(obj: DesignationModel){
    return this.http.put(this.apiUrl + "DesignationMaster/"+obj.designationId, obj);
  }

  deleteDesignationById(id: number){
    return this.http.delete(this.apiUrl + "DesignationMaster/" + id);
  }

}


