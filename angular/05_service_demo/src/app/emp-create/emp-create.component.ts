import { Component } from '@angular/core';
import { EmployeeService } from '../shared/employee.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-emp-create',
  templateUrl: './emp-create.component.html',
  styleUrls: ['./emp-create.component.css']
})
export class EmpCreateComponent {

  constructor(private empService: EmployeeService, private router:Router){}


  addEmployee(name:any, salary:any, email:any){
    console.log(name,salary, email);
    this.empService.addEmployee({name,salary, email})
    .subscribe(data=>{
      console.log("Added employee details", data);
      this.router.navigateByUrl("/emp-list")
    })
  }

}
