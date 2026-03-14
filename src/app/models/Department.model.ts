export class DepartmentModel{
    departmentId: number;
    departmentName : string;
    isActive: boolean;


    constructor() {
       this.departmentId = 0;
       this.departmentName ="";
       this.isActive = false;
        
    }
}

//model for 
export interface DesignationModel{
    designationId: number;
  departmentId: number;
  departmentName: string;
}


export interface DesignationListModel{
  designationId: number;
  departmentId: number;
  departmentName: string;
  designationName: string;
}