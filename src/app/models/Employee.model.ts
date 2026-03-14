export class EmployeeModel {

  employeeId: number;
  name: string;
  contactNo: string;
  email: string;
  city: string;
  state: string;
  pincode: string;
  address:string;
  altConatctNo: string;
  designationId: number;
  createdDate: Date;
  modifiedDate: Date;
  role: string;

  constructor(
    employeeId: number = 0,
    name: string = '',
    contactNo: string = '',
    email: string = '',
    city: string = '',
    state: string = '',
    pincode: string = '',
    address: string = '',
    altConatctNo: string = '',
    designationId: number = 0,
    createdDate: Date = new Date(),
    modifiedDate: Date = new Date(),
    role: string = ''
  ) {
    this.employeeId = employeeId;
    this.name = name;
    this.contactNo = contactNo;
    this.email = email;
    this.city = city;
    this.state = state;
    this.pincode = pincode;
    this.address = address;
    this.altConatctNo = altConatctNo;
    this.designationId = designationId;
    this.createdDate = createdDate;
    this.modifiedDate = modifiedDate;
    this.role = role;
  }
} 



export interface IEmployeeListModel {
  employeeId: number;
  name: string;
  email: string;
  contactNo: string;
  city: string;
  state: string;
  pincode: string;
  address: string;
  altConatctNo: string;
  designationId: number;
  designationName: string;
  departmentId: number;
  departmentName: string;
  role: string;
  createdDate: string;
  modifiedDate: string;
}