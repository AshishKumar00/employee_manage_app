import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { EmployeeModel, IEmployeeListModel } from '../models/Employee.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  
  apiUrl: string = "https://localhost:7179/api/";

  http = inject(HttpClient);

  saveEmployee(obj : EmployeeModel) {
     return this.http.post(this.apiUrl +"EmployeeMaster",obj);
  }

   getAllEmployee(): Observable<IEmployeeListModel[]> {
     return this.http.get<IEmployeeListModel[]>(this.apiUrl +"EmployeeMaster");
  }

   getAllEmployeeById(id: number): Observable<EmployeeModel> {
     return this.http.get<EmployeeModel>(this.apiUrl +"EmployeeMaster/"+id);
  }
}
