import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeService } from '../shared/employee.service';
import { Employee } from '../shared/model/employee';

@Component({
  selector: 'app-emp-edit',
  templateUrl: './emp-edit.component.html',
  styleUrls: ['./emp-edit.component.css']
})
export class EmpEditComponent implements OnInit {
  id:number = 0;
  emp:Employee = new Employee();

  constructor(private route:ActivatedRoute,
              private empService: EmployeeService,
              private router: Router){}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    console.log('Id= '+this.id);
    this.empService.getEmployeeById(this.id)
    .subscribe(data=>{
      this.emp = data;
    });
  }

  updateEmployee(){
    this.empService.updateEmployee(this.id, this.emp)
    .subscribe(data=>{
      console.log("Updated employee details: ",data);
      this.router.navigateByUrl("/emp-list");
    });
  }

}
