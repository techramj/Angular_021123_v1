import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../shared/employee.service';

@Component({
  selector: 'app-emp-list',
  templateUrl: './emp-list.component.html',
  styleUrls: ['./emp-list.component.css']
})
export class EmpListComponent implements OnInit {

   empList:{id:number,name:string,salary:number,email:string}[] = [];

  constructor(private empService:EmployeeService){}

  ngOnInit(): void {
    this.loadEmp();
  }

  deleteEmp(id:any){
    console.log('employee to be deleted: '+id);
    this.empService.deleteEmployee(id).subscribe(data=>{
      this.loadEmp();
    });
  }

  loadEmp(){
    this.empService.getEmployees().subscribe(data=>{
      //console.log(data);
      this.empList = data;
    });
  }

}
