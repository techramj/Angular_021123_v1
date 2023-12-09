import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../shared/employee.service';


@Component({
  selector: 'app-emp-list',
  templateUrl: './emp-list.component.html',
  styleUrls: ['./emp-list.component.css']
})
export class EmpListComponent implements OnInit {

   empList:any[] = [];

  constructor(private empService:EmployeeService){}

  ngOnInit(): void {
    this.loadEmp();
  }

  deleteEmp(id:any){
    console.log('employee to be deleted: '+id);

  }

  loadEmp(){
    this.empService.getEmployees().subscribe(data=>{
      //console.log(data);
      this.empList = data;
    });
  }

}
