import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {

  loginObj:any = {
    email: '',
    contactNo: ''
  };

   http = inject(HttpClient);
   router = inject(Router)

onLogin() {
      debugger; 

    this.http.post('https://localhost:7179/api/EmployeeMaster/login', this.loginObj).subscribe({
      next: (result: any) => {
        debugger;
        localStorage.setItem('empLoginUser',JSON.stringify(result.data))
        
        //define the role base access 
        if(result.data.role == "Employee"){
          this.router.navigateByUrl("new-employee/"+ result.data.employeeId);
        }
        else{
          this.router.navigateByUrl("dashboard");
        }
        
       
      },
      error: (error: any) => {
        debugger;
        alert(error.error.message)
      },
    });
  }

}
