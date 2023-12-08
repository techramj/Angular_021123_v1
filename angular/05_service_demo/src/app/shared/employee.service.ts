import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Employee } from './model/employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

   //url :string = "http://localhost:3000/employees";
   url:string ="http://localhost:8080/employees";
  constructor(private http:HttpClient) { }

  getEmployees(): Observable<Employee[]>{
    return this.http.get<Employee[]>(this.url);
  }

  deleteEmployee(id:any): Observable<any>{
    return this.http.delete(this.url+"/"+id);
  }


}
