import { NgIf } from '@angular/common';
import { Component, inject } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { EmployeeModel } from '../../models/Employee.model';

@Component({
  selector: 'app-header',
  imports: [RouterOutlet,NgIf,RouterLink],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {

  isCollapsed = false;

  private router = inject(Router);
  loggedEmpData: EmployeeModel = new EmployeeModel();

  constructor() {
    const localdata = localStorage.getItem('empLoginUser');
    if(localdata != null){
      this.loggedEmpData = JSON.parse(localdata);
    }
  }


  toggleSidebar(){
    this.isCollapsed = !this.isCollapsed;
  }

  logout(){
    // Clear any stored authentication / session data
    localStorage.clear();
    sessionStorage.clear();
    localStorage.removeItem('empLoginUser');

    // Navigate back to login
    this.router.navigate(['/login']);
  }
}
